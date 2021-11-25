import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';

//first API key -> joshm "https://finnhub.io/api/v1/quote?symbol=AAPL&token=c63j22aad3id43aa8k40"
//second API Key -> jsh  "https://finnhub.io/api/v1/quote?symbol=TSLA&token=c64nvoiad3idic8sc3s0"
//const url = "https://finnhub.io/api/v1/quote?symbol=AMZN&token=c63j22aad3id43aa8k40"

const url = 'abc'


const CardAmazon = () => {

    const [amazonPrice, setAmazonPrice] = useState();
 
    const [amazonHigh, setAmazonHigh] = useState();
    const [amazonLow, setAmazonLow] = useState();


    useEffect(()=> {

      const performRequest = () => fetch(url)
      .then(res=> res.json())
      .then(data => {     
              setAmazonPrice(JSON.stringify(data.c))  
              setAmazonHigh(JSON.stringify(data.h))
              setAmazonLow(JSON.stringify(data.l))

             })
             const token = setInterval(performRequest, 8000) // Every 5 seconds?
             performRequest(); 
             return () => {
            
            clearInterval(token)
          }
            
      
    }, [])


    return (
        <Wrapper>
            <div className="card mx-auto">
             <div className="card-body">
               <div className="card-title">{'AMZN'}<span class='comp'> Amazon</span></div>
               <div className="card-text c">{`Price : $${amazonPrice}`}</div>
              
               <div className="card-text h" style={{color:'green'}}>  {`Day High: $${amazonHigh}` }</div>
               <div className="card-text l" style={{color:'red'}}>  {`Day Low: $${amazonLow}` }</div>
             </div>
           </div>

        </Wrapper>
    )
}


const Wrapper = styled.div`

.card-title {
    font-weight: bold ;
    font-size: 25px;
  }
  
  .cp {
    font-size: 15px;
    font-weight:bold;
  }
  
  .card-text{
   font-size: 12px;
   font-weight:bold;
  }
  
  
  .card {
    
    max-width: 290px;
  
  }
  
  .comp {
      font-size: 12px;
  }

`


export default CardAmazon
