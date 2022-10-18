import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia' 
import { getPriceReduced, showPriceWithCurrency } from '../../UTULITIES/productFunction'
import AddToCartIconButton from '../HOC/AddToCartIconButton'

const ProductCard = ({product, className}) => {
  const { auth } = usePage().props
  const { name, id, price, offer } = product
  const showProduct = (id) => {
    Inertia.get(route('products.show', id))
  }
  return (
    <>
      <div className={`border rounded-sm overflow-hidden shadow-sm flex flex-col ${className}`}>
        <div className="h-44 text-center bg-primary bg-opacity-25 text-white relative cursor-pointer overflow-hidde" onClick={() => showProduct(id)} >
          <div className="absolute bottom-0 inset-x-0 text-xs px-2 py-1.5 text-white bg-black bg-opacity-20 backdrop-blur-sm">
            <span>{name}</span>
          </div>
          {
            offer && offer.active && 
            <div className='absolute flex items-center justify-center top-3 right-0 w-14 rounded-l-lg h-5 bg-red-600 '>
              <span className='text-white text-xs font-semibold'>{`- ${offer.discount_percent}%`}</span>
            </div>
          }
        </div>
        <div className="flex justify-between items-center px-3 py-2">
          {
            offer && offer.active  ? 
            <>
              <div className='flex flex-col'>
                <span className="md:text-xs text-[0.65em] font-bold text-primary line-through">{showPriceWithCurrency(price)}</span>
                <span className="md:text-xs text-[0.65em] font-bold text-red-600">{showPriceWithCurrency(getPriceReduced(price, offer.discount_percent))}</span>
              </div>
            </> 
            :
              <div className='flex my-2'>
                <span className="md:text-xs text-[0.70em] font-bold text-primary">{showPriceWithCurrency(price)}</span>
              </div>
          }
          <div className="flex gap-x-2">
            <AddToCartIconButton auth={auth} product={product}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard