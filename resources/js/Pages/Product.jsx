import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Head } from '@inertiajs/inertia-react'
import ProductInfo from '../Components/Product/ProductInfo'
import ProductLayout from '../Layout/ProductLayout'
import { ButtonBack } from '../Components/FormAndButton/Button'
import RelatedProductCard from '../Components/Product/RelatedProductCard'

const Product = () => {
  const { product } = usePage().props
  const products = [
    {
      id: 1,
      name: 'Product one',
      price: 12345,
      illustration: '../storage/products/digital_08.jpg'
    },
    {
      id: 2,
      name: 'Product two',
      price: 399999,
      illustration: '../storage/products/digital_13.jpg'
    },
    {
      id: 3,
      name: 'Product three',
      price: 98934,
      illustration: '../storage/products/digital_17.jpg'
    },
    {
      id:4,
      name: 'Product four',
      price: 90000,
      illustration: '../storage/products/digital_05.jpg'
    },
    {
      id: 5,
      name: 'Product two',
      price: 540320,
      illustration: '../storage/products/digital_14.jpg'
    },
  ]
  return (
    <>
      <Head title='Product detail'/>
      <ProductLayout>
        <div className='px-4 py-3'>
          <div className='mb-4 mx-4'>
            <ButtonBack />
          </div>
          <div className='px-4 md:px-8 lg:px-12'>
            <ProductInfo product={product.data}/>
          </div>
          <div className='mt-6'>
            <h1 className='text-primary font-medium border-b my-3'>Related products</h1>
            <main className='p-3 flex gap-4 justify-around flex-wrap '>
              {
                products.length > 0 && products.map(product => (<RelatedProductCard key={product.id} product={product} />))
              }
            </main>
          </div>
        </div>
      </ProductLayout>
    </>
  )
}

export default Product