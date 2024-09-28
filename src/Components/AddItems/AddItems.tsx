import Item from '../Item/Item.tsx';
import React from 'react';
import {IList} from '../../types';

const AddItems: React.FC<IList> = ({items, addToOrder}) => {
    return (
        <div className="item-list">
            <h2>Add Items</h2>
            <div className="items">
                {items.map(item=>(
                    <Item key={item.id} item={item} addToOrder = {addToOrder} />
                ))}
            </div>
        </div>
    );
};

export default AddItems;