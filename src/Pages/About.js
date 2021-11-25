import React from 'react'
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import Footer from '../Components/Footer'
import MainStockHero from '../Components/MainStockHero';


const About = ()=> {
    
    return (
        <>
<Navbar />
<MainStockHero />
<Wrapper>
    <section className='bg-image'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-1 col-sm-0"></div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                        <img className='img-fluid mt-4' src="https://i.ibb.co/m0Cwycm/Y3-B2-Iz-1.jpg" alt="" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                        <h1 className='mt-4 title'>About us</h1>
                        <div className="underline mb-3 "></div>
                        <p className='text-muted paragraph'>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Voluptates, ipsum. Eligendi 
                            harum repudiandae reprehenderit aut consectetur
                            esse pariatur, sequi delectus consequuntur, 
                            <br />
                            Ratione accusamus sint perspiciatis adipisci 
                            impedit voluptatibus nemo qui accusantium 
                            inventore! Molestias, consequatur nisi. Commodi 
                            similique est possimus animi debitis quod sed,
                            deleniti, veniam dolor incidunt qui sint. Quam.</p>
                    </div>
                <div className="col-xl-4 col-lg-2 col-md-1 col-sm-0 mb-5"></div>
            </div>
        </div>

    </section>
    

</Wrapper>

<Footer />
        </>
    )
}

const Wrapper = styled.div `

body {
    margin:0;
    padding: 0;
}

.row {
    margin-top: 80px;
}

img {
 
}
.underline {
    width: 80px;
    height:3px;
    background-color: gray;
}

p {
    font-size:16px;
}

.title {
    font-size: 60px;
}


@media (max-width: 3000px) {
    .paragraph{
        font-size: 25px !important;
    }
    .title {
        font-size: 60px;
    }
}
@media (max-width: 1703px) {
    .paragraph{
        font-size: 22px !important;
    }
    .title {
        font-size: 50px;
    }
}
@media (max-width: 1498px) {
    .paragraph{
        font-size: 18px !important;
    }
    .title {
        font-size: 40px;
    }
}

@media (max-width: 1256px) {
    .paragraph{
        font-size: 16px !important;
    }
    .title {
        font-size: 30px;
    }
}

@media (max-width: 737px) {
    .paragraph{
        font-size: 23px !important;
    }
    .title {
        font-size: 53px;
    }
}
`

export default About;