"use client";
import Link from "next/link";
import { IJobsProps } from "@/app/jobs/page";
//https://us-west1-pydrive-262303.cloudfunctions.net/getJobs


export const JobCard = ({ job }: IJobsProps) => {
  function handleClick(event: React.MouseEvent<HTMLInputElement>): void {
    event.preventDefault();
    if (event.currentTarget.textContent == "Click for Description") {
      event.currentTarget.textContent = job.jobDescription;
    } else {
      event.currentTarget.textContent = "Click for Description";
    }
  }
  console.log(job.companyName);
  return (
    <div className="cursor-pointer">
      <div className="pl-10 py-4  border-black rounded-t-2xl border-2 bg-blue-400 text-white">
        <Link href={job.url}>
          <h1 className="text-xl">{job.jobTitle}</h1>
          <p className="ml-10 text-sm">
            {job.companyName} - {job.companyLocation} - {job.salary}
          </p>
          <p className="ml-10 text-sm">{job.datePosted.toString().slice(0, 10)}</p>
        </Link>
      </div>
      <div className="px-4 py-2 mb-8 border-black rounded-b-2xl border-2 text-black bg-white">
        <p onClick={handleClick} className="text-sm">
          Click for Description
        </p>
      </div>
    </div>
  );
};
