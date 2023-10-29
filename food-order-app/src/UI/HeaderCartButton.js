import { useContext } from 'react';
import CartIcon from '../components/CartIcon';
import './HeaderCartButton.css';
import '../components/CartIcon.css'
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext); // get access to cart context managed by CartProvider App component

    // reduce in a method that allows to transform arr of data into single data(number)
    // if user adds 3 orders of the same thing you dont want an arr with the same 3 items you want a total of 1 items
    // 3 times not [sushi, sushi, sushi]
    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return (
        <button className="cart-icon" onClick={props.onClick}>
            <span>
                <CartIcon />
            </span>
            <span className="header-cart-text">
                Your Cart
            </span>
            <span className="cart-item-amount">{numberOfCartItems}</span>
        </button>
    );
};


export default HeaderCartButton;