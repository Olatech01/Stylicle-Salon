import React from 'react'

const Hero = () => {
  return (
    <div className='h-125 w-full flex items-center justify-center bg-[#422A3C]'>
        <div className='flex flex-col items-center gap-4 justify-center'>
            <h1 className='text-[#ECBFD3] text-[15px] font-semibold font-serif'>SHORT STORY ABOUT US</h1>
            <h2 className='text-[#F7E5C1] text-center leading-10 text-[45px] font-bold font-serif'>
                The big story behind, our <br /> beautyness center
            </h2>
            <button className='bg-[#BA7894] h-16.25 w-44.25 mt-3 cursor-pointer text-white'>
                Contact Us
            </button>
        </div>
    </div>
  )
}

export default Hero