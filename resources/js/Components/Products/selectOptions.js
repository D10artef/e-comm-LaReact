import { ORDERS } from '../../UTULITIES/const'
export const ORDEROPTIONS = [
    {
        id: 1,
        text: "Newest item",
        name: "created_at",
        order: ORDERS.desc,
    },
    {
        id: 2,
        text: "Oldest item",
        name: "created_at",
        order: ORDERS.asc,
    },
    {
        id: 3,
        text: "Name  a -> z",
        name: "name",
        order: ORDERS.asc,
    },
    {
        id: 4,
        text: "Name  z -> a",
        name: "name",
        order: ORDERS.desc,
    },
    {
        id: 5,
        text: "Lowest price",
        name: "price",
        order: ORDERS.asc,
    },
    {
        id: 6,
        text: "Highest price",
        name: "price",
        order: ORDERS.desc,
    },
];
