const available_food = [
    {
        id: 1,
        name: 'Burger',
        description: 'Best burger you ever had!',
        price: '5.99'
    },
    {
        id: 2,
        name: 'Pizza',
        description: 'Best pizza you ever had!',
        price: 9.99
    },
    {
        id: 3,
        name: 'Wings',
        description: 'Best wings you ever had!',
        price: 8.99
    }
]


const Food = () => {
const foodList = available_food.map(food => <li>{food.name}</li>);
    return (
        <ul>
            {foodList}
        </ul>
    )
};

export default Food;