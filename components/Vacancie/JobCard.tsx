import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "../ui/avatar";
import { Button } from "../ui/button";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer Fresher",
    company: "RK Web Solutions",
    location: "Kolkata, WB",
    salary: "₹3.5-8 LPA",
    skills: ["HTML", "CSS", "JS", "React"],
    remote: true,
    type: "Fresher"
  },
  {
    id: 2,
    title: "React Developer Trainee",
    company: "Idiosys Technologies",
    location: "Salt Lake, Kolkata",
    salary: "₹3-6 LPA",
    skills: ["React Hooks", "Next.js", "Git"],
    remote: false,
    type: "Trainee"
  },
  {
    id: 3,
    title: "Frontend Intern (Remote)",
    company: "PhygitalTech",
    location: "Sangli (Remote)",
    salary: "₹10k-15k/month",
    skills: ["JS", "React/Vue", "Responsive"],
    remote: true,
    type: "Intern"
  },
  {
    id: 4,
    title: "Front End Developer",
    company: "App Innovation Technologies",
    location: "Coimbatore, TN",
    salary: "₹3.5-5 LPA",
    skills: ["HTML/CSS", "React", "Debugging"],
    remote: false,
    type: "Fresher"
  },
  {
    id: 5,
    title: "React Frontend Fresher",
    company: "Webelyst Technologies",
    location: "Rajarhat, Kolkata",
    salary: "₹4-7 LPA",
    skills: ["React", "Next.js", "State Management"],
    remote: true,
    type: "Fresher"
  },
  {
    id: 6,
    title: "Junior Frontend Developer",
    company: "Daesung Electric India",
    location: "Chennai, TN",
    salary: "₹4-6 LPA",
    skills: ["JS Frameworks", "Tailwind CSS"],
    remote: false,
    type: "Junior"
  },
  {
    id: 7,
    title: "Frontend Developer Intern",
    company: "Codeclouds",
    location: "Kolkata",
    salary: "₹4.3-6 LPA",
    skills: ["React/Redux", "Testing"],
    remote: false,
    type: "Intern"
  },
  {
    id: 8,
    title: "React.js Developer Entry",
    company: "Crescentek",
    location: "Kolkata",
    salary: "₹3-7 LPA",
    skills: ["React.js", "Node basics"],
    remote: true,
    type: "Entry"
  },
  {
    id: 9,
    title: "Frontend Fresher",
    company: "Talent IT Solutions",
    location: "Chandigarh (Remote)",
    salary: "₹1.2-2.4 LPA",
    skills: ["HTML/CSS/JS", "React"],
    remote: true,
    type: "Fresher"
  },
  {
    id: 10,
    title: "Front-End Developer",
    company: "Diebold Nixdorf",
    location: "Kolkata",
    salary: "₹3-6 LPA",
    skills: ["JS", "React", "Responsive"],
    remote: false,
    type: "Fresher"
  },
  {
    id: 11,
    title: "Frontend Developer (Remote)",
    company: "Codebuddy Pvt. Ltd.",
    location: "Remote",
    salary: "₹12k-30k/month",
    skills: ["HTML", "CSS", "JS", "React/Angular/Vue"],
    remote: true,
    type: "Internship"
  },
  {
    id: 12,
    title: "React Developer",
    company: "Syphoon",
    location: "Remote",
    salary: "₹5-7 LPA",
    skills: ["Next.js", "React Native", "Figma", "Tailwind"],
    remote: true,
    type: "Mid-Level"
  },
  {
    id: 13,
    title: "Frontend React Developer",
    company: "LogIQ Labs Pvt. Ltd.",
    location: "Remote",
    salary: "₹4-8 LPA",
    skills: ["React.js", "UI Design", "TypeScript"],
    remote: true,
    type: "Contractor"
  },
  {
    id: 14,
    title: "Remote Frontend Developer",
    company: "Peak Hire Solutions",
    location: "Remote",
    salary: "₹75-120 LPA",
    skills: ["React.js", "JavaScript", "REST APIs"],
    remote: true,
    type: "Senior"
  },
  {
    id: 15,
    title: "Frontend Developer Fresher",
    company: "Talent Pro",
    location: "Remote",
    salary: "₹30-37 LPA",
    skills: ["Vue.js", "Python", "Full Stack"],
    remote: true,
    type: "Fresher"
  }
];
export default function JobCard() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        {jobs.map((job) => (
          <div key={job.id} className="rounded-lg p-4 shadow border ">
            <div className="flex flex-row">
              <h1 className="font-bold text-md">{job.title}</h1>
            </div>

            <div className="flex flex-col mt-2 gap-2">
              <h1>Company: {job.company}</h1>
              <h1>Location: {job.location}</h1>
              <h1>Salary: {job.salary}</h1>
              <h1>Type: {job.type}</h1>

              <AvatarGroup className="mt-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="HR 1" />
                  <AvatarFallback>HR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/maxleiter.png" alt="HR 2" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/evilrabbit.png" alt="HR 3" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <span className="gap-1"> + 50 Other Candiadates</span>
              </AvatarGroup>
              <Button className="hover:cursor-pointer"> View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}