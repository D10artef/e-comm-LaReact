import React from 'react'
import { getPriceReduced, showPriceWithCurrency } from '../../UTULITIES/productFunction'
import Icon from '../Icon'

const AdminProductCard = ({product, removeItem}) => {
  return (
    <div className='flex flex-col gap-1 text-sm p-2 border shadow-sm m-1 max-w-xs'>
      <header>
        <h1 className='font-medium'>{product.name}</h1>
      </header>
      {/* <span className='font-light text-secondary'>{product.category}</span>
      <div className='text-xs flex flex-col font-medium items-end'>
        <span className='line-through'>{showPriceWithCurrency(product.price)}</span>
        <span className='text-rose-500'>{showPriceWithCurrency(getPriceReduced(product.price, 20))}</span>
      </div> */}
      <footer className='pt-1 flex justify-between items-center'>
        <input type="checkbox" />
        <span className='text-rose-600'>
          <Icon name='x-close' className='w-4 h-4' onClick={()=>removeItem(product.id)}/>
        </span>
      </footer>
    </div>
  )
}

export default AdminProductCard