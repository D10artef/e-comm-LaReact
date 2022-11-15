import React from 'react'
import Slider from 'react-slick'
import { offerSlidersettings } from '../../../UTULITIES/sliderSetting'
import OfferItem from './OfferItem'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const OfferSlider = ({data}) => {

  if(data && data.length > 0 ){
    return (
      <>
        <Slider {...offerSlidersettings}>
        { data.length > 0 && data.map((offer, index) => (
          <OfferItem key={offer.id} index={index} offer={offer}></OfferItem>
        ))}
        </Slider>
      </>
    )
  }
  else return null
}

const OfferSection = ({data}) => {
  return (
    <>
      {
        data && 
        <div className='bg-white pt-4 pb-8 shadow'>
          <section className='w-full md:w-4/5 mx-auto'>
            <OfferSlider data={data}/>
          </section>
        </div>
      }
    </>
  )
}

export default OfferSection