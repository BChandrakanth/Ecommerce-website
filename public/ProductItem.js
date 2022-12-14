import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './ProductItem'
import './ProductItem.css'
function ProductItem() {
const location = useLocation();
const [data,setdata] = useState([]);
useEffect(() => {
 const getProduct = async()=>{
    const response = await fetch(`https://fakestoreapi.com/products`);
    setdata(await response.json());
 }
 getProduct();
},[])
console.log(data);
   const obj= data[location.state.itemName];
   console.log(location.state.itemName);
  return (
    <div className='container-fluid'>
         <div className='row bg'>
          <div className='col-md-6'>
          <img src={obj.image} className="itemPro" />
          </div>
          <div className='col-md-6 pt-2'>
           <h4 className='text-decoration-underline'>{obj.title}</h4>
           <ol>
            <li><h5 className='font'>category:<i className='font'>{obj.category}</i></h5></li>
            <li> <p className='font'>Rating:{Array(Math.round(obj.rating.rate)).fill().map((_)=>(
<span>⭐</span>
    ))}</p></li>
            <li><p className='font'>Price: ${obj.price}</p></li>
            <li><span className='font fw-bold'>Description:</span><p>{obj.description}</p> </li>
           </ol>
           
          </div>
         
        </div>
        <a href="#" className="btn btn-sm btn-outline-dark text-center m-auto">Add To Cart</a>
    </div>
       
  )
}

export default ProductItem