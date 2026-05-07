import EmployeeTable from "@/components/Employee/EmployeeTable";
import Header from "@/components/Employee/Header";
import SearchInput from "@/components/Employee/SearchInput";

type DummyUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  birthDate: string;
  role?: string;
  company?: {
    title?: string;
  };
};

export type Employee = {
  id: number;
  name: string;
  email: string;
  startDate: string;
  role: string;
  status: "active" | "pending" | "leave";
  image: string;
};

function generateStatus(index: number): Employee["status"] {
  const statuses: Employee["status"][] = ["active", "pending", "leave"];
  return statuses[index % statuses.length];
}

function generateStartDate(birthDate: string, index: number) {
  const birthYear = new Date(birthDate).getFullYear();
  const startYear = birthYear + 22 + (index % 5);
  const month = String((index % 12) + 1).padStart(2, "0");
  const day = String(((index * 2) % 28) + 1).padStart(2, "0");
  return `${day}.${month}.${startYear}`;
}

async function getEmployees(): Promise<Employee[]> {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch employees");
  }

  const data = await res.json();

  return data.users.map((user: DummyUser, index: number) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    role: user.company?.title || user.role || "Employee",
    image: user.image,
    startDate: generateStartDate(user.birthDate, index),
    status: generateStatus(index),
  }));
}

export default async function EmployeesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; sort?: string; status?: string }>;
}) {
  const { search = "", sort = "position", status = "all" } = await searchParams;

  const employees = await getEmployees();

  // Filter
  const filtered = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "all" || emp.status === status;
    return matchesSearch && matchesStatus;
  });

  // Sort
  if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "date") {
    filtered.sort((a, b) => a.startDate.localeCompare(b.startDate));
  }

  return (
    <div className="min-h-screen px-2 py-2 sm:px-6 lg:px-8 ">
      <div className="flex flex-col gap-5 lg:w-90 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold sm:text-3xl">Employees</h1>
          <p className="text-sm">Current Employees</p>
        </div>
        <SearchInput /> {/* client component */}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
        <Header count={filtered.length} />

        {search.trim() !== "" && filtered.length === 0 ? (
          <p className="mt-4 text-sm text-gray-400">No result found</p>
        ) : (
          <EmployeeTable employees={filtered} />
        )}
      </div>
    </div>
  );
}
