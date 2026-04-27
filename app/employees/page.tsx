import EmployeeTable from "@/components/Employee/EmployeeTable";
import Header from "@/components/Employee/Header";

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

export default async function EmployeesPage() {
  const employees = await getEmployees();

  return (
    <div className="min-h-screen  px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold sm:text-3xl">Employees</h1>
          <p className="text-sm ">Current Employees</p>
        </div>

        <input
          type="search"
          placeholder="Search..."
          className="h-10 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm  outline-none sm:w-70"
        />
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
        <Header />
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
}