import React from 'react'
import './Headings.css'
import { products, headerItems } from './utils/ProductsData'
import {NavLink} from 'react-router-dom'
function Headings() {
  return (
<div>
    <div className='container-fluid Header'>
   <div className='items container me-autom text-dark'>
    <div className='row w-75 margin me-auto mar'>
    <div className='col item m-1' id="btnText"><NavLink to="/">All</NavLink></div>
    <div className='col item m-1 text-white' id="btnText"><NavLink to="/">Bestseller</NavLink></div>
    <div className='col item m-1' id="btnText"><i class="fa-solid fa-mobile-notch" ></i><NavLink to="/Fashion">Fashion</NavLink></div>
    <div className='col item m-1' id="btnText"><i class="fa-solid fa-mobile-notch" ></i><NavLink to="/Electronics">Electronics</NavLink></div>
    <div className='col item m-1' id="btnText"><i class="fa-solid fa-mobile-notch" ></i><NavLink to="/Jewellery">Jewelery</NavLink></div>
    </div>
   </div>
    </div>
</div>
  )
}

export default Headings