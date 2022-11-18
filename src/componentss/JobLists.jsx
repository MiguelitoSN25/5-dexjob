import jobs from '../data/data';
import {Link} from "react-router-dom";
import { useState } from 'react';

function JobLists() {
    const [jobdata,setjobdata] = useState(jobs)
    const [searchTerm,setsearchTerm] = useState("")
    const [searchByLocation, setSearchByLocation] = useState("")
    const searchTermValue = searchTerm.toLowerCase();
    const locationSearchHandler =()=>{
        const filteredData = jobs.filter((job)=>job.location.toLowerCase().includes(searchByLocation.toLowerCase()));
        setjobdata(filteredData)
    };
    const filterJobData = (e)=>{
        const filterValue = e.target.value
        if(filterValue==="full-time"){
            const filteredData = jobs.filter((job)=> job.contract==="Full Time")
            setjobdata(filteredData)
        
        }
        else if(filterValue==="part-time"){
            const filteredData = jobs.filter((job)=> job.contract==="Part-time")
            setjobdata(filteredData)
        
        }
        else if(filterValue==="freelance"){
            const filteredData = jobs.filter((job)=> job.contract==="Freelance")
            setjobdata(filteredData)
        
        }
    }
  return (
    <section className='job__list'>
        <div className='container'>
            <div className='job__list__wrapper'/>
            <div className='search__panel'>
              <div className='search__panel-01'>
                <input type="text"
                placeholder='Busqueda por titulo, empresa, etc'
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}/>
              </div>
              <div className='search__panel-02'>
                <input type="text"
                placeholder='Busqueda por localizacion'
                value={searchByLocation}
                onChange={(e)=>setSearchByLocation(e.target.value)}
                />
                <button onClick={locationSearchHandler}>Buscar</button>
              </div>
              <div className='search__panel-03'>
                <select onChange={filterJobData}>
                    <option>Filtrar trabajo por</option>
                    <option value="full-time">Tiempo Completo
                    </option>
                    <option value="part-time">Tiempo Parcial
                    </option>
                    <option value="freelance">Freelancer
                    </option>
                </select>
              </div>
            </div>
            <div className='jobs__wrapper'>
                {jobdata?.filter((job)=>{
                    if(searchTerm ==="")return job;
                    if (job.position.toLowerCase().
                    includes(searchTermValue) || job.company.toLowerCase().includes(searchTermValue) || job.contract.toLowerCase().includes(searchTermValue))
                    return job;
                })
                .map((item) =>(
                    <div  className='job__item' key={item.id}>
                        <img src={item.logo}/>
                        <div className='job__content'>
                            <h6>{item.postedAt} - {item.contract}</h6>
                            <h1><Link to={`/jobs/${item.position}
                            `}>
                            {item.position}
                            </Link>
                            </h1>
                            <p>{item.company}</p>
                            <div className='location'>
                                <p>
                                    Location: <span>{item.location}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
                }        </div>
        </div>

        </section>
  )
}

export default JobLists