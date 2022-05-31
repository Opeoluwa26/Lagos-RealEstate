import React from 'react'

import Apt1 from '../assets/apt1.jpeg'
import Apt2 from '../assets/apt2.jpeg'
import Apt3 from '../assets/apt3.jpeg'




const best = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
        <h1 className='text-5xl font-bold'>Find Best Rated Properties</h1> 
                <br />
        <div className='md:grid md:grid-cols-4 gap-1 px-2'>
        <p><span className='font-bold '>All</span></p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
        </div>

         </div> 
        </div>
                <br />
         <div className='md:grid md:grid-cols-3 gap-1 px-2 '>
            <img className='border py-8 rounded-xl shadow-xl w-full' src={Apt2} alt='' />
            <img className='border py-8 rounded-xl shadow-xl w-full' src={Apt1} alt='' />
            <img className='border py-8 rounded-xl shadow-xl w-full' src={Apt3} alt='' />
         </div>
         <br />
         <div className='md:flex pr-4 justify-center'>
       <button className='px-8 py-3'>View All</button> 
       </div>
    </div>
    
  )
}

export default best