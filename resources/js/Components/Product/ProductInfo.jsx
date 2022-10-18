import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import AddToCartSimpleButton from '../HOC/AddToCartSimpleButton'
import { showPriceWithCurrency } from '../../UTULITIES/productFunction'

const ProductInfo = ({ product }) => {
  const { auth } = usePage().props
  const { name, price, description, avaible } = product
  const avaibleClassName = avaible ? 'text-green-500' : 'text-red-500'
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4">
        <div className='max-w-xs max-h-96 h-80  bg-gray-200'>Photo</div>
        <div>
          <h1>{name}</h1>
          <p 
          className={`text-xs mb-1 font-medium ${avaibleClassName}`}>
            {avaible ? 'Avaible' : 'Not avaible'}
          </p>
          <span className='text-neutral-600 text-sm font-semibold'>{showPriceWithCurrency(price)}</span>
          <p className='my-4 text-sm text-justify'>{description}</p>
          <div className="flex items-center justify-center">
            <div className='max-w-xs'>
              <AddToCartSimpleButton auth={auth} product={product}/>
            </div>
          </div>
        </div>
        {/* <div className='pl-4'>

        </div> */}
      </div>
    </>
  )
}

export default ProductInfo