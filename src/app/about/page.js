import About from '@/components/About/About'
import Hero from '@/components/About/Hero'
import Journey from '@/components/About/Journey'
import Value from '@/components/About/Value'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <Value />
        <About />
        <Journey />
        <Testimonials />
    </div>
  )
}

export default page