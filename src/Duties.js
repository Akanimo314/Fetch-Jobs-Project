import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'

const Duties = ({duties}) => {
  const id = uuidv4()
  return (
    <div>
      {duties.map((duty, index) => {
        return(
          <article>
            <div key={id} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
          </article> 
        )
      })}
    </div>
  )
}

export default Duties