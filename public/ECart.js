import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addcart, delcart } from './reducers';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './ECart.css'
function ECart() {
    let total=0;
    const state= useSelector((state)=>state.handleCart);
    const dispatch=useDispatch();
    const addProduct =(data)=>{
       dispatch(addcart(data))
    }
    const delProduct=(data)=>{
        dispatch(delcart(data));
    }
if(state.length>0){
  return (
    <div className='w-75' id="boxE">

  {
    
    state.map((x)=>{
        total=total+x.price*x.qty
        return(
          <div className='row m-2 p-2 text-center' id="backE">
          <div className='col-md-3'>
            <center><img className="card-img-top hoverE" src={x.image} alt="Card image cap" /></center>
          </div>
          <div className='col-md-5'>
        <h5>{x.title}</h5>
        <p>{Array(Math.round(x.rating.rate)).fill().map((_)=>(
      <span>⭐</span>
          ))}</p>
          <p className="card-text fw-bold text-secondary"><span className='me-1'>Price:</span>${(x.price*x.qty).toString().substr(0,7)}</p>
          
        <button className='btn-sm' onClick={()=>addProduct(x)}><i class="fa-solid fa-plus"></i></button>
        <span className='ms-1 me-1'>{x.qty}</span>
        <button className='btn-sm' onClick={()=>delProduct(x)}><i class="fa-solid fa-minus"></i></button>
         </div>
          </div>
        )
        
    })

  }
    
   <center><p className='text-center fw-bold'>Total:{total.toString().substr(0,7)}</p>
   <Link to='/Checkout' state={{value:total}}><button className='btn btn-primary' style={{margin:"0 auto"}}>CheckOut Page</button></Link>
   </center>
   
    </div>
  )
}
else{
  return(
  <center><div><h3>No Items Present in Cart</h3></div></center>
  )
}
}

export default ECart