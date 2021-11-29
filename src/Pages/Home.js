import MainStockHero from "../Components/MainStockHero";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { BsPhone } from 'react-icons/bs'
import {BiPhoneCall } from 'react-icons/bi'
import {CgRedo } from 'react-icons/cg'
import Footer from '../Components/Footer'
function Home() {
    return (
        <Wrapper>
        <Navbar />
        <MainStockHero /> 
            <div className="container-fluid bg-muted">
                <div className="row mt-5">
                    <div className="col-xl-2 col-lg-2 col-md-1 bg-muted"></div>

                    <div className="col-xl-4 col-lg-4 col-md-5 mt-4">
                        <img className='img-fluid' src="https://s.wsj.net/public/resources/images/BN-QX831_happyr_P_20161123090110.jpg" alt="" />
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-5 mt-4"> 
                        <h2 class=''>Why Money Works...</h2>
                        
                        <p className='paragraph '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Ratione aliquid, aspernatur soluta 
                            consequuntur saepe, praesentium. 
                            <br />
                            Quaerat unde numquam iure libero porro at ea veniam, earum 
                            laudantium omnis, natus, consequatur dolore perspiciatis debitis 
                            totam dicta?
                            <br />
                           Un numquam iure libero porro at ea veniam, earum 
                            laudantium omnis.
                            </p>
                            <button className='btn btn-success rounded-pill px-5'><a href>Learn More</a></button>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-1 "></div>
                </div>
                <div className="row mt-4 bg-white">
                    <div className="col text-center">
                        <h2 className='mb-5 mt-3'>What are the benefits of starting early?</h2>
                    </div>
                </div>
                <div className="row bg-white">
                    <div className="col-xl-2 col-lg-2 col-md-1 bg-white"></div>
                    <div className="col-xl-4 col-lg-4 col-md-5 bg-white">
                        <h4>Lorem Ipsum </h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Suscipit eveniet repellat 
                            harum qui sunt veritatis quia, perspiciatis 
                            perferendis, aut ad quod, ipsum cum ipsam maiores 
                            vitae quae dolores voluptate neque. Nemo commodi
                             voluptas numquam alias voluptatum.</p>
                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Itaque quibusdam aut nemo blanditiis, optio officiis 
                            laboriosam porro molestiae quos hic quae impedit obcaecati 
                            nesciunt illo similique numquam quis neque assumenda?</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 bg-white mb-4">
                        <h4>Ipsum Sit Amet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Suscipit eveniet repellat 
                            harum qui sunt veritatis quia, perspiciatis 
                            perferendis, aut ad quod, ipsum cum ipsam maiores 
                            vitae quae dolores voluptate neque. Nemo commodi
                             voluptas numquam alias voluptatum.</p>
                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Itaque quibusdam aut nemo blanditiis, optio officiis 
                            laboriosam porro molestiae quos hic quae impedit obcaecati 
                            nesciunt illo similique numquam quis neque assumenda?</p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-1 bg-white"></div>
                </div>
            </div>

{/* Services */}
            <div className="container-fluid bg-success ">
                <div className="row ">
                    <h2 class='text-white text-center mb-4 mt-3'>Services & Benefits </h2>
                     <div className="col-xl-2 col-lg-2 col-md-0 "></div>

                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 text-center ">
                        <BsPhone className='text-white icon mb-2'/>
                        <p className='text-white text-center service-text'>
                            Mobile Ordering... sit amet consectetur adipisicing elit.
                             Sapiente reiciendis ipsa alias exercitationem velit sit 
                             placeat ab quisquam impedit ducimus. Sapiente reiciendis ipsa alias exercitationem velit sit 
                             placeat ab quisquam impedit ducimus.</p>
                    </div>


                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6  text-center">
                        <BiPhoneCall className='text-white icon mb-2'/>
                        <p className='text-white text-center service-text'>
                            24/7 Call Support... sit amet consectetur adipisicing elit.
                             Sapiente reiciendis ipsa alias exercitationem velit sit Sapiente reiciendis ipsa alias exercitationem velit sit 
                             placeat ab quisquam impedit ducimus. 
                             </p>
                    </div>


                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6  text-center mb-5">
                        <CgRedo className='text-white icon mb-2'/>
                        <p className='text-white text-center service-text'>
                            Auto Reinvestment... sit amet consectetur adipisicing elit.
                             Sapiente reiciendis ipsa alias exercitationem velit sit 
                             placeat ab quisquam impedit ducimus. Sapiente reiciendis ipsa alias exercitationem velit sit 
                             placeat ab quisquam impedit ducimus.</p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-0 "></div>
                </div>
            </div>
{/* End of services */}

<div className="container-fluid bg-muted">
    <div className="row">
        <div className="col">
            <div className="text-center display-3 text-dark">
                <h2 className='mt-3 mb-4'>Frequently Asked Questions</h2>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2"></div>
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                <div className="accordion mb-5" id='TopOne'>
                    <div className="accordion-item">
                         <h2 className='accordion-header' id='headingOne'>
                            <button className="accordion-button text-white bg-success" type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                                Why should you start investing... yetserday?
                            </button>
                        </h2>
                        <div id='collapseOne' className="accordion-collapse collapse" aria-labelledby='headingOne' data-bs-parent='#TopTwo'>
                            <div className="accordian-body">
                                <p className='mx-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corporis natus facere nostrum molestias harum, voluptate perferendis optio quas iusto explicabo excepturi laborum, asperiores fugiat hic quod illum dignissimos impedit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                         <h2 className='accordion-header' id='headingTwo'>
                            <button className="accordion-button text-white bg-success" type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='true' aria-controls='collapseOne'>
                                What are the best kinds of investments?
                            </button>
                        </h2>
                        <div id='collapseTwo' className="accordion-collapse collapse " aria-labelledby='headingTwo' data-bs-parent='#TopTwo'>
                            <div className="accordian-body">
                                <p className='mx-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corporis natus facere nostrum molestias harum, voluptate perferendis optio quas iusto explicabo excepturi laborum, asperiores fugiat hic quod illum dignissimos impedit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                         <h2 className='accordion-header' id='headingThree'>
                            <button className="accordion-button text-white bg-success" type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='true' aria-controls='collapseThree'>
                                How old is too old?
                            </button>
                        </h2>
                        <div id='collapseThree' className="accordion-collapse collapse " aria-labelledby='headingThree' data-bs-parent='#TopThree'>
                            <div className="accordian-body">
                                <p className='mx-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corporis natus facere nostrum molestias harum, voluptate perferendis optio quas iusto explicabo excepturi laborum, asperiores fugiat hic quod illum dignissimos impedit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                         <h2 className='accordion-header' id='headingFour'>
                            <button className="accordion-button text-white bg-success" type='button' data-bs-toggle='collapse' data-bs-target='#collapseFour' aria-expanded='true' aria-controls='collapseFour'>
                                What you can do to start now? 
                            </button>
                        </h2>
                        <div id='collapseFour' className="accordion-collapse collapse " aria-labelledby='headingFour' data-bs-parent='#TopFour'>
                            <div className="accordian-body">
                                <p className='mx-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corporis natus facere nostrum molestias harum, voluptate perferendis optio quas iusto explicabo excepturi laborum, asperiores fugiat hic quod illum dignissimos impedit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                         <h2 className='accordion-header' id='headingFour'>
                            <button className="accordion-button text-white bg-success" type='button' data-bs-toggle='collapse' data-bs-target='#collapseFour' aria-expanded='true' aria-controls='collapseFour'>
                                Traditional vs Roth  
                            </button>
                        </h2>
                        <div id='collapseFour' className="accordion-collapse collapse " aria-labelledby='headingFour' data-bs-parent='#TopFour'>
                            <div className="accordian-body">
                                <p className='mx-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corporis natus facere nostrum molestias harum, voluptate perferendis optio quas iusto explicabo excepturi laborum, asperiores fugiat hic quod illum dignissimos impedit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2"></div>
    </div>
</div>
<Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`

.bg-service {
    background-color: #85BB65;
}

.bg-succ {
   background-color:#99C68E ;
}

.para {
    font-size: 15px;
}

.para-title {
    font-size: 22px;
}

.icon {
    font-size:50px;
}

.service-text {
    font-size:14px;
}


.bg-muted {
    background-color:#F0F0F0;
}

.accordion {
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,0.5) !important;
}
@media (max-width: 3000px) {

    .paragraph {
        font-size: 19px;
    }

}

@media (max-width: 1367px) {

    .paragraph {
        font-size: 14px;
    }

}

`

export default Home;