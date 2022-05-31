import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, } from 'react-icons/fa'

import './footer.css'

const footer = () => {
  return (
    <div className='footer w-full my-32 flex'>
          <div className='max-w-[1240px] mx-auto'>
              <div className='social text-bold text-indigo-600 font-bold justify-between text-center align-middle'>

                  <FaFacebook className='icon' />
                  <FaInstagram className='icon' />
                  <FaTwitter className='icon' />
                  <FaPinterest className='icon' />

              </div>
          </div>

     

       
        <div className='container'>
            <div className='col'>
                <h3 className='font-bold'>About</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
            <div className='col'>
                <h3 className='font-bold'>Company</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
            <div className='col'>
                <h3 className='font-bold'>Legal</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
            <div className='col'>
                <h3 className='font-bold'>Information</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
        </div>
        
     </div>
  )
}

export default footer