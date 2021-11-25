import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";


const ETFWidget = () => {


  const [input, setInput] = useState('')

let url = 'https://widget.finnhub.io/widgets/etf-holdings?symbol=' + input + "&theme=light";

useEffect(()=> {

  
}, [input])



    return (
      <Wrapper>
        <section className=''>
        <h2 className='text-center text-dark mt-5 mb-4  top-title'>Quote an ETF</h2>
        <div className='container-fluid mx-auto  mt-5'>
          <div className='row '>
            <div className="col-xl-2 col-lg-2 col-md-1"></div>
            <div className="col-xl-8 col-lg-8 col-md-10 text-center mb-4">
              <p>7 of the Best ETFs for Long-Term (money.usnews.com): VTWO, IJH, VEU, VWO, VT, AGG</p>
              <div class="input-group">
                <input id="searchBar" type="search" class="form-control rounded search-bar" placeholder="Enter ETF Symbol" aria-label="Search"
                   aria-describedby="search-addon" value={input} onInput={e => setInput(e.target.value)}/>
                
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-1 "></div>
          </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-0"></div>
                <div className="col-xl-8 col-lg-8 col-md-12">
                <div className='border
                mb-5' styles={{ width: "100%"}, {border: "6px solid #e0e3eb"}}>
                    <iframe 
                        width="100%" 
                        frameBorder="0" 
                        height="1000px" 
                        src={url}
                     title="VTI Holdings Data by Finnhub Stock API">
                    </iframe>
                    </div>

                </div>
                <div className="col-xl-2 col-lg-2 col-md-0"></div>
            </div>
        </div>
        </section>
        </Wrapper>
    )

}

const Wrapper =styled.div`

.bg-muted {
  background-color:#F0F0F0;
}
.top-title {
  font-size : 60px;
}
`


export default ETFWidget