import React, {  useContext } from 'react';
import './Cart.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul>
    {cartCtx.items.map((item) => (
      <li>{item.name}</li>
    ))};
  </ul>
  )

  return (
   <Modal onClose={props.onClose}>
     {cartItems}
     <div className="cart-total">
       <span>Total Amount</span>
       <span>: {totalAmount}</span>
     </div>
     <div className="actions">
       <button id="close-button" onClick={props.onClose}>Close</button>
       {hasItems && <button id="order-button">Order</button>}
     </div>
   </Modal>
  );
};

export default Cart;