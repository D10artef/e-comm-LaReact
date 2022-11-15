import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia' 
import { getPriceReduced, showPriceWithCurrency } from '../../UTULITIES/productFunction'
import AddToCartIconButton from '../HOC/AddToCartIconButton'

const ProductCard = ({product, className}) => {
  const { auth } = usePage().props
  const { name, id, price, offer } = product
  const showProduct = (id) => {
    Inertia.get(route('products.show', id), 
    )
  }
  // const defaultSrc = '../images/products/no_image_placeholder.png'
  const defaultSrc = '../images/products/image_not_available.png'
  let imageSrc;
  let imageClass = '';

  if(product.illustration){
    imageSrc = product.illustration
  }else{
    imageSrc = defaultSrc
    imageClass = 'opacity-50'
  }

  return (
    <div className='flex justify-center'>
      <div className={`rounded bg-white max-w-[268px] min-w-[200px] border-b border-r mb-1 overflow-hidden shadow shadow-indigo-100 flex flex-col ${className}`}>
        <div className="text-dark relative cursor-pointer overflow-hidden" onClick={() => showProduct(id)} >
          <div className='flex items-center justify-center'>
            <img src={imageSrc} alt="product_illustration" className={`object-scale-down w-full aspect-[5/4] ${imageClass}`} />
          </div>
          {
            offer && offer.active && 
            <div className='absolute flex items-center justify-center top-3 right-0 w-14 rounded-l-full h-6 bg-accent-secondary '>
              <span className='text-white text-xs font-semibold'>{`- ${offer.discount_percent}%`}</span>
            </div>
          }
        </div>
        <div className="px-3 py-1.5 text-my-neutral">
          <span className='text-sm font-medium'>{name}</span>
        </div>
        <hr className='w-3/4 mx-auto bg-accent-secondary border-accent-secondary'/>
        <div className="flex justify-between items-center px-3 pt-2 pb-3">
          {
            offer && offer.active  ? 
            <>
              <div className='flex flex-col'>
                <span className="text-[0.8rem] leading-[0.95rem] font-medium text-primary line-through">{showPriceWithCurrency(price)}</span>
                <span className="text-[0.85rem] font-medium text-accent-secondary">{showPriceWithCurrency(getPriceReduced(price, offer.discount_percent))}</span>
              </div>
            </> 
            :
              <div className='flex my-2'>
                <span className="text-sm font-medium text-primary">{showPriceWithCurrency(price)}</span>
              </div>
          }
          <div className="flex gap-x-2">
            <AddToCartIconButton auth={auth} product={product}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard