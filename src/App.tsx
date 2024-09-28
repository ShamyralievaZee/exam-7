import './App.css';
import hamburgerImage from './assets/hamburger.png';
import coffeeImage from './assets/coffee.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import teaImage from './assets/tea.png';
import friesImage from './assets/fries.png';
import colaImage from './assets/cola.png';

const items = [
    { id: 1, name: 'Hamburger', price: 80, image: hamburgerImage },
    { id: 2, name: 'Coffee', price: 70, image: coffeeImage },
    { id: 3, name: 'Cheeseburger', price: 90, image: cheeseburgerImage },
    { id: 4, name: 'Tea', price: 50, image: teaImage },
    { id: 5, name: 'Fries', price: 45, image: friesImage },
    { id: 6, name: 'Cola', price: 40, image: colaImage },
];

const App = () => {
    return (
        <div className="app-container">
        </div>
    );
};

export default App;