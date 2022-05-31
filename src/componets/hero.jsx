import React from 'react'
import bgImg from '../assets/home.jpeg'


const hero = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Best Homes In Lagos</p>
                    <h1 className='py-3 text-5xl md:7xl font-bold flex flex-col justify-center md:items-start w-full'>Find The Perfect Place.</h1>
                    <p className='text-2xl'>Search the largest homes of luxury high-rise apartment/homes in Lagos.</p>
                    <br />
                    <button className='py-3 px-4 sm:w-[60%] '>Buy/Rent</button>
                </div>
                <div className=''>
                    <img className='w-full' src={bgImg} alt='' />
                </div>
            </div>
        </div>
      )
    }

export default hero