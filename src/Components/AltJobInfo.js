import React from 'react'
import Duties from './Duties'

const JobInfo = ({jobs, currentJob}) => {
  const {company, dates, duties, title, } = jobs[currentJob]
  return (
    <div>
      <h3>{title}</h3>
      <span>{company}</span>
      <p>{dates}</p>
      <Duties duties={duties}/>
    </div>
  )
}

export default JobInfo