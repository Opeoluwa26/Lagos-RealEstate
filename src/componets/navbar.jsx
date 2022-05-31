import React,{useState} from 'react'

import {MenuIcon,HomeIcon, XIcon} from '@heroicons/react/outline'

const navbar = () => {
  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className='w-screen h-{80px} z-10 bg-zinc-200 fixed drop-shadow-lg'>
    <div className='px-2 flex justify-between item-center w-full h-full'>
    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'><span className='text-indigo-600'>LagosReal</span>Estate</h1>
    
        <ul className='hidden md:flex'>
        <li className='text-pointer'>Search</li>
        <li className='text-pointer'>Home</li>
        <li className='text-pointer'>About</li>
        <li className='text-pointer'>Contact</li>
        </ul>
       <div className='hidden md:flex pr-4'>
       <button className='px-8 py-3'>Sign In</button> 
       </div>
       <div className='md:hidden mr-4' onClick={handleClick}>
         {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5' />}
       
       </div>
    </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'>Search</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Contact</li>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <div className='flex flex-col my-4'>
        <button className='px-8 py-3'>Sign In</button> 
        </div>
      </ul>


</div>


  )
}

export default navbar