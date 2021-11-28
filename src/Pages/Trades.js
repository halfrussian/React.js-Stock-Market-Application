import React from 'react'
import Navbar from '../Components/Navbar';
import MainStockHero from "../Components/MainStockHero";
import styled from 'styled-components';
import Chart from '../Components/Chart';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react/cjs/react.development';


const Trades = () => {

    const [input, setInput] = useState('')
    const [stockPrice, setStockPrice] = useState('')
    const [stockChange, setStockChange] = useState('')
    const [stockPercentChange, setPercentChange] = useState('')
    const [stockHigh, setStockHigh] = useState('')
    const [stockLow, setStockLow] = useState('')
    const [stockPrevClose, setStockPrevClose] = useState('')
    const [shareAmount, setShareAmount] = useState(null)
    const [shareCost, setShareCost] = useState()
    const [wait, setWait] = useState(false)
    const [funds, setFunds] = useState(10500)
    const [results, setResults] = useState([]);
    const [buyingArray, setBuyingArray] = useState([])
    const [tableUrl, setTableUrl] = useState('')
    const [account, setAccount] = useState([

        {
           "Symbol": 'AAPL',
            "Shares": 1,
           "TotalCost": 135,

        },
        {
            "Symbol": 'TS',
             "Shares": 1,
             "TotalCost": 1342,

         },
    ])
    
    




   //let url = 'https://finnhub.io/api/v1/quote?symbol=' + input + "&token=c63j22aad3id43aa8k40";
let url = 'https://finnhub.io/api/v1/quote?symbol=' + input + "&token=c63j22aad3id43aa8k40";
    
    function getData() {
    
      fetch(url)
            .then(res => res.json())
            .then(data =>{
                setStockPrice(JSON.stringify(data.c))
                setStockChange(JSON.stringify(data.d))
                setPercentChange(JSON.stringify(data.dp))
                setStockHigh(JSON.stringify(data.h))
                setStockLow(JSON.stringify(data.l))
                setStockPrevClose(JSON.stringify(data.pc))  
                
            })
            
    }
    
    useEffect(()=> {

    
    }, [])
  

    const formatPrice = (x) => {
        return Number.parseFloat(x).toFixed(2)
      }

      
     const tradingObjects = () => {
          setShareCost(shareAmount * stockPrice);
              
          //objects
          let tradeArray = []
          var obj = {}
          obj[ input] = tradeArray.label;
          obj[ input] = tradeArray.value;
          tradeArray.push({"Symbol": input, "Shares": shareAmount, "TotalCost": formatPrice(shareAmount * stockPrice)})
          setBuyingArray(tradeArray)
         
      }    
       

    


    useEffect(() => {
        const fetchedResults = [];
//c64nvoiad3idic8sc3s0
        buyingArray.map((Symbol, Shares, TotalCost) => {
          setTableUrl("https://finnhub.io/api/v1/quote?symbol=" + buyingArray[0].Symbol + "&token=c64nvoiad3idic8sc3s0")
          fetch(tableUrl)
          .then((res) => res.json())
            .then((data) => fetchedResults.push(Symbol, data.c) 
          
           )
        }
      )

      setResults(fetchedResults)
    }, [])

    const buyThis = () => {
      console.log(buyingArray[0].Symbol)
      console.log(tableUrl)
      console.log(results)
      console.log(results[1])
     }

    return (
        <>
        <Navbar />
        {/* <MainStockHero /> */}
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-0"></div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h2 className='mb-4 mx-auto text-center'>Search Stock</h2>
                                    <div class="input-group">
                                    <input id="searchBar" type="search" class="form-control rounded search-bar" placeholder="Enter Ticker Symbol" aria-label="Search"
                   aria-describedby="search-addon" value={input} onInput={e => setInput(e.target.value)}  />
                <button type="button" class="searchButton btn p-2  bg-succ" id="searchButton" onClick={()=> {getData();  }}> Update Search</button>
                                    </div>
                                </div>
                            <div class='card-text mt-4'>
                            <h4>{input? input : 'Search Stock'}</h4>
                            <p>Current Price: ${getData ? stockPrice : 0}</p>
                            <p> Day High: ${stockHigh ? stockHigh : 0}</p>
                            <p>Day Low: ${stockLow ? stockLow : 0}</p>
                            <p>Percentage Change: {stockPercentChange ? stockPercentChange : 0 }%</p>
                            <p> Previous Close: ${stockPrevClose ? stockPrevClose : 0}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h2 className='mb-4 mx-auto text-center'>Buy {input}</h2>
                                    <div class="input-group">
                                    <input id="searchBar" type="number"  class="form-control rounded search-bar" placeholder="0" aria-label="Search"
                   aria-describedby="search-addon" value={shareAmount} onInput={e => setShareAmount(e.target.value) }  />
                <button type="button" class="searchButton btn p-2  bg-succ" id="searchButton" 
                onClick={()=> {
                    setWait(true)
                    tradingObjects()}}>Update Buying Cost</button>
                                    </div>
                                </div>

                            {input && wait && shareAmount ? (
                                <div class='card-text mt-4'>
                                <p>Funds Available for Trading: ${}</p>
                                <p>Share Cost: ${shareAmount ? formatPrice(shareCost) : 0}</p>
                                <p>Online Fee: $0</p>
                                <h4 >Total Cost: ${shareAmount ? formatPrice(shareCost) : 0}</h4>
                                <button className='btn bg-succ mt-3 px-4' onClick={() => {tradingObjects(); buyThis()}}>Buy Now</button>
                               </div>

                            ): (
                                null
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-0"></div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-xl-3 col-lg-3"></div>
                    <div className="col-xl-6 col-lg-6 col-md-8 mb-5">
                        <div className="card">
                            <div className="card-body">
                             <h4>Account Funds: ${formatPrice(funds)}</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Shares</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {results.map(({Symbol, Shares, TotalCost}) => (
                                    <tr>
                                        <td>{Symbol}</td>
                                        <td>{Shares}</td>  
                                        <td>${TotalCost}</td>
                                        <td>{results[1]}</td>
                                    </tr>
                                  ))}

                                </tbody>
                            </table>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3"></div>
                </div>
            </div>
            <Chart />
            <Footer />
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
.bg-succ {
    background-color:#99C68E ;
  }

`

export default Trades;