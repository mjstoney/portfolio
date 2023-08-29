import * as React from 'react';
import { JobCard } from '@/Components/JobCard';

export interface IJob {
  idjob: number,
  jobTitle: string,
  companyName: string,
  companyLocation: string,
  jobDescription: string,
  salary: string,
  employmentType: string,
  url: string
  datePosted: string,
  timestamp: string
}

export interface IJobsProps {
  job: IJob
}




export default async function Jobs (props: IJobsProps) {
  const result = await fetch("http://localhost:3000/api/jobs", {cache: 'no-store'})
  const jobs = await result.json()


  const listJobs = jobs["data"][0].map((job: IJob)=> (<JobCard key={job.idjob} job={job}/>))

  return (
    <div>
      <h1 className="text-5xl font-bold underline mb-4">jobs</h1>
      {listJobs}
    </div>
  );
}
