import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import LoginButton from "./LoginButton";
function Navbar() {

    return (
<Wrapper>
  <div class="nav">
    <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">Money Works</div>
      </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span className='hover'></span>
      <span className='hover'></span>
      <span className='hover'></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link to='/'>Home</Link>
    <Link to='/quotes'>The Market</Link>
   <Link to='/news'> News</Link>
    <Link to='/about'>About Us</Link>
    <Link to='/contact'>Contact Us</Link>
    <Link to='/careers'>Careers</Link>
    <Link to='/login'><LoginButton/> </Link>
  </div>
</div>
</Wrapper>
    )
}

const Wrapper = styled.div`

* {
  box-sizing: border-box;
}

body {
  margin: 0px;
}

.nav {
  height: 50px;
  width: 100%;
  background-color:green;
  position: relative;
  z-index: 999999;
}

.nav > .nav-header {
  display: inline;
  z-index: 999999;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 30px;
  color: #fff;
 margin-left: 5px;
 margin-right:0px;
 z-index: 999999;
 font-style: italic;
}

.nav > .nav-btn {
  display: none;
  z-index: 999999;
}
.hover:hover {
  cursor: pointer;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 19px;
  z-index: 999999;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 10px 40px 10px 40px;
  text-decoration: none;
  color: #efefef;
  z-index: 999999;
}

.nav > .nav-links > a:hover {
  background-color: rgba(41, 41, 41, 0.3);
  cursor: pointer;

}

.nav > #nav-check {
  display: none;
  z-index: 999999;
}

@media (max-width:1111px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 999999;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 9px; 
    z-index: 999999;
  }
  

  .nav > .nav-btn > label > span {

    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
    z-index: 999999;
  }


  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: green;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
    z-index: 999999;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
    z-index: 999999;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
    z-index: 999999;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
    z-index: 999999;
  }


}


`
export default Navbar;

