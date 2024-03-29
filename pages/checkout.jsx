import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cart from './cart';
import { clearCart } from '../redux/cartSlice';
import { useRouter } from 'next/router';

const ThankYouPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [orderID, setorderID] = useState('')
  console.log(cartItems)
  function generateOrderId() {
    // Generate a random order ID
    const orderId = Math.floor(100000 + Math.random() * 900000);
    return orderId;
  }
  useEffect(() => {
    setorderID(generateOrderId())
  }, [])
  const dispatch = useDispatch();
  const router = useRouter()
  const handleClearCart = () => {
    dispatch(clearCart());
    router.push('/')
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-lg mb-8">Your order with ID #{orderID} has been successfully placed.</p>
      <p className="text-lg mb-4">Order Details:</p>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center gap-5 justify-between mb-2">
          <div>{item.title} </div>
          <div>Quantity: {item.cartQuantity} x {item.price}</div>
        </div>
      ))}
      <button className='btn btn-outline' onClick={handleClearCart}>Go back Home</button>
    </div>
  );
};

export default ThankYouPage;
