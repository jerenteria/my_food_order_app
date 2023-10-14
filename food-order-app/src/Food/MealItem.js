import './mealItem.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    return <ul>
        <div className="food-list">
            <h2>{props.name}</h2>
            <div className="food-description">{props.description}</div>
            <div className="food-description">${props.price}</div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </ul>
};


export default MealItem;