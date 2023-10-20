import CartIcon from './CartIcon';
import './CartIconButton.css';

const cartIconButton = (props) => {
    return (
        <button className="cart-button">
            <CartIcon onClick={props.onShowCart} />
        </button>
    );
};


export default cartIconButton;