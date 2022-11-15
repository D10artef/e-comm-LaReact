import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import AddToCartSimpleButton from '../HOC/AddToCartSimpleButton'
import { showPriceWithCurrency } from '../../UTULITIES/productFunction'

const ProductInfo = ({ product }) => {
  const { auth } = usePage().props
  const { name, price, description, avaible } = product
  const avaibleClassName = avaible ? 'text-green-500' : 'text-red-500'
  const defaultSrc = '../images/products/image_not_available.png'

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
        <div className='max-w-xs h-64 bg-light shadow justify-self-center'>
          <img src={product.illustration? product.illustration : defaultSrc} alt="product_illustration"
            className='h-full object-scale-down'
          />
        </div>
        <div>
          <h1 className='font-medium'>{name}</h1>
          <p 
          className={`text-sm font-medium my-1 ${avaibleClassName}`}>
            {avaible ? 'Avaible' : 'Not avaible'}
          </p>
          <span className='text-accent-secondary text-sm font-semibold'>{showPriceWithCurrency(price)}</span>
          <p className='my-4 text-sm text-justify'>{description}</p>
          {
            avaible && 
            <div className="flex items-center justify-center">
              <div className='max-w-xs'>
                <AddToCartSimpleButton auth={auth} product={product} />
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default ProductInfo