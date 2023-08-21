import React, { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

function App () {
    const [isLoading, setIsLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [currentJob, setCuurentJob] =useState(0)

    const fetchJob = async() => {
        const response = await fetch(url)
        const newJob = await response.json()
        setJobs(newJob)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchJob()
    }, [])

    console.log(jobs);
    if(isLoading) {
        return(
            <section className="jobs-center">
                <div className="loading"></div>
            </section>
        )
    }
    return(
        <section className="jobs-center">
        <BtnContainer jobs={jobs} currentJob={currentJob}
        setCuurentJob={setCuurentJob}/>
        <JobInfo jobs={jobs} currentJob={currentJob}/>
        </section>
    )
}

export default App