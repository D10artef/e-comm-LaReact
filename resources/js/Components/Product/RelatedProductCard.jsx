import React from 'react'
import { showPriceWithCurrency } from '../../UTULITIES/productFunction'

const RelatedProductCard = ({product}) => {
  const srcProductImage = product.illustration ? product.illustration : '../images/products/image_not_available.png'
  return (
    <div className='px-3 pt-2 pb-3 w-44 border-b border-r overflow-hidden bg-white hover:shadow-lg duration-500'>
      <div className='w-full h-40'>
        <img src={srcProductImage} alt="image_product" className='h-full object-scale-down' />
      </div>
      <div className='text-sm'>
        <span className='text-secondary text-[0.825rem] font-medium'>{product.name}</span>
        <p className='text-accent-secondary'>{showPriceWithCurrency(product.price)}</p>
      </div>
    </div>
  )
}

export default RelatedProductCard