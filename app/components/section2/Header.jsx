import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 className='text-2xl '>TrendingProducts</h1> 
        <div className='select flex w-full '>
            <h1 id='phones' className=' text-center w-1/4 border-x border-amber-700 bg-amber-500 text-xl'>Phones</h1>
            <h1 id='laptop' className='text-center w-1/4 border-x border-amber-700 bg-amber-500 text-xl'>Laptops</h1>
            <h1 id="shirts" className='text-center w-1/4 border-x border-amber-700 bg-amber-500 text-xl'>Shirts</h1>
            <h1 id='Handbags' className='text-center w-1/4 border-x border-amber-700 bg-amber-500 text-xl'>Handbags</h1>
        </div>
    </div>
  )
}

export default Header