import './App.css';
import React, { useState } from 'react';
import Cart from './components/Cart';
import Food from './Food/Food'
import CartIconButton from './components/CartIconButton';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <section>
      {cartIsShown && <Cart />}
      <h1 className="header">Welcome to DineHub!</h1>
      <CartIconButton onShowCart={showCartHandler} />
      </section>
      <section>
        <div className="about"> 
        <p>Order delicious food from local restaurants! </p>

        <p>These mouth watering platters will not dissapoint!</p>
        </div>
      </section>
      <section>
        <Food />
      </section>
    </div>
  );
}

export default App;
