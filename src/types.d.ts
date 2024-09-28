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