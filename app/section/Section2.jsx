import React from 'react'
import Header from '../components/section2/Header'
import Items from '../components/section2/Items'
import { useState , useEffect } from 'react'
const Section2 = () => {
  const [api, setApi] = useState("https://dummyjson.com/products?limit=20")
  return (
    <div>
        <Header setApi ={setApi} />
        <Items api={api} setApi ={setApi} />
    </div>
  )
}

export default Section2