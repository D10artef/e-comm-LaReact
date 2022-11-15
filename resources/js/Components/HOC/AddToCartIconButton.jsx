import React from 'react'
import WithAddToCart from './WithAddToCart'
import Icon from '../Icon'

const AddToCartIconButton = ({disable, onAddToCart}) => {
  return (
    <button disabled={disable} className={`duration-300 cursor-pointer text-neutral-700 hover:text-accent-secondary disabled:text-neutral-200`}>
      <Icon className='h-5 w-5 md:h-6 md:w-6' name="shopping-cart" onClick={onAddToCart}></Icon>
    </button>
  )
}

export default WithAddToCart(AddToCartIconButton);