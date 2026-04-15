import React from 'react'
import Card from './Card.jsx'
import { useState,useEffect } from 'react'
const Items = ({api , setApi}) => {

  const [items, setItems] = useState([])

  
  useEffect(() => {
    const fetchData = async ()=>{
      let response = await fetch(api)
      let data = await response.json()
      setItems(data.products)
    }
    fetchData()
  }, [api])
  
  return (
    <div className='flex flex-wrap gap-2 mt-4 p-2'>
        {
          items.map((product,key)=>{
            return <Card  key={product.id} title={product.title} img={product.images[0]}  price={product.price}/>
    })
        }
    </div>
    
  )
}

export default Items