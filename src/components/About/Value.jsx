import Image from 'next/image'
import React from 'react'

const Value = () => {
    const values = [
        {id: 1, name: "Beauty Experts", text: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.", image: "/beauty.svg" , border: true},
        {id: 2, name: "Great Services", text: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.", image: "/great.svg", border: true},
        {id: 3, name: "100% Genuine", text: "The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.", image: "/gen.svg", border: false},
    ]
  return (
    <div className='flex flex-col items-center py-16 justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-[#BA7894] font-semibold text-[15px]'>
                Our Values
            </h2>
            <h2 className='text-[#141414] -mt-4 text-[45px] font-bold'>
                The work values we thrive for
            </h2>
        </div>


        <div className='flex flex-col gap-10 mt-6'>
            {values.map((item) => (
                <div key={item.id} className={`flex items-center gap-8 ${item.border ? "border-b border-[#D3D3D3] pb-8" : ""}`}>
                    <Image height={100} width={100} src={item.image} alt='image'/>
                    <div>
                        <h2 className='text-[#141414] text-[22px] font-bold'>
                            {item.name}
                        </h2>
                        <p className='w-113.25 text-[#555555] text-[18px] font-normal'>
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Value