import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Head } from '@inertiajs/inertia-react'
import Icon from '../Components/Icon'
import ProductInfo from '../Components/Product/ProductInfo'
import ProductLayout from '../Layout/ProductLayout'

const Product = () => {
  const { product } = usePage().props
  const back = () => {
    window.history.back();
  }
  return (
    <>
      <Head title='Product detail'/>
      <ProductLayout>
        <div className='flex flex-row'>
          <div>
            <div className='mb-4'>
              <button className='flex gap-1 text-sm justify-start items-center font-medium w-fit cursor-pointer' onClick={back}>
                <Icon name='chevron-left'/>
                Back
              </button>
            </div>
            <div className='px-4 md:px-8 lg:px-12'>
              <ProductInfo product={product.data}/>
            </div>
          </div>
        </div>
      </ProductLayout>
    </>
  )
}

export default Product