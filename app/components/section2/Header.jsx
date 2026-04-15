import React from 'react'
import { useState } from 'react'
const Header = ({setApi}) => {
  const [active, setActive] = useState("")
  const changeApi = (ele) =>{
    let id = ele.target.getAttribute("id")
    setActive(id)
    setApi(`https://dummyjson.com/products/category/${id}`)
  }
  return (
     <div>
      <h1 className='text-2xl'>Trending Products</h1>

      <div className='flex w-full' onClick={changeApi}>
        {["beauty", "laptops", "mens-shirts", "furniture","womens-dresses"].map((item) => (
          <h1
            key={item}
            id={item}
            className={`text-center w-1/4 border border-gray-700/10 text-xl py-2 transition-transform hover:scale-110
              ${active === item ? "bg-amber-500" : "bg-gray-300"}`}
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  )
}

export default Header