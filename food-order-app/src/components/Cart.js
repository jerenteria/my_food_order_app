import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const cartItems = <ul>{[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}</ul>;
  return (
   <div className="cart">
     {cartItems}
     <div className="cart-total">
       <span>Total Amount</span>
       <span>35.62</span>
     </div>
     <div className="actions">
       <button>Close</button>
       <button>Order</button>
     </div>
   </div>
  );
};

export default Cart;