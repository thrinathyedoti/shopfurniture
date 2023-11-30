import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link> 
        <p>{props.name}</p>
        <div className='item-price-new'>
        Sale Price: {props.new_price}
        </div>
        <div className='item-price-old'>
        MRP: {props.old_price}
        </div>
    </div>
  )
}
