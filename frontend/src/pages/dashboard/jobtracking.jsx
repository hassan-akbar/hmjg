import React from "react";
import JobCard from "@/widgets/cards/job-card";


export function Jobtracking() {
  return (
    <div className="mt-12">
      <JobCard
  job={{
    id: "1",
    title: "Frontend Developer",
    company: "OpenAI",
    location: "Remote",
    applicationDate: "2025-08-20",
    status: "Applied",
  }}
  onEdit={(job) => console.log("Edit job", job)}
  onDelete={(id) => console.log("Delete job", id)}
/>

    
    </div>
  );
}

export default Jobtracking;
