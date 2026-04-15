import React from 'react'
import Navbar from '../components/section1/Navbar'
import Hero from '../components/section1/Hero'
import Footer from '../components/section1/footer'

const Section1 = () => {
  return (
    <div className='section1 relative'>
        <Hero/>
        <div className='absolute inset-0'>
          <Navbar/>
        </div>
        <Footer/>
    </div>
  )
}

export default Section1