import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
//import Card from './Card';


import 'bootstrap/dist/css/bootstrap.min.css';


const Client1 = () => {
  return (
    <div className='container py-4 px-4 justify-content-center bg-light'>
      <Swiper  
      freeMode={true}
      grapCursor ={true}
      modules={[FreeMode]}
      className="mySwiper"
      slidesPerView={5}
      spaceBetween={30}
      >
        <SwiperSlide>
          <img src="assets/img/icons/bag.png" width="150px"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="assets/img/icons/bag.png" width="150px"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="assets/img/icons/bag.png" width="150px"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="assets/img/icons/bag.png" width="150px"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="assets/img/icons/bag.png" width="150px"/>
        </SwiperSlide>
        
      </Swiper>

    </div>
  );
};

export default Client1;