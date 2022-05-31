import React from 'react'

import './featured.css'
import Home3 from '../assets/home3.jpeg'
import Liv1 from '../assets/liv1.jpeg'
import Bed1 from '../assets/bed1.jpeg'
import Bath1 from '../assets/bath1.jpeg'
import Int2 from '../assets/int2.jpeg'

import Home2 from '../assets/home2.jpg'
import Liv2 from '../assets/liv2.jpeg'
import Bed2 from '../assets/bed2.jpeg'
import Bath2 from '../assets/bath2.jpeg'
import Int3 from '../assets/int3.jpeg'

const featured = () => {
  return (

    <div className='featured w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
        <h1 className='featured-text text-5xl font-bold'>Top Featured Listings</h1>
        <p className='featured-text text-2xl text-indigo-600'> Select Listings By Local Govt, Places or Zip Code</p> 
        </div>
        </div>
        
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={Home3} alt='' />
            <img src={Liv1} alt='' />
            <img src={Bed1} alt='' />
            <img src={Bath1} alt='' />
            <img src={Int2} alt='' />
           <div className='span-3 img-details'>
               <div className='top'>
                   <h2>12, Illupeju Road. Yaba, Lagos</h2>
                   <p>House For Sale</p>
                   <p className='price'>#122,456,560</p>
               </div>
               <div className='info-grid'>
                   <div className='info'>
                    <p className='bold'>Bedrooms:</p><p>5</p>
                   </div>
                   <div className='info'>
                    <p className='bold'>Bathrooms:</p><p>7</p>
                   </div>
                
                   <div className='info'>
                    <p className='bold'>Square feet:</p><p>1,324</p>
                   </div>
                   <div className='info'>
                    <p className='bold'>Est Payment:</p><p>#80,100,000</p>
                   </div>
                   </div>
            
               </div>
               <div className='span-2 right-img-details'>
                   <p>Beautiful modern day homes in the city of Lagos with a fully-size pool. 
                       Spacious and luxurious home located all over Lagos State, including media rooms,
                        workout facility, and built in sauna. Also available are stand-by generators.</p>
                        <button className='py-3 px-4'>View Listings</button>
               </div>
           </div>


            {/* section section */}
          <div className='container'>
              <img className='order-2' src={Liv2} alt='' />
            <img className='order-3' src={Bed2} alt='' />

            <img className='span-3 image-grid-row-2 order-1' src={Home2} alt='' />

            <img className='order-4' src={Bath2} alt='' />
            <img className='order-5' src={Int3} alt='' />
            <div className='span-2 right-img-details order-7'>
                  <p>Beautiful modern day homes in the city of Lagos with a fully-size pool.
                      Spacious and luxurious home located all over Lagos State, including media rooms,
                      workout facility, and built in sauna. Also available are stand-by generators.</p>
                      <button className='py-3 px-4'>View Listings</button>
              </div>
              
              <div className='span-3 img-details order-6'>
                  <div className='top'>
                      <h2>1, Abraham Adesanya Road. Ajah, Lagos</h2>
                      <p>House For Sale</p>
                      <p className='price'>#220,456,560</p>
                  </div>
                  <div className='info-grid'>
                      <div className='info'>
                          <p className='bold'>Bedrooms:</p><p>5</p>
                      </div>
                      <div className='info'>
                          <p className='bold'>Bathrooms:</p><p>7</p>
                      </div>
                      <div className='info'>
                          <p className='bold'>Square feet:</p><p>1,324</p>
                      </div>
                      <div className='info'>
                          <p className='bold'>Est Payment:</p><p>#180,100,000</p>
                      </div>


                  </div>
              </div>
              
          </div>

        </div>
       
  )
}

export default featured