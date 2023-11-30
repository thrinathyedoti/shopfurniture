import React, { createContext, useState } from 'react'
import all_data from '../components/Assets/image_data/AllData';

export const ShopContext = createContext();

const getDefaultCart=()=>{
    let cart={};
    for(let index=0; index<all_data.length+1;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{

    const[cartItems, setCartItems]=useState(getDefaultCart());
    

   
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={all_data, cartItems,addToCart,removeFromCart};
     return(

         <ShopContext.Provider value={contextValue}>
            {props.children}
         </ShopContext.Provider>

     )
 }
 export default ShopContextProvider;
