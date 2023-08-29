import { NextResponse } from "next/server";
import mysql, { RowDataPacket } from "mysql2/promise";


export interface IJobRow extends RowDataPacket {
  idjob: number,
  jobTitle: string,
  companyName: string,
  companyLocation: string,
  jobDescription: string,
  salary: string,
  employmentType: string,
  url: string
}

export async function GET(request: Request) {
  let data = {}

  console.log("API GET /api/jobs")

  const pool = mysql.createPool({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.dbname,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  try {
    const rows = await pool.query<IJobRow[]>('SELECT * FROM job');
    return NextResponse.json({ data: rows }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
 
}

// To handle a POST request to /api
export async function POST(request: Request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
