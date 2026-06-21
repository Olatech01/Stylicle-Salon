import { Book, Edit, Mail, Phone, User } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#FBF2E0] h-250 w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center'>
            <p className='text-[#BA7894] text-[15px] font-semibold'>
                SCHEDULE YOUR PRESENCE
            </p>
            <h2 className='text-[#422A3C] text-[45px] font-bold font-serif'>
                Get in touch
            </h2>
        </div>

        <form className='bg-white w-250 h-175 flex flex-col gap-3 mt-8 rounded-[20px] items-center justify-center'>
            <div className='h-16.25 w-202.5 border gap-2 px-3 rounded-lg border-[#555555] flex items-center'>
                <User size={24} color='#422A3C'/>
                <input type="text" className='outline-0 text-[19px]' placeholder='Name'/>
            </div>
            <div className='h-16.25 w-202.5 border gap-2 px-3 rounded-lg border-[#555555] flex items-center'>
                <Mail size={24} color='#422A3C'/>
                <input type="text" className='outline-0 text-[19px]' placeholder='Email'/>
            </div>
            <div className='h-16.25 w-202.5 border gap-2 px-3 rounded-lg border-[#555555] flex items-center'>
                <Phone size={24} color='#422A3C'/>
                <input type="text" className='outline-0 text-[19px]' placeholder='Name'/>
            </div>
            <div className='h-16.25 w-202.5 border gap-2 px-3 rounded-lg border-[#555555] flex items-center'>
                <Book size={24} color='#422A3C'/>
                <input type="text" className='outline-0 text-[19px]' placeholder='Service You Need'/>
            </div>
            <div className='h-16.25 w-202.5 border gap-2 px-3 rounded-lg min-h-30.75 border-[#555555] flex pt-4'>
                <Edit size={24} color='#422A3C'/>
                <textarea type="text" className='outline-0 w-full text-[19px]' placeholder='Service You Need'/>
            </div>
            <button className='h-16.25 w-202.5 bg-[#422A3C] cursor-pointer text-white font-bold font-serif mt-6'>
                SUBMIT
            </button>
        </form>
    </div>
  )
}

export default Contact