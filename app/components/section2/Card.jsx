import React from 'react'

const Card = (props) => {
  return (
    <div className=' shadow-2xl border border-black/20 relative w-60 h-60  bg-white text-xl text-black rounded-xl flex flex-col gap-2 p-3'>
      <h1 className=''>{props.title}</h1>
      <img className=' w-30 h-30' src={props.img} alt="" />
      <h2 className=' ' >Price : {props.price}</h2>
    </div >
  )
}

export default Card