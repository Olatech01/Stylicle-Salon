import Image from 'next/image'
import React from 'react'

const Services = () => {

    const services = [
        {id: 1, name: "Makeup-artist", icon: "/artist.svg"},
        {id: 2, name: "Wellnesscenter", icon: "/well.svg"},
        {id: 3, name: "Barbersalon", icon: "/cut.svg"},
        {id: 4, name: "Frisørsalon", icon: "/sleep.svg"},
        {id: 5, name: "Massageklinik", icon: "/massage.svg"},
        {id: 6, name: "Fodterapeut", icon: "/foot.svg"},
    ]
  return (
    <div className='flex items-center justify-center mt-10 w-full'>
        <div className='flex items-center justify-around w-[80%]'>
            {services.map((item) => (
                <div key={item.id} className='flex flex-col items-center gap-1.5'>
                    <Image height={96} width={96} src={item.icon} alt={item.name}/>
                    <h2 className='text-[16px] text-[#422A3C] font-bold'>
                        {item.name}
                    </h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services