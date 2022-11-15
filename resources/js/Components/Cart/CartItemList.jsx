import React from 'react'
import CartItem from './CartItem'

const CartItemList = ({items, ...props}) => {
  return (
    <>
      {
        items.map(item => (<CartItem key={item.id} item={item} {...props} />))
      }
    </>
  )
}

export default CartItemList