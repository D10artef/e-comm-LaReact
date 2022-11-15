import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../../Product/ProductCard'
import { productSliderSettings } from '../../../UTULITIES/sliderSetting';

const ProductsSlider = ({data}) => {
  
  return (
    <Slider {...productSliderSettings}>
      { data.length > 0 && data.map((product) => (
        <ProductCard key={product.id} product={product} className='mx-3 lg:mx-4 xl:mx-6'/>
      ))}
    </Slider>
  )
}

export default ProductsSlider