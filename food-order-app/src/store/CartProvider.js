import CartContext from './cart-context';

const cartProvider = props => {
    const addItemToCartHandler = item => {};

    const removeItemFromCartHandler = (id) => {};
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,  
    }

    return <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
};


export default cartProvider;