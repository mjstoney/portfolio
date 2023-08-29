import { IJobsProps } from "@/app/jobs/page"

export const getJobsData = async (): Promise<Array<IJobsProps>> => {
    const res = await fetch('/api/jobs')
    const jobs = await res.json()
    return jobs
}