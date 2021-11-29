import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';

//first API key -> joshm "https://finnhub.io/api/v1/quote?symbol=AAPL&token=c63j22aad3id43aa8k40"
//second API Key -> jsh  "https://finnhub.io/api/v1/quote?symbol=TSLA&token=c64nvoiad3idic8sc3s0"
const url = "https://finnhub.io/api/v1/quote?symbol=AAPL&token=c64nvoiad3idic8sc3s0"

const CardApple  = () => {

 const [appleStock, setAppleStock] = useState('');
 const [appleHigh, setAppleHigh] = useState('');
 const [appleLow, setAppleLow] = useState('');


  useEffect(()=> {
    
 //APPLE

 const performRequest = () => fetch(url)
    .then(res=> res.json())
    .then(data => {

    setAppleStock(JSON.stringify(data.c));
    setAppleHigh(JSON.stringify(data.h));
    setAppleLow(JSON.stringify(data.l));
       })
       const token = setInterval(performRequest, 8000) // Every 5 seconds?
       performRequest(); // Initial request
       return () => {
      // Don't forget to cleanup the interval when this effect is cleaned up.
      clearInterval(token)
    }

 }, []);


  return (

    <Wrapper>
  
           <div className="card mx-auto">
             <div className="card-body">
               <div className="card-title">{'AAPL'}<span class='comp'> Apple Inc.</span></div>
               <div className="card-text c">{`Price : $${appleStock}` }</div>
               <div className="card-text h" style={{color:'green'}}>  {`Day High: $${appleHigh}` }</div>
               <div className="card-text l" style={{color:'red'}}>  {`Day Low: $${appleLow}` }</div>
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

export default CardApple