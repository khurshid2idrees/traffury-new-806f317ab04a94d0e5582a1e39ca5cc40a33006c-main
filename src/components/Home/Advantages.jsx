import React from 'react';
import { useMediaQuery } from 'react-responsive';

import apilogo from '../../assets/images/advantageslogo/api.png'
import crmlogo from '../../assets/images/advantageslogo/crm.png'
import callcentericon from '../../assets/images/advantageslogo/callCenterIcon.png'
import inhouseicon from '../../assets/images/advantageslogo/in-house-icon.png'
import personalicon from '../../assets/images/advantageslogo/personal-icon.png';
import geoicon from '../../assets/images/advantageslogo/geo-icon.png'

export default function Advantages() {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const backgroundImageUrl = 'url("https://raw.githubusercontent.com/khurshid2idrees/traffury/master/src/assets/images/advantageslogo/advantagebg.png")';

    const containerStyle = {
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        width: '100%',
        height: '100%', // Adjust height as needed
    };
    return (
        <>

            <div class="px-3 md:lg:xl:px-28     borderremove-t borderremove-b py-20 bg-opacity-10 pb-44 " id="advantage" style={containerStyle}>
                <h1 className='text-center text-5xl font-bold font-gotham  pb-4 text-white'>Our Advantages</h1>
                <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white noshaddow-xl noshaddow-neutral-100 borderremove " style={{ background: 'none' }}>

                    <div
                        class="p-10 flex flex-col items-center text-center group md:lg:xl:borderremove-r md:lg:xl:borderremove-b   cursor-pointer">
                        <img src={apilogo} width={170} alt="" />
                        {/* <span class="p-5 rounded-full bg-red-500 text-white noshaddow-lg noshaddow-red-200"> */}
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg> */}

                        {/* </span> */}
                        <p class="text-xl font-semibold  mt-6 text-white ">Ready Made Api</p>
                        {/* <p class="mt-2 text-sm text-slate-500">Our payment is often processed through Paypal, Payoneer, Wire, USDT...extremely attractive compared to other networks.</p> */}
                    </div>

                    <div
                        class="p-10 flex flex-col items-center text-center group md:lg:xl:borderremove-r md:lg:xl:borderremove-b   cursor-pointer">
                        <img src={crmlogo} width={170} alt="" />
                        {/* <span class="p-5 rounded-full bg-orange-500 text-white noshaddow-lg noshaddow-orange-200"><svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg></span> */}
                        <p class="text-xl font-semibold  text-white mt-6">Special
CRM-system 
                        </p>
                        {/* <p class="mt-2 text-sm text-slate-500">Each offer placed into the network is handly selected to ensure the highest quality of strong converting offers.</p> */}
                    </div>

                    <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:borderremove-b   cursor-pointer">
                        <img src={callcentericon} width={170} alt="" />
                        {/* <span class="p-5 rounded-full bg-yellow-500 text-white noshaddow-lg noshaddow-yellow-200"><svg
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg></span> */}


                        <p class="text-xl font-semibold  text-white mt-6">Our own
call-center </p>
                        {/* <p class="mt-2 text-sm text-slate-500">Monitor advertisers to make sure they process orders on time and confirm them.</p> */}
                    </div>


                    <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:borderremove-r   cursor-pointer">
                    <img src={inhouseicon} width={170} alt="" />
                      

                        <p class="text-xl font-semibold  text-white mt-6">Direct Advertiser
                        </p>
                    </div>

                    <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:borderremove-r   cursor-pointer">
                    <img src={personalicon} width={170} alt="" />


                        <p class="text-xl font-semibold  text-white mt-6">Personal
manager 
                        </p>
                       
                    </div>

                    <div class="p-10 flex flex-col items-center text-center group       cursor-pointer">
                    <img src={geoicon} width={170} alt="" />

                       
                        <p class="text-xl font-semibold  text-white mt-6">Top Geos

                        </p>
                       
                    </div>




                </div>


            </div>
        </>
    )
}
