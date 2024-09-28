import React from 'react';
import {IItem} from '../../types';

const Item: React.FC<IItem> = ({ item, addToOrder }) => {
    return (
        <div className="item" onClick={() => addToOrder(item)}>
            <img src={item.image} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>Price:{item.price} som</p>
        </div>
    );
};

export default Item;