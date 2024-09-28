import React from 'react';
import {IOrderDetails} from '../../types';


const OrderDetails: React.FC<IOrderDetails> = ({ order, removeItemFromOrder }) => {
    const totalPrice = order.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="order-details">
            <h2>Order Details</h2>
            {order.length === 0 ? (
                <p>Order is empty! Please add some items!</p>
            ) : (
                <ul>
                    {order.map(item => (
                        <li key={item.id}>
                            {item.name}(x{item.quantity}) - {item.price * item.quantity} soms
                            <button onClick={() => removeItemFromOrder(item.id)}>X</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: {totalPrice} soms</h3>
        </div>
    );
};

export default OrderDetails;
