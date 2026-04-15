import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-screen h-[70vh]'>
        <img className='w-full h-full object-top  ' src="https://i.pinimg.com/1200x/aa/d5/62/aad5624c929e2561b2645c12e3d97335.jpg" alt="" />
        <div className='absolute inset-0 heroText w-1/2 self-center flex flex-col  items-center' >
            <h1 className=' font-semibold text-3xl ' >Discover ethnically</h1>
            <h1 className=' font-semibold text-2xl  ' >cultivated and Fair-Trade gifts</h1>
            <button className='bg-amber-500 text-2xl mt-4 rounded-md px-3 flex items-center pb-1 hover:scale-110 transition-transform z-10 ' >shop now</button>
        </div>
    </div>
  )
}

export default Hero