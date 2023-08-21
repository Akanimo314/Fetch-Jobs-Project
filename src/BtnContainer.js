import React from 'react'

const BtnContainer = ({jobs, currentJob, setCuurentJob}) => {
  return (
    <div className='btn-container'>
        {jobs.map((item, index) => {
            return(
                <button onClick={() => setCuurentJob(index)}
                className= {(index=== currentJob)? 
                'active-btn' : 'job-btn' }>
                    {item.company}
                </button>
            )
        })}
    </div>
  )
}

export default BtnContainer