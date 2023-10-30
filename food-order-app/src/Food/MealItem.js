import { useContext } from 'react';
import './mealItem.css';
import MealItemForm from './MealItemForm';
import CartContext from '../store/cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        }); 
    };

    return <ul>
        <div className="food-list">
            <h2>{props.name}</h2>
            <div className="food-description">{props.description}</div>
            <div className="food-description">${props.price}</div>
        </div>
        <div>
            <MealItemForm onAddItemToCart={addToCartHandler}/>
        </div>
    </ul>
};


export default MealItem;