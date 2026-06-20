import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col items-center gap-5 bg-[#EBF3F5] py-20 px-20 justify-center my-16'>
        <div>
            <h2 className='text-[45px] text-[#422A3C] font-bold text-center leading-12'>
                We are Experienced in making you <br /> very Beautiful
            </h2>
            <p>

            </p>
        </div>

        <div className='flex gap-4'>
            <Image height={411} width={462} src={"/one.svg"} alt='image' className='rounded-l-[8px]'/>
            <div className='flex flex-col gap-5'>
                <Image height={304} width={500} src={"/two.svg"} alt='image'/>
                <Image height={304} width={500} src={"/three.svg"} alt='image'/>
            </div>
            <div className='flex flex-col gap-5'>
                <Image height={304} width={500} src={"/four.svg"} alt='image' className='rounded-tr-[8px]'/>
                <Image height={304} width={500} src={"/five.svg"} alt='image' className='rounded-br-[8px]'/>
            </div>
        </div>
    </div>
  )
}

export default Experience