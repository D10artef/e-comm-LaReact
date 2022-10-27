import {useState, useEffect} from "react";
import { usePage } from "@inertiajs/inertia-react";
import { ORDERS } from "../../UTULITIES/const";
import { Inertia } from "@inertiajs/inertia";

export const useOrderData = (arrayOfKey, ojectToOrder) => {
  const [urlQuery, seturlQuery] = useState({
      orderby: "",
      order: "",
  });

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url = usePage().url;

  useEffect(() => {
    let orderby = urlParams.get("orderby");
    orderby = arrayOfKey.includes(orderby) ? orderby : "name";
    let order = urlParams.get("order");
    order = [ORDERS.asc, ORDERS.desc].includes(order) ? order : ORDERS.asc;
    seturlQuery({
        orderby,
        order,
    });
  }, []);


  const handleOrderData = (key) => {
    let data = urlQuery;
    if (urlQuery.orderby === key) {
        const order =
            urlQuery.order === ORDERS.asc ? ORDERS.desc : ORDERS.asc;
        data = { ...data, order };
    } else {
        data = {
            orderby: key,
            order: ORDERS.asc,
        };
    }
    Inertia.get(url, data, {
        only: [ojectToOrder],
        preserveScroll: true,
    });
  };
  
  

  return [handleOrderData];
}