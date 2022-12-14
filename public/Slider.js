import React from 'react';
import './Slider.css';
import im1 from './BannerImages/BannerImg1.jpg'
import im2 from './BannerImages/BannerImg2.jpg'
import im3 from './BannerImages/BannerImg3.jpg'
function Slider() {
  return (
<div id="slide">
<div id="carouselExampleInterval" class="carousel" data-bs-ride="carousel">
  <div class="carousel-inner slide me-auto ms-auto">
    <div class="carousel-item active" data-bs-interval="5000">
      <img src={im1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={im2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={im3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Slider