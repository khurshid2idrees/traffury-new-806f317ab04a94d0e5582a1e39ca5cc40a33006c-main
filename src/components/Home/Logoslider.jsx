import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';



import '../../css/style.css';

import adcombo from '../../assets/images/logos/adcombo.jpg';
import kmbiz from '../../assets/images/logos/kmbiz.jpg';
import leadrock from '../../assets/images/logos/leadrock.jpg';
import lr from '../../assets/images/logos/lr.jpg';
import sn from '../../assets/images/logos/sn.jpg';
import terra from '../../assets/images/logos/terra.jpg';
import metacpa from '../../assets/images/logos/metacpa.jpg';
import monadlead from '../../assets/images/logos/monalead.jpg';
import afstar from '../../assets/images/logos/affstar.jpg';
import m1 from '../../assets/images/logos/m1.jpg';

export default function Logoslider() {

  const isMobile = useMediaQuery({ maxWidth: 767 });
    
  return (
   <>

   <div className='pt-16'>
     <Swiper
        slidesPerView={isMobile?1:4}
        spaceBetween={30}
        autoplay ={true} 
        loop={true}
        speed={1200}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={adcombo}/></SwiperSlide>
        <SwiperSlide><img src={kmbiz}/></SwiperSlide>
        {/* <SwiperSlide><img src={leadrock}/></SwiperSlide> */}
        {/* <SwiperSlide><img src={lr}/></SwiperSlide> */}
        <SwiperSlide><img src={sn}/></SwiperSlide>
        <SwiperSlide><img src={terra}/></SwiperSlide>
        {/* <SwiperSlide><img src={metacpa}/></SwiperSlide>
        <SwiperSlide><img src={monadlead}/></SwiperSlide>
        <SwiperSlide><img src={afstar}/></SwiperSlide>
        <SwiperSlide><img src={m1}/></SwiperSlide> */}
      </Swiper>

      </div>
 
   </>
  )
}
