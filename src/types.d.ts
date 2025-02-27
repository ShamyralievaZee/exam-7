import Item from './Components/Item/Item.tsx';

export interface IItem {
    item:{
        id:number;
        name: string;
        price: number;
        image: string;
    };
    addToOrder:(item: {id:number; name: string; price: number}) => void;
}

export interface IList {
    items: Item[];
    addToOrder: (item: Item) => void;
}

export interface IOrderDetails {
    order: OrderItem[];
    removeItemFromOrder: (id: number) => void;
}

export interface IOrder {
    id: number;
    name: string;
    price: number;
    quantity: number;
}