import React from 'react'
import './Checkout.css'
import { Link,useLocation } from 'react-router-dom'
function Checkout() {
    const location = useLocation();
    const { value } = location.state;
    const ans=value.toString().substr(0,7)
    function Myfun(){
        
    }
  return (
 <div class="container d-md-flex align-items-center CheckOut mt-3"> 
  <div class="card box2 rounded shadow-sm"> 
  <div class="d-flex align-items-center justify-content-between p-md-5 p-4"> <span class="h5 fw-bold m-0">Payment methods</span> 
  <div class="btn btn-primary bar"><span class="fas fa-bars"></span></div> </div> 
  <ul class="nav nav-tabs mb-3 px-md-4 px-2"> 
  <li class="nav-item"> <a class="nav-link px-2 active" aria-current="page">Credit Card</a> </li> 
  <li class="nav-item"> <a class="nav-link px-2">Mobile Payment</a> </li> 
  <li class="nav-item ms-auto"> <a class="nav-link px-2" href="#">+ More</a> </li> </ul>
<div class="px-md-5 px-4 mb-4 d-flex align-items-center"> <div class="btn btn-success me-4"><span class="fas fa-plus"></span></div> 
<div class="btn-group" role="group" aria-label="Basic radio toggle button group"> 
<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked required/> 
<label class="btn btn-outline-primary" for="btnradio1"><span class="pe-1">+</span>5949</label> 
<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" /> <label class="btn btn-outline-primary" for="btnradio2"><span class="lpe-1">+</span>3894</label> </div> </div> <form action=""> <div class="row"> <div class="col-12"> <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Credit Card</span> <div class="inputWithIcon">
 <input class="form-control" type="text" id="validationDefault01" required/> <span class=""> <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="" /></span> </div> </div> </div> <div class="col-md-6"> <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span>Expiration<span class="ps-1">Date</span></span> <div class="inputWithIcon"> <input type="text" class="form-control" id="validationDefault02" required/> <span class="fas fa-calendar-alt"></span> </div> </div> </div> <div class="col-md-6"> <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4"> <span>Code CVV</span> <div class="inputWithIcon"> <input type="password" class="form-control" id="validationDefault03" required/> <span class="fas fa-lock"></span> </div> </div> </div> <div class="col-12"> <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Name</span> <div class="inputWithIcon"> <input class="form-control text-uppercase" type="text" required /> <span class="far fa-user"></span> </div> </div> </div> <div class="col-12 px-md-5 px-4 mt-3"> <Link to='/'><div class="btn btn-primary w-100" onClick={()=>{
    alert("Payment Succesful");
 }}><p>Pay: ${ans}</p></div></Link> </div> </div> </form> </div> </div>
  )
}

export default Checkout