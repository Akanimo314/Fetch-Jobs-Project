import React, { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

function App () {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [jobs, setJobs] = useState([])
    const [currentJob, setCurrentJob] = useState(0)

    useEffect(() => {
        const fetchJob = async() => {
            try {
                const response = await fetch(url)
                const newJob = await response.json()
                setJobs(newJob) 
            } catch (error) {
                setIsError(true)
                console.log(error); 
            }
            setIsLoading(false)
        }
        fetchJob()
    }, [])

    console.log(jobs);
    if(isLoading){
        return<h2>Loading Process........</h2>
    }
    if(isError){
        return<h2>Error.........</h2>
    }
    return(
        <section>
            <BtnContainer jobs={jobs} currentJob={currentJob}
            setCurrentJob={setCurrentJob}/>
            <JobInfo jobs={jobs} currentJob={currentJob}/>
        </section>
    )
}

export default App
