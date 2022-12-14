import React from 'react'
import img from './BannerImages/exclusive.png'
import './Banner.css'
import { Link } from 'react-router-dom'
import imag from './BannerImages/logo.png'
function Banner() {
  return (
    <div className='container-fluid mt-5 p-2' id='bg1'>
<div className='row' style={{margin:"0 auto"}}>
<div className='col-md-6 d-flex justify-content-center'>
    <img src={img}  id="img" />
</div>
<div className='col-md-6 col-8 mt-md-4' style={{margin:"0 auto"}}>
 <p id="fontStyle" style={{fontFamily:"monospace"}}>Exclusively Available on<Link to="/"><span className='navbar-brand me-auto ms-1 fontStyle'><img src={imag} /></span></Link></p>
 <h1 className='fw-bold'>Smart Band 4</h1>
 <small>
 LG IPS display has extraordinary color accuracy, covering 98% of the sRGB
 <br />
 Exclusively Available on RedStore.
 </small>

</div>
</div>
    </div>
  )
}

export default Banner