// ProjectCard.tsx
import { Card, CardContent } from "../ui/card";

type Props = {
  title: string;
  category: string;
  department: string;
  owner: string;
  due: string;
  status: string;
  progress: number;
};

export function ProjectCard(props: Props) {
  const { title, category, department, owner, due, status, progress } = props;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On track":
        return "bg-green-100 text-green-700";
      case "At risk":
        return "bg-yellow-100 text-yellow-700";
      case "Overdue":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card>
      <CardContent className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">
              {category} • {department}
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </div>

        <div className="space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium text-black">Owner:</span> {owner}
          </p>
          <p>
            <span className="font-medium text-black">Due date:</span> {due}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button className="px-3 py-2 text-sm border rounded-md">
            View Details
          </button>
          <button className="px-3 py-2 text-sm bg-black text-white rounded-md">
            Update Status
          </button>
        </div>
      </CardContent>
    </Card>
  );
}