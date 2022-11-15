import React from 'react'
import { SimpleButton } from '../FormAndButton/Button'
import WithAddToCart from './WithAddToCart'

const AddToCartSimpleButton = ({ disable, onAddToCart}) => {
  return (
    <SimpleButton className="rounded-sm text-gray-100 bg-accent-secondary hover:bg-accent-secondary/90 w-full" icon="shopping-cart" onClick={onAddToCart} disable={disable}>Add to cart</SimpleButton>
  )
}

export default WithAddToCart(AddToCartSimpleButton)