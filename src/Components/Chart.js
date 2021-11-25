import React from "react";
import TradingViewWidget from 'react-tradingview-widget';
import styled from "styled-components";
const Chart = () => {
return (

  <Wrapper> 
    <section>
  <TradingViewWidget symbol="NASDAQ:AAPL" className='mb-5'/>
  </section>
  </Wrapper>  

)
};

const Wrapper = styled.div`
section {
  margin-bottom: 130px !important;
}
`




export default Chart;