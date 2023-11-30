import React, { useContext } from 'react'
import"./ProductDisplay.css"
import { ShopContext } from '../../context/ShopContext';

export const ProductDisplay = (props) => {
    const{product}=props;
    const{addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-right">
        <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
        </div>
        <div className='productdisplay-img'>
            <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                <s>MRP:{product.old_price}</s>
            </div>
            <div className="productdisplay-right-price-new">
                Sale Price:{product.new_price}
            </div>
            <div className='productdisplay-right-description'>
                description about the product,description about the product,description about the product
                description about the product,description about the productmdescription about the product
            </div>

        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}
