import React from 'react'

const BtnContainer = ({jobs, currentJob, setCurrentJob}) => {
  return (
    <div>
        {jobs.map((item, index) => {
            return(
                <button key={item.id} 
                onClick={() => setCurrentJob(index)}>
                    {item.company}
                </button>
            )
        })}
    </div>
  )
}

export default BtnContainer