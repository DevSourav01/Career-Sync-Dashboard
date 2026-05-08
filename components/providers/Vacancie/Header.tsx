import { Input } from "../../ui/input";

export default function Header() {
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-col sm:gap-4 px-5 py-2">
          <h1>Vacancy</h1>
          <p>Available Jobs</p>
          <h1>Total Vacancies 205</h1>
        </div>
        <div className="flex flex-row sm:flex-row px-5 sm:gap-6 justify-start items-center">
          <div>
            <Input placeholder="Search Vacancy..." />
          </div>
          <div>
            <select name="" id="">
              <option value="">Position</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
