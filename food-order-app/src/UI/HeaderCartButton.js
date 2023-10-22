import CartIcon from '../components/CartIcon';
import './HeaderCartButton.css';
import '../components/CartIcon.css'

const HeaderCartButton = (props) => {
    return (
        <button className="cart-icon">
            <span>
            <CartIcon/>
            </span>
            <span className="header-cart-text">
                Your Cart
            </span>
        </button>
    );
};


export default HeaderCartButton;