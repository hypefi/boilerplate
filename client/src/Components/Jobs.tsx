import React, { useState, useEffect } from 'react'
import { useGetJobs } from '../utils/servicesjobs'
import { Job } from '../generated/graphql'
import UpdateJob from './UpdateJob'

//var newreload;

const Jobs = ({query}) => {
    const [jobs, setJobs] = useState(query)
    const { data, error, loading } = useGetJobs()
    const [values, setValues] = useState({
        id: 0,
        name: '',
    })
    
    const editJob = (jobId: number, jobName: string) => {
        setValues({
            ...values,
            id: jobId,
            name: jobName,
        })
    }

  useEffect(() => {
    console.log(query);
        if (data) {
            if (data && data.allJobs && data.allJobs.nodes) {
console.log("setting")
              setJobs(data.allJobs.nodes)
            }
        }
        if (error) {
            console.log(error)
        }
        if (loading) {
            console.log(loading)
        }
    }, [data, error, loading, query])

    return (
        <>
            <h2>Hello jobs,</h2>
            {jobs &&
                jobs.length > 0 &&
                jobs.map((job: Job, index: number) => (
                    <p key={`job_${index}`}>
                        {job.name}{' '}
                        <button onClick={() => editJob(job.id, job.name)}>
                            Edit
                        </button>
                    </p>
                ))}
            <UpdateJob id={values.id} name={values.name} />
        </>
    )
}

export default Jobs
