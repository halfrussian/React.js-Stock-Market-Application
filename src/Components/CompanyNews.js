import React from 'react';
import '../CompanyNews.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const CompanyNews = () => {


    let navigate = useNavigate();
    let params = useParams();
  
  const [input, setInput] = useState('')
  
  //News States
  const [head, setHead] = useState(null)
  const [articleLink, setArticleLink] = useState(null)
  const [source, setSource] = useState(null)
  const [articelImage, setArticleImage] = useState(null)
  const [secondHead, setSecondHead] = useState(null)
  const [secondArticleLink, setSecondArticleLink] = useState(null)
  const [secondSource, setSecondSource] = useState(null)
  const [secondArticleImage, setSecondArticleImage] = useState(null)

    

let newsUrl = 'https://finnhub.io/api/v1/company-news?symbol=' + input + '&from=2021-10-01&to=2021-11-01&token=c63j22aad3id43aa8k40'

function getData() {


  fetch(newsUrl) 
        .then(res => res.json())
        .then(newsData => {

            setHead(newsData[1].headline)
            setSource(newsData[1].source)
            setArticleImage(newsData[1].image)
            setArticleLink(newsData[1].url)
  
            //second 
            setSecondHead(newsData[3].headline)
            setSecondSource(newsData[3].source)
            setSecondArticleImage(newsData[3].image)
            setSecondArticleLink(newsData[3].url)
  
        })
        
    
}
    return (
        <>
            <section>
            <div className='row mt-5'>
            <div className="col-xl-2 col-lg-2 col-md-1"></div>
            <div className="col-xl-8 col-lg-8 col-md-10 text-center">
              <div class="input-group">
                <input id="searchBar" type="search" class="form-control rounded search-bar" placeholder="TSLA" aria-label="Search"
                   aria-describedby="search-addon" value={input} onInput={e => setInput(e.target.value)}  />
                <button type="button" class="searchButton btn p-2  bg-succ" id="searchButton" onClick={getData()} >Quote This Stock</button>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-1 "></div>
          </div>
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-xl-2 col-lg-2"></div>
              <div className="col-xl-8">
              <h1>{input ? `${input} Snapshot & Company News`: ' Ticker Symbol & Company News'}</h1></div>
                  <br />
                      <div className="container-fluid ">
                <div className="row">
                    <div className="col-xl-6 col-lg-4 col-md-6">
                        <div className="card news-card" onClick={()=> window.open(articleLink, articleLink )}>
                        <img className='card-img-top' src={!articelImage ? "https://img.etimg.com/thumb/msid-71321314,width-1070,height-580,imgsize-481831,overlay-economictimes/photo.jpg" : articelImage} alt="" />
                            <div className="card-body">
                            <h5 className="source">{!source ? 'Business insider': source}</h5>
                                <h5 className='news-title'>{!head ? 'More sops needed to boost electronic manufacturing: Top govt official' : head}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 col-md-6">
                        <div className="card news-card" onClick={()=> window.open(secondArticleLink, secondArticleLink)}>
                        <img className='card-img-top' src={!secondArticleImage ? "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ba140938-d409-11e9-822b-fda891ce1fc1.png" : secondArticleImage} alt="" />
                            <div className="card-body">
                            <h5 className="source">{!secondSource ? 'Business insider': secondSource}</h5>
                                <h5 className='news-title'>{!secondHead ? 'More sops needed to boost electronic manufacturing: Top govt official' : secondHead}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                     </div>
                    
              
              </div>
              <div className="col-xl-2 col-lg-2"></div>
         
        
        </section>
            
        </>
    )
}


export default CompanyNews