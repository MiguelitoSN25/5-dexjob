import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../data/data'
export default function JobDetails() {
    const {position} = useParams()
    const job = jobs.find((item)=> item.position === position);
  return (
    <section>
        <div className='container'>
        <div className='details__top'>
            <div>
                <h1>{job.position}</h1>
                <h6>{job.company} - {job.contract}
                </h6>
            </div>
            <div className='requirements'>
                <h1>Requirements</h1>
                <p>{job.requirements.reqTitle}</p>
                <ul className='requirements__item'>
                    {job.requirements.reqItem.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
        </section>
  )
}
