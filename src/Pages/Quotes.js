import React from 'react'
import Navbar from '../Components/Navbar';
import MainStockHero from "../Components/MainStockHero";
import styled from 'styled-components';
import Footer from '../Components/Footer'
import ETFWidget from '../Components/ETFWidget'
import { useEffect, useState } from 'react';
import Chart from '../Components/Chart';
import CompanyNews from '../Components/CompanyNews';


const Quotes = ()=> {

//this adds the SYMBOLS to an array called theArray



    return (
      <Wrapper>
        <Navbar />
        {/* <MainStockHero/> */}

        <div className='container-fluid mx-auto mt-5'>
        
        <Chart />
 
        </div>



        



      <section>
        <div className="container-fluid">

        </div>
        
      </section>

        


        <ETFWidget /> 
        <Footer />

        </Wrapper>
    )
}

const Wrapper = styled.div`
.bg-succ {
  background-color:#99C68E ;
}
.card {
 
}
span {
  font-weight:bold;
}

.para-title {
  font-size: 23px ;
}
.para-title-bold {
  font-size: 25px ;
  font-weight: bold;
}

.news-title {
  font-weight: bold !important;
  font-size: 22px;
 }
 .news-descr {
  font-size: 10px !important;
 }
 
.news-card {
  transition: all 1s;
}
 .news-card:hover {
   transition: all 1s;
     cursor: pointer;
     transform: scale(1.09);
 }

 .source {
     font-style: italic !important;
 }

 .bg-mute {
     background-color: rgb(240, 235, 235);
 }

 .top-title {
   font-size : 60px;
 }
`


export default Quotes;
