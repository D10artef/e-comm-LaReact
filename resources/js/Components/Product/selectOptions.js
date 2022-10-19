import { ORDERS } from '../../UTULITIES/const'
export const options = [
  {
    id: 1,
    text: "Name  a -> z",
    name: "name",
    order: ORDERS.asc,
  },
  {
    id: 2,
    text: "Name  z -> a",
    name: "name",
    order: ORDERS.desc,
  },
  {
    id: 3,
    text: "Lowest price",
    name: "price",
    order: ORDERS.asc,
  },
  {
    id: 4,
    text: "Highest price",
    name: "price",
    order: ORDERS.desc,
  },
];
