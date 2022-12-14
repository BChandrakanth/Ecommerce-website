import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import imag from './BannerImages/logo.png'
import { useSelector } from 'react-redux'
function Header() {
  const state = useSelector((state)=>state.handleCart)
  return (
    <div className='container-fluid bg-light'>
    <div className='header'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <Link to="/"><span className='navbar-brand me-auto ms-1 fontStyle'><img src={imag} /></span></Link>
    <Link to='/ECart'><button className="navbar-toggler border-0 position-absolute top-0 mt-3 me-5 end-0" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight:"500px"}}>
      <span><i className="fa-solid me-4 fa-cart-shopping"><sup className='ms-1'>{state.length}</sup></i></span>
    </button></Link>
    <button className="navbar-toggler position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className='navbar-nav ms-auto'>
    <li className='nav-item mt-1 me-2'>
    <Link to='/Login' className="nav-link active p-2"><span className='me-1 '>SignIn</span><i className="fa-solid fa-user ms-auto"></i></Link>
    </li>
    <li className='nav-item'>
      <form className="d-flex box mt-2  ms-auto">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        <Link to='/ECart'><span className=" mb-auto rounded  btn  btn-sm hover1 mt-1 me-2"><i className="fa-solid fa-cart-shopping cart"><sup className='ms-1'>{state.length}</sup></i></span></Link>
      </form>
    </li>
 </ul>
      </div>
  </div>
</nav>
    </div>
    </div>
  )
}
//<a className="nav-link active " aria-current="page" href="#"><i className="fa-solid fa-user ms-auto"></i></a>
export default Header