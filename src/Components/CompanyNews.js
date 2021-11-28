import React from 'react';
import '../CompanyNews.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const CompanyNews = () => {
  
  const [input, setInput] = useState('')

  const [dataArray, setDataArray] = useState([])
  const [finalInput, setFinalInput] = useState('')
  const [loading, setLoading] = useState(false)
//c64nvoiad3idic8sc3s0

function actuallyFetch() {
  setLoading(true)
  setFinalInput(input)
let newsUrl = 'https://finnhub.io/api/v1/company-news?symbol=' + finalInput + '&from=2021-10-01&to=2021-10-10&token=c63j22aad3id43aa8k40'
   fetch(newsUrl)
         .then(res => res.json())
         .then(newsData => {
           setLoading(false)
          setDataArray(newsData)
        })
        .catch((error)=> {
          console.log(error)
         
        })
        
    
 }


 useEffect(()=> {
  
 }, [])


    return (
        <Wrapper>
            <section>



            <div className='row mt-5'>
            <div className="col-xl-2 col-lg-2 col-md-1"></div>
            <div className="col-xl-8 col-lg-8 col-md-10 text-center">
            <h1 className='text-center mb-5'>Stock News</h1>
            <p>Disclaimer: This is connected to a free API and can take time to load with too many API calls </p>
              <div class="input-group">
                <input type="text" className="form-control" placeholder="TSLA" value={input} onInput={e => setInput(e.target.value, console.log(input))} />
                <button type="button" class="searchButton btn p-2  bg-success text-white" id="searchButton" onClick={actuallyFetch}>Fetch the News</button>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-1 "></div>
          </div>






          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-xl-2 col-lg-2"></div>
              <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 mx-auto">
              </div>
                  <br />
                      <div className="container-fluid">
                <div className="row">
                  {loading ? (
                    <div className="container-fluid text-center">
                      <div className="row text-center">
                        <div className="col text-center">
                        <div className="spinner-border text-center mb-5" role="status"></div>
                        </div>
                      </div>
                    </div>
                    
                  ) : (
                  dataArray.map((newsStory)=> {
                    const {headline, image, url } = newsStory
                    return (
                      <>
                        <div className="card mx-auto mb-3 mt-3" onClick={()=> window.open(url)}> 
                        <img src={image} alt="" className='card-img-top'/>
                          <div className="card-body">
                           <h3 className='card-title'>{headline}</h3>

                          </div>
                        </div>
                      </>
                    )
                  })
                  )
                  }
                </div>
            </div>
                     </div>
                    
              
              </div>
              <div className="col-xl-2 col-lg-2"></div>
         
        
        </section>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`

.card{ 
 cursor: pointer;
  max-width: 400px;
}
.spinner-border {
  left: 50px !important;

}
`
export default CompanyNews