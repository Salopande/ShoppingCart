import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice';
import "../output.css";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch =useDispatch()
    const handleClearCart=()=>{
      dispatch(clearCart())
    }
  return (
    <div className='text-center m-10 p-10'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button onClick={handleClearCart} className='p-2 m-2 bg-black text-white rounded-lg'>Clear Items</button>
        {cartItems.length>0 ? <ItemList items={cartItems}/>: <h1>Please Add Items to The Card </h1>}
        
     </div>
    </div>
  )
}

export default Cart
