import React from 'react'
import Navbar from '../Components/Navbar';
import MainStockHero from "../Components/MainStockHero";
import Footer from '../Components/Footer'
import styled from 'styled-components';
const  Contact = ()=> {
    



    return (
        <Wrapper>
        
        <Navbar />
        <MainStockHero />


        <section>
             <div className="container-fluid mb-5 mt-5">

          
               <div className="row">
                 <div className="col-xl-2 col-lg-1 col-md-0 " >

                 </div>
                 <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                 <div className="card mb-5">
                 <img src="https://i.ibb.co/wgMPtdq/newyork.jpg" alt="" className='card-img-top'/>
                   <div className="card-body">
                      <div className="card-title">New York City</div>
                      <hr />
                      <div className="card-text px-auto">
                        <p className='text'>Open Monday-Friday:<span className='span'> 8am-5pm</span></p>
                        <p className='text'>Toll Free: <span className='span'> 800.421.6679</span></p>
                        <p className='text'>Fax: <span className='span'> 732.098.8898</span></p>
                        <hr />
                        <p className='text'>Address:<span className='span'> 200 West St, New York, NY 10282</span></p>
                      </div>
                      
                   </div>
                 </div>
                   
                 </div>
        <div className="col-xl-5 col-lg-6 col-md-7 col-sm-6">

          <form class="row g-2 p-3">
          <h3>We'd love to hear your feedback</h3>
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationDefault01" required />
              </div>
              <div class="col-md-6">
                <label for="validationDefault02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationDefault02"  required />
              </div>
              <div className="row g-1">
              <div class="col-123">
                <label for="validationDefaultUsername" class="form-label">Email address</label>
                <div class="input-group">
                  <input type="email" placeholder='johnsmith@mail.com' class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
                </div>
              </div>
              </div>

              <div className="row g-3">
              <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required />
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required />
  </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Type your message below</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
              </div>
              
              <button class='btn btn-success' typ='submit' onClick>Submit Message</button>
          </form>

        </div>
                 <div className="col-xl-2 col-lg-1 col-md-0"></div>
               </div>
             </div>
        </section>
        <Footer />
        </Wrapper>
    )
}

const Wrapper= styled.div`
 .card{
    ${'' /* outline:none !important; */}
 }
 .card-title {
   font-size: 25px ;
 }
 .text {
   font-weight: bold;
 }
 .span{
  font-weight: normal;
 }
 
 form {
  border: 1px solid lightgray;
 }
`

export default Contact;