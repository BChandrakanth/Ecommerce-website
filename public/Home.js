import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Slider from './Slider'
import Products from './Products'
import Footer from './Footer'
import Headings from './Headings';
import './Home.css'
import Testimonial from './Testimonial'
import Banner from './Banner'
function Home() {
  return (
    <div>
    <div className='container-fluid' style={{overflowX: "hidden"}}>
        <div className='home'>
          <Slider />
          <div style={{margin:"0 auto"}}>
         <Products />
         </div>
        <div className='home-container'>
        <div className='home-row'></div>
        <div></div>
        </div>
        </div>
    </div>
    <Banner />
    </div>
  )
}

export default Home