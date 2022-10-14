import React from 'react'
import SectionHeader from './SectionHeader'
import ProductsSlider from '../Product/ProductsSlider'

const CategorySection = ({title, description, reverse = false, id, ...props}) => {
  return (
    <>
      <SectionHeader title={title} description={description} reverse={reverse} id={id} titleClass="text-secondary after:border-accent-secondary"/>
      <div className="w-full my-8 px-8 pb-7 overflow-x-hidden border-b">
        <ProductsSlider {...props}/>
      </div>
    </>
  )
}

export default CategorySection