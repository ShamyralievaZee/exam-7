import './App.css';
import AddItems from './Components/AddItems/AddItems.tsx';
import OrderDetails from './Components/OrderDetails/OrderDetails.tsx';
import hamburgerImage from './assets/hamburger.png';
import coffeeImage from './assets/coffee.png';
import cheeseburgerImage from './assets/cheeseburger.png';
import teaImage from './assets/tea.png';
import friesImage from './assets/fries.png';
import colaImage from './assets/cola.png';
import {useState} from 'react';
import {IOrder} from './types';

const items = [
    { id: 1, name: 'Hamburger', price: 80, image: hamburgerImage },
    { id: 2, name: 'Coffee', price: 70, image: coffeeImage },
    { id: 3, name: 'Cheeseburger', price: 90, image: cheeseburgerImage },
    { id: 4, name: 'Tea', price: 50, image: teaImage },
    { id: 5, name: 'Fries', price: 45, image: friesImage },
    { id: 6, name: 'Cola', price: 40, image: colaImage },
];

const App = () => {
    const [order, setOrder] = useState<IOrder[]>([]);

    const addToOrder = (item: { id: number; name: string; price: number }) => {
        setOrder(prevOrder => {
            const itemExist = prevOrder.find(orderItem => orderItem.id === item.id);
            if (itemExist) {
                return prevOrder.map(orderItem =>
                    orderItem.id === item.id
                        ? { ...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                );
            } else {
                return [...prevOrder, { ...item, quantity: 1 }];
            }
        });
    };

    const removeItemFromOrder = (id: number) => {
        setOrder(prevOrder => {
            const itemExist = prevOrder.find(orderItem => orderItem.id === id);
            if (itemExist && itemExist.quantity > 1) {
                return prevOrder.map(orderItem =>
                    orderItem.id === id
                        ? { ...orderItem, quantity: orderItem.quantity - 1 }
                        : orderItem
                );
            } else {
                return prevOrder.filter(orderItem => orderItem.id !== id);
            }
        });
    };
    return (
        <div className="container">
            <OrderDetails order={order} removeItemFromOrder={removeItemFromOrder} />
            <AddItems items={items} addToOrder={addToOrder} />
        </div>
    );
};

export default App;