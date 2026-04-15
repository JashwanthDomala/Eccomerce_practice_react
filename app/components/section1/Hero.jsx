import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-screen h-[70vh]'>
        <img className='w-full h-full object-top  ' src="https://i.pinimg.com/1200x/aa/d5/62/aad5624c929e2561b2645c12e3d97335.jpg" alt="" />
        <div className='absolute inset-0 heroText self-center flex flex-col  -ml-170 items-center' >
            <h1 className=' font-semibold text-xl ' >Discover ethnically</h1>
            <h1 className=' font-semibold text-xl  ' >cultivated and Fair-Trade gifts</h1>
            <button className='w-20 bg-amber-500  mt-4 rounded-md' >shop now</button>
        </div>
    </div>
  )
}

export default Hero