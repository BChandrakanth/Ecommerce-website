import React from 'react'
import './Footer.css'
function Footer() {
  return (
   <div className='container-fluid bg-dark text-white mt-3 mb-0 ft'>
<div className='footer' style={{margin:"0 auto",width:"95vw"}}>

<div className="d-flex row justify-content-center p-3 text-warning" id="products">
    <div className='col-md-3 text-white '>Get connected with us on social networks:</div>
      <div className='col-md-3'>
        <div className='ms-5'>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
      </div>
      </div>
</div>
<div className='row texts justify-content-center' id="products">
    <div className='col-md-3 col-sm-2'>
        <h4 className='text-danger'>Products</h4>
    <p class="text-decoration-underline">Electronics</p>
    <p class="text-decoration-underline">Fashions</p>
    <p class="text-decoration-underline">Jewellery</p>
    <p class="text-decoration-underline">Items</p>
    </div>
    <div className='col-md-3 col-sm-2'>
    <h4 className='text-danger'>Useful Links</h4>
    <p class="text-decoration-underline">Pricing</p>
    <p class="text-decoration-underline">Setting</p>
    <p class="text-decoration-underline">Orders</p>
    <p class="text-decoration-underline">Help</p>
    </div>
    <div className='col-md-3'>
    <h4 className='text-danger'>Contact</h4>
    <p class="text-decoration-underline"><span><i class="fas fa-home me-3"></i></span>New York, NY 10012, US</p>
    <p class="text-decoration-underline"><i class="fas fa-envelope me-3"></i>info@example.com</p>
    <p class="text-decoration-underline"><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
    <p class="text-decoration-underline"><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
    </div>

</div>
    </div>
</div>
  )
}

export default Footer