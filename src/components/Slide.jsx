import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow,Autoplay } from 'swiper/modules'; // Import Swiper and modules
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation module styles
import 'swiper/css/effect-coverflow'; // Import Coverflow effect styles
import '../App.css'; // Import your custom styles if any
import data from '../assets/carousel.json';
import StarRating from './StarRating';


const Slide = () => {
  const [product]=useState(data);
  return (
    <div className="swiper-container">
      <Swiper
      modules={[EffectCoverflow, Navigation,Autoplay]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      spaceBetween={35}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{
        delay:2000,
        disableOnInteraction:false
      }}
      loop={true}
      speed={600}
      className=""
    >
     {product.map((item) => (
        <SwiperSlide key={item.id} className="swiper-slide border border-4 border-danger">
          <div className="card mx-auto border border-0" style={{ width: '15rem'}}>
           <div className='mx-auto'>
           <img src={item.image} className="card-img-top" alt={item.name} style={{width:'200px',height:'200px'}}/>
           </div>
            <div className="card-footer border border-0 bg-danger-subtle text-center">
              <h5 className="card-title">{item.name}</h5>
              <p className=''><StarRating rating={item.rating} /></p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
    </div>
  );
};

export default Slide;
