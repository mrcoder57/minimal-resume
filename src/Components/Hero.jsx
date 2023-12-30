import React from 'react'
import body from "../assets/man.png"
import Herobg from './Herobg'
const Hero = () => {
  return (
    <div className='lg:h-[600px] h-full w-full overflow-y-hidden bg-slate-100 font-mono shadow-lg'>
      <div className='flex lg:flex-row flex-col  mt-10 lg:justify-between justify-start mx-8'>
        <div>
          <h1 className='text-6xl font-medium text-[#d8874a]'>
            Hey There, <br /> I'm Aman
          </h1>
        </div>
        <br />
        <div>
          <p className='mr-6 mt-4 text-xl text-slate-600'>
            I create Wonderful things <br /> I create the best applications
          </p>
        </div>

      </div>
      <div className=' lg:h-44  lg:max-h-40 lg:ml-[350px] lg:mt-[-180px] mx-4 mt-6 relative z-50 '>
        <img src={body} alt='boy' width={500} height={200} draggable={false} />
      </div>
      <Herobg></Herobg>
    </div>
  )
}

export default Hero