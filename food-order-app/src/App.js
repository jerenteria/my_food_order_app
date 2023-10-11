import './App.css';
import Cart from './components/Cart';
import Food from './Food/Food'

function App() {
  return (
    <div className="App">
      <section>
      <h1 className="header">Welcome to DineHub!</h1>
      <Cart />
      </section>
      <section>
        <div className="about"> 
        <p>Order delicious food from local restaurants! </p>

        <p>These mouth watering platters will not dissapoint!</p>
        </div>
      </section>
      <section>
        <Food />
      </section>
    </div>
  );
}

export default App;
