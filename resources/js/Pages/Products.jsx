import React, { useState, useEffect } from 'react'
import { Head } from '@inertiajs/inertia-react'
import ProductLayout from '../Layout/ProductLayout'
import ProductsPageHeader from '../Components/Product/ProductsPageHeader'
import ProductsGrid from '../Components/Product/ProductsGrid'
import { usePage } from '@inertiajs/inertia-react'

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
        <ProductsPageHeader/>
        <ProductsGrid products={dataProducts} loading={loading}/> 
      </ProductLayout>
    </>
  )
}

export default Products 