import React from 'react'
import Card from './Card.jsx'
const Items = (props) => {
  return (
    props.items.map((ele,key)=>{
        <Card/>
    })
  )
}

export default Items