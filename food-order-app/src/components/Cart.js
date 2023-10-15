import React from 'react';
import './Cart.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = <ul>{[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}</ul>;
  return (
   <Modal>
     {cartItems}
     <div className="cart-total">
       <span>Total Amount</span>
       <span>: $35.62</span>
     </div>
     <div className="actions">
       <button id="close-button">Close</button>
       <button id="order-button">Order</button>
     </div>
   </Modal>
  );
};

export default Cart;