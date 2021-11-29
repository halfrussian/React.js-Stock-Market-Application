import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';




const url = "https://finnhub.io/api/v1/quote?symbol=VTI&token=c63j22aad3id43aa8k40"


const CardApple  = () => {

 const [VTIStock, setVTIStock] = useState('');

 const [VTIHigh, setVTIHigh] = useState('');
 const [VTILow, setVTILow] = useState('');


  useEffect(()=> {
    
//Vanguard

const performRequest = () => fetch(url)
.then(res=> res.json())
.then(data => {

     setVTIStock(JSON.stringify(data.c));

     setVTIHigh(JSON.stringify(data.h));
     setVTILow(JSON.stringify(data.l));
   })
   const token = setInterval(performRequest, 8000) 
       performRequest(); 
       return () => {
     
      clearInterval(token)
       }

   }, []);


  return (

    <Wrapper>
  
           <div className="card mx-auto">
             <div className="card-body">
               <div className="card-title">{'VTI'}<span class='comp'> Vanguard ETF</span></div>
               <div className="card-text c">{`Price : $${VTIStock}` }</div>
               
               <div className="card-text h" style={{color:'green'}}>  {`Day High: $${VTIHigh}` }</div>
               <div className="card-text l" style={{color:'red'}}>  {`Day Low: $${VTILow}` }</div>
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