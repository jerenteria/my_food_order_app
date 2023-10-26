import './App.css';
import React, { useState } from 'react';
import Cart from './components/Cart';
import Food from './Food/Food'
import CartIconButton from './UI/HeaderCartButton';
import Header from './UI/Header';
import CartProvider from './store/CartProvider';

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
      <CartProvider>
        <section>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
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
      </CartProvider>
    </div>
  );
}

export default App;
