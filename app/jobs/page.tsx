import * as React from 'react';
import { NextResponse } from "next/server";
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

const pool = mysql.createPool({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpassword,
  database: process.env.dbname,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


export default async function Jobs () {
  // const result = await fetch("/api/jobs", {cache: 'no-store'})
  // const jobs = await result.json()
  try {
    const [rows, fields] = await pool.query<IJobRow[]>('SELECT * FROM job LIMIT 1');
    const listJobs = rows.map((job: IJobRow)=> (<JobCard key={job.idjob} job={job}/>))
    console.log(rows)
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
