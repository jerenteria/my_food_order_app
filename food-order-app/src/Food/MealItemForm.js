import { useRef, useState } from 'react';
import './MealItemForm.css';
import Input from '../UI/Input';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(false);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        // converts string number to int bc when user inputs it will automatically become a string
        const enteredAmountNumber = +enteredAmount; 

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return; // do not continue with exection of this function
        }
        props.onAddItemToCart(enteredAmountNumber);
    };

    return (
        <form className="meal-item-form" onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    );
};

export default MealItemForm;