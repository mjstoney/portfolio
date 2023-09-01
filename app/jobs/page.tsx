import * as React from 'react';
import mysql, { RowDataPacket } from "mysql2/promise";
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

export interface IJobRow extends RowDataPacket {
  idjob: number,
  jobTitle: string,
  companyName: string,
  companyLocation: string,
  jobDescription: string,
  salary: string,
  employmentType: string,
  url: string,
  datePosted: string,
  timestamp: string
}




export default async function Jobs () {
  // const result = await fetch("/api/jobs", {cache: 'no-store'})
  // const jobs = await result.json()
  let listJobs = []
  try {
    // const pool = mysql.createPool({
    //   host: "jobs1.cm8rrs7r5asx.us-west-1.rds.amazonaws.com",
    //   user: "admin",
    //   password: "Ionian145!",
    //   database: "jobsdb",
    //   waitForConnections: true,
    //   connectionLimit: 10,
    //   queueLimit: 0
    // });
    const conn = await mysql.createConnection({
        host: "jobs1.cm8rrs7r5asx.us-west-1.rds.amazonaws.com",
        user: "admin",
        password: "Ionian145!",
        database: "jobsdb"
    });
    
    
    conn.connect();
    const [rows, fields] = await conn.query<IJobRow[]>('SELECT * FROM job LIMIT 1');
    listJobs = rows.map((job: IJobRow)=> (<JobCard key={job.idjob} job={job}/>))
    console.log("rows " + rows[0].companyName)
    
    return (
      <div>
        <h1 className="text-5xl font-bold underline mb-4">jobs</h1>
        {listJobs}
      </div>
    );

  } catch (error) {
    console.error('Error fetching data:', error);
  }


}
