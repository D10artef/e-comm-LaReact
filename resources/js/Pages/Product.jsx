import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import UserLayout from '../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'
import Icon from '../Components/Icon'
import ProductInfo from '../Components/Product/ProductInfo'

const Product = () => {
  const { product } = usePage().props
  const back = () => {
    window.history.back();
  }
  return (
    <>
      <Head title='Product detail'/>
      <UserLayout>
        <div className='flex flex-row'>
        <div className='p-4 w-full bg-neutral-100'>
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
      </UserLayout>
    </>
  )
}

export default Product