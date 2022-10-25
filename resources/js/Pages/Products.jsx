import React, { useState, useEffect } from 'react'
import { Head } from '@inertiajs/inertia-react'
import ProductLayout from '../Layout/ProductLayout'
import ProductsPageHeader from '../Components/Product/ProductsPageHeader'
import ProductsGrid from '../Components/Product/ProductsGrid'
import { usePage } from '@inertiajs/inertia-react'
import Pagination from '../Components/Pagination'

const Products = () => {
  const { products } = usePage().props
  const [dataProducts, setDataProducts] = useState([])
  const [metaData, setMetaData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setDataProducts(products.data)
    setMetaData(products.meta.links)
    setLoading(false)
  }, [products])
  return (
    <>
      <Head title='Products'/>
      <ProductLayout>
        <ProductsPageHeader showSelect={dataProducts.length > 1 ? true : false}/>
        <ProductsGrid products={dataProducts} loading={loading}/>
        <footer className="flex justify-center p-3">
          <Pagination links={metaData} arrayOnly={['products']}/>
        </footer>
      </ProductLayout>
    </>
  )
}

export default Products 