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


import apilogo from '../../assets/images/advantageslogo/api.png'
import crmlogo from '../../assets/images/advantageslogo/crm.png'
import callcentericon from '../../assets/images/advantageslogo/callCenterIcon.png'
import inhouseicon from '../../assets/images/advantageslogo/in-house-icon.png'
import personalicon from '../../assets/images/advantageslogo/personal-icon.png';
import geoicon from '../../assets/images/advantageslogo/geo-icon.png'

export default function Advantages() {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const backgroundImageUrl = 'url("https://raw.githubusercontent.com/khurshid2idrees/traffury-new-806f317ab04a94d0e5582a1e39ca5cc40a33006c-main/main/src/assets/images/advantageslogo/advantagebg.png")';

    const containerStyle = {
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        width: '100%',
        height: '100%', // Adjust height as needed
    };

    const advdata = [
        {
            id: 1,
            img: apilogo,
            desc: 'Ready Made Api'
        },
        {
            id: 2,
            img: crmlogo,
            desc: 'Special CRM-system'
        },
        {
            id: 3,
            img: callcentericon,
            desc: 'Our Own Call-Center'
        },
        {
            id: 4,
            img: inhouseicon,
            desc: 'Direct Advertiser'
        },
        {
            id: 5,
            img: personalicon,
            desc: 'Personal Manager'
        },
        {
            id: 6,
            img: geoicon,
            desc: 'Top Geos'
        }
    ]

    return (
        <>

{/* Desktop view start  */}
            <div className=" md:block hidden px-3 md:lg:xl:px-28     borderremove-t borderremove-b py-20 bg-opacity-10 pb-44 " id="advantage" style={containerStyle}>
                <h1 className='text-center text-5xl font-bold font-gotham  pb-4 text-white'>Our Advantages</h1>

                
                <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white noshaddow-xl noshaddow-neutral-100 borderremove " style={{ background: 'none' }}>

                    {advdata.map((data) => (
                        <div key={data.id}
                            class="p-10 flex flex-col items-center text-center group md:lg:xl:borderremove-r md:lg:xl:borderremove-b   cursor-pointer">
                            <img src={data.img} width={170} alt="" />

                            <p class="text-xl font-semibold  mt-6 text-white ">{data.desc}</p>

                            
                        </div>

                    ))}

                </div>

                

                


            </div>

     {/* Desktop view end         */}

     

     {/* Mobile view start  */}

     <div className=" md:hidden px-3 md:lg:xl:px-28     borderremove-t borderremove-b py-20 bg-opacity-10 pb-44 " id="advantage" style={containerStyle}>
                <h1 className='text-center text-5xl font-bold font-gotham  pb-4 text-white'>Our Advantages</h1>

                
                <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white noshaddow-xl noshaddow-neutral-100 borderremove " style={{ background: 'none' }}>

                    

                    {advdata.map((data) => (
                        <div key={data.id}
                            class="p-10 flex flex-col items-center text-center group md:lg:xl:borderremove-r md:lg:xl:borderremove-b   cursor-pointer">
                            <img src={data.img} width={170} alt="" />

                            <p class="text-xl font-semibold  mt-6 text-white ">{data.desc}</p>

                            
                        </div>

                    ))}

                </div>

                

                


            </div>

        {/* Mobile view end      */}
        </>
    )
}
