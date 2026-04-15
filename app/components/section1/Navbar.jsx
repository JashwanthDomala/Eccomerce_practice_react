import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between px-10 '>
        <div className='left flex gap-3 items-center'>
            <h1 className='text-2xl font-semibold'>FastShop</h1>
            <div className='list flex gap-2 items-center text-sm'>
                <h2>Home</h2>
                <h2>Featuers</h2>
                <h2>Electronics</h2>
                <h2>About us</h2>
                <h2>blog</h2>
            </div>
        </div>
        <div className='right flex gap-2'>
            <div className='mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
           <div className='list flex gap-2 items-center text-sm'>
                <h2>MyAccount</h2>
                <h2>Daily Deals</h2>
                <h2>Wishlist</h2>
                <h2>Register/Sign in</h2>
            </div>

        </div>
    </div>
  )
}

export default Navbar