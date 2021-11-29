import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';

//first API key -> joshm "https://finnhub.io/api/v1/quote?symbol=AAPL&token=c63j22aad3id43aa8k40"
//second API Key -> jsh  "https://finnhub.io/api/v1/quote?symbol=TSLA&token=c64nvoiad3idic8sc3s0"

const url = "https://finnhub.io/api/v1/quote?symbol=TSLA&token=c63j22aad3id43aa8k40"


const CardTesla = () => {

    const [teslaPrice, setTeslaPrice] = useState();
    const [teslaHigh, setTeslaHigh] = useState();
    const [teslaLow, setTeslaLow] = useState();


    useEffect(()=> {

      const performRequest = () => fetch(url)
      .then(res=> res.json())
      .then(data => {
                  
                    setTeslaPrice(JSON.stringify(data.c))
                    setTeslaHigh(JSON.stringify(data.h))
                    setTeslaLow(JSON.stringify(data.l))

                })
                const token = setInterval(performRequest, 8000) 
                performRequest(); 
                return () => {
              
               clearInterval(token)
                }
      
    }, [])


    return (
        <Wrapper>
            <div className="card mx-auto">
             <div className="card-body">
               <div className="card-title">{'TSLA'}<span class='comp'> Tesla</span></div>
               <div className="card-text c">{`Price : $${teslaPrice}`}</div>
               <div className="card-text h" style={{color:'green'}}>  {`Day High: $${teslaHigh}` }</div>
               <div className="card-text l" style={{color:'red'}}>  {`Day Low: $${teslaLow}` }</div>
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


export default CardTesla
