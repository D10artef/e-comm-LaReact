import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Head } from '@inertiajs/inertia-react'
import ProductInfo from '../Components/Product/ProductInfo'
import ProductLayout from '../Layout/ProductLayout'
import { ButtonBack } from '../Components/FormAndButton/Button'

const Product = () => {
  const { product } = usePage().props
  
  return (
    <>
      <Head title='Product detail'/>
      <ProductLayout>
        <div className='flex flex-row'>
          <div>
            <div className='mb-4'>
              <ButtonBack />
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