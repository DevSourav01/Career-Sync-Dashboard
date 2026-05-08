import Header from "@/components/Candidate/Header";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const candidates = [
  { id: 1, name: "Arjun Sharma", email: "arjun.sharma@gmail.com", position: "Frontend Developer", rating: 4.5, stage: "Interview", appliedDate: "2024-04-01" },
  { id: 2, name: "Priya Mehta", email: "priya.mehta@gmail.com", position: "UI/UX Designer", rating: 3.8, stage: "Screening", appliedDate: "2024-04-03" },
  { id: 3, name: "Rohit Das", email: "rohit.das@gmail.com", position: "Backend Developer", rating: 4.2, stage: "Applied", appliedDate: "2024-04-05" },
  { id: 4, name: "Sneha Kapoor", email: "sneha.kapoor@gmail.com", position: "React Developer", rating: 4.8, stage: "Offer", appliedDate: "2024-03-28" },
  { id: 5, name: "Vikram Nair", email: "vikram.nair@gmail.com", position: "Full Stack Developer", rating: 3.5, stage: "Rejected", appliedDate: "2024-03-20" },
  { id: 6, name: "Ananya Roy", email: "ananya.roy@gmail.com", position: "Frontend Developer", rating: 4.1, stage: "Interview", appliedDate: "2024-04-07" },
  { id: 7, name: "Karan Patel", email: "karan.patel@gmail.com", position: "DevOps Engineer", rating: 4.3, stage: "Screening", appliedDate: "2024-04-08" },
  { id: 8, name: "Meera Iyer", email: "meera.iyer@gmail.com", position: "React Developer", rating: 4.6, stage: "Offer", appliedDate: "2024-04-09" },
  { id: 9, name: "Aditya Banerjee", email: "aditya.banerjee@gmail.com", position: "UI/UX Designer", rating: 3.9, stage: "Applied", appliedDate: "2024-04-10" },
  { id: 10, name: "Pooja Singh", email: "pooja.singh@gmail.com", position: "Full Stack Developer", rating: 4.7, stage: "Interview", appliedDate: "2024-04-11" },
  { id: 11, name: "Rahul Gupta", email: "rahul.gupta@gmail.com", position: "Backend Developer", rating: 3.6, stage: "Rejected", appliedDate: "2024-04-12" },
  { id: 12, name: "Divya Nair", email: "divya.nair@gmail.com", position: "Frontend Developer", rating: 4.4, stage: "Screening", appliedDate: "2024-04-13" },
  { id: 13, name: "Siddharth Rao", email: "siddharth.rao@gmail.com", position: "DevOps Engineer", rating: 4.0, stage: "Interview", appliedDate: "2024-04-14" },
  { id: 14, name: "Ishita Joshi", email: "ishita.joshi@gmail.com", position: "React Developer", rating: 4.9, stage: "Offer", appliedDate: "2024-04-15" },
  { id: 15, name: "Nikhil Verma", email: "nikhil.verma@gmail.com", position: "Full Stack Developer", rating: 3.7, stage: "Applied", appliedDate: "2024-04-16" },
]
const totalCandidate:number=candidates.length
const stageColors: Record<string, string> = {
  Applied: "bg-blue-100 text-blue-700",
  Screening: "bg-yellow-100 text-yellow-700",
  Interview: "bg-purple-100 text-purple-700",
  Offer: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-yellow-400">★</span>
      <span className="text-sm font-medium">{rating}</span>
    </div>
  );
}

export default function page() {
  return (
    <div className="min-h-screen px-2 py-2 sm:px-6 lg:px-8 w-full overflow-x-auto ">
      <Header totalCandidate={totalCandidate}/>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead  className="hidden md:table-cell">Email</TableHead>
            <TableHead>Position</TableHead>
            <TableHead className="hidden md:table-cell">Rating</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead className="hidden md:table-cell">Applied Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id}>
              <TableCell className="font-medium">{candidate.name}</TableCell>
              <TableCell className="text-muted-foreground hidden md:table-cell ">
                {candidate.email}
              </TableCell>
              <TableCell>{candidate.position}</TableCell>
              <TableCell className="hidden md:table-cell">
                <StarRating rating={candidate.rating} />
              </TableCell>
              <TableCell>
                <Badge className={stageColors[candidate.stage]}>
                  {candidate.stage}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{candidate.appliedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
