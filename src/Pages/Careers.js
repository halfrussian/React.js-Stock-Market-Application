import React from 'react'
import { useState } from 'react';
import Navbar from "../Components/Navbar";
import MainStockHeader from '../Components/MainStockHero'
import Footer from '../Components/Footer'
import styled from 'styled-components';
import { useEffect } from 'react/cjs/react.development';
import {FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

const Careers = ()=> {


    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)


    const fetchJobs = async () => {
        const response = await fetch(url)
        const newJobs = await response.json();
        setJobs(newJobs)
        setLoading(false)
    }


    useEffect(()=> {
        fetchJobs()
    }, [])


    if(loading) {
        return (
        <div className='container-fluid'> 
          <div className='row text-center ' style={{marginTop: '20%'}}>
            <div className="col">
            <div className="spinner-border text-success text-center spinner " role="status">
          
                </div>
              </div>
            </div>
          </div>
        
        )
    }
    const {company, dates, duties,title} = jobs[value]
    return (
        <section>
        <Navbar />

        <Wrapper>
            <div className="container-fluid">
                <h1 className='text-center mt-5 mb-4'>We're not currently hiring...<br /> but our clients are</h1>
                <div className="row">
                   {/* buttons */}
                   <div className="btn-container text-center">
                      {
                        jobs.map((item, index)=> {
                          return <button key={item.id} onClick={()=>
                           setValue(index)}
                           className={`btn job-btn mx-4 ${index == value && 'active-btn'}`}
                           >
                            {item.company}
                          </button>
                        })
                      }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-2"></div>
                    <div className="col-xl-6">
                   {/* job article */}
                    <article className='job-info'>
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p className="job-date">{dates}</p>
                        {duties.map((duty, index)=>{
                            return <div key={index} className='job-desc mb-5'>
                    
                                <p>{duty}</p>
                            </div>
                        } )}
                    </article>
                    </div>
                    <div className="col-xl-3 col-lg-2"></div>
                </div>
            </div>
        </Wrapper>


        <Footer />
        </section>
    )
}


const Wrapper = styled.div`

.job:hover{
    color:green;
    cursor: pointer;
}

.job-btn {
  color: red;
  font-size: 23px;
  margin-bottom: 20px;

}
.job-btn:focus,.job-btn:active {
   outline: none !important;
   box-shadow: none;
}
.active-btn {
color: green;   
font-weight: bold !important;         
}

`

export default Careers ;