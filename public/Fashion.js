import React from 'react'
import { useState,useEffect } from 'react';
import im from './BannerImages/BannerImg3.jpg'
import { useDispatch } from 'react-redux';
import { addcart } from './reducers';
function Fashion() {
    const [data,setdata] = useState([]);
    const dispatch=useDispatch();
    const addProduct =(Data)=>{
       dispatch(addcart(Data))
    }
    useEffect(() => {
      const getProduct = async()=>{
         const response = await fetch(`https://fakestoreapi.com/products`);
         setdata(await response.json());
      }
      getProduct();
     },[])
   const man="men's clothing";
   const women="women's clothing";
   const fashionData = data.filter((x)=>(x.category===man | x.category===women));
   return (
    <div>
    <div id='slide'>
      <img src={im} className='d-block w-100'/>
    </div>
    <h4 className='text-center  lead fw-bold'>Latest Fashion Products</h4>
   <hr />
  <div className='row text-center mb-2' style={{width:"95vw",margin:"0 auto"}}>
    {fashionData.map((p)=>{
      return(
        <div className='col-md-3 mt-4 col-sm-5'>
        <div className="card p-2 margin">
          <div className=''>
  <img className="card-img-top hover" src={p.image} alt="Card image cap"/>
  </div>
  <div className="card-body">
    <h6 className="card-title mb-0 bold"><b>{p.title.substring(0,12)}</b></h6>
    <p>{Array(Math.round(p.rating.rate)).fill().map((_)=>(
<span>⭐</span>
    ))}</p>
    <p className="card-text fw-bold text-secondary"><span className='me-1'>Price:</span>${p.price}</p>
    <a href="#" className="btn btn-sm btn-outline-dark" onClick={()=>addProduct(data)}>Add To Cart</a>
  </div>
</div>
</div>
    )
    })}
  </div>
    </div>
  )
}

export default Fashion