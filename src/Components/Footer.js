import React from "react";
import styled from "styled-components";


const Footer = () => {

    return (
        <Wrapper>
            <section class='footer'>
                <div className="container-fluid text-center ">
                    <div className="row">
                        <div className="text-white mt-4 mb-2">&copy;{new Date().getFullYear()}  Copyright Money Works </div>
                        <div className="row text-center">
                          <div className="col">
                    
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}



const Wrapper = styled.div`
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 70px;
  background-color: green;
}

.text-white {

  font-size:18px;

}

`
export default Footer
