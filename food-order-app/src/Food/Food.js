import Card from "../UI/Card";
import MealItem from './MealItem';

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
    const foodList = available_food.map(food => 
    <MealItem 
        key={food.id}
        id={food.id}
        name={food.name} 
        description={food.description} 
        price={food.price} 
    />);
    return (
        <section>
            <Card>
                <ul>{foodList}</ul>
            </Card>
        </section>
    )
};

export default Food;