import React from 'react'
import { showPriceWithCurrency } from '../../UTULITIES/productFunction'
import Icon from '../Icon'
import { OPERATIONS } from '../../UTULITIES/const'


const CartItem = ({item, updateItemCart, removeFromCart}) => {
  const imageSrc = item.product_illustration ? item.product_illustration : '../images/products/image_not_available.png'
  return (
    <div className='px-1 min-w-[308px] sm:px-4 lg:px-8 border-b border-accent/20 shadow-sm bg-white group'>
      <div className='flex items-center gap-x-3 md:gap-x-5'>
        <img src={imageSrc} alt="product image" className='w-28 sm:w-32 object-scale-down aspect-square text-xs text-my-neutral'/>
        <div className='flex flex-col gap-y-1.5 text-sm'>
          <p className='text-secondary font-medium'>{item.product_name}</p>
          {
            item.product_price === item.product_active_price ? 
            <>
              <span className='text-my-neutral text-sm'>{showPriceWithCurrency(item.product_price)}</span>
            </>
            :
            <div className='flex flex-col'>
              <span className='text-my-neutral text-xs line-through'>{showPriceWithCurrency(item.product_price)}</span>
              <span className='text-accent-secondary text-sm'>{showPriceWithCurrency(item.product_active_price)}</span>
            </div>
          }
          
          <div className='flex flex-row mt-1 text-my-neutral items-center text-sm md:gap-x-6 gap-x-3 '>
            <span>
              <span className='inline sm:hidden'>Qty: </span>
              <span className='hidden sm:inline'>Quantity: </span>
              <span className='font-medium text-accent'>{` ${item.quantity}`}</span>
            </span>
            <div className='gap-x-3 md:gap-x-6 hidden group-hover:flex items-center'>
              <Icon name='minus-sm' className='w-5 h-5 cursor-pointer text-my-neutral/70 hover:text-my-neutral duration-500' onClick={() => updateItemCart(item.id, OPERATIONS.minus)}/>
              <Icon name='plus-sm' className='w-5 h-5 cursor-pointer text-my-neutral/70 hover:text-my-neutral duration-500' onClick={() => updateItemCart(item.id, OPERATIONS.add)}/>
            </div>
          </div>
        </div>
        <div className='ml-auto'>
          <span>
            <Icon name="x-circle" className='w-6 h-6 text-accent-secondary/60 group-hover:text-accent-secondary duration-500 cursor-pointer' onClick={() => removeFromCart(item.id)}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartItem