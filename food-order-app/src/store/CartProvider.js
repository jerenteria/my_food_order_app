import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

// outside of main function bc it does not need anything from it(no data from function)
const cartReducer = (state, action) => {
    if(action.type === 'ADD_CART_ITEM'){
        // items in car will be items in the current state in reducer
        // use concat bc we need a new arr obj instead of editing original state(original arr of items) 
        const updatedItems = state.items.concat(action.item); 
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

// manage cartcontext data and provide that data to all components that want access to it
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    // takes in the item that needs to be added into the cart
    const addItemToCartHandler = (item) => {
        // to add item you need an identifier in this case type: but can be named to whatever you want and have it be a string
        // and the second property is whatever object you want to forward/take in to that function to reducer
        dispatchCartAction({type: 'ADD_CART_ITEM', item: item}); // obj that allows you to identify an action inside reducer function
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE_CART_ITEM', id: id});
    };

    // managing items within the state
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,  
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};


export default CartProvider;