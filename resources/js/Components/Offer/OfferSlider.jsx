import React from 'react'
import Slider from 'react-slick'
import OfferItem from './OfferItem'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { offerSlidersettings } from '../../UTULITIES/sliderSetting'

const OfferSlider = ({data}) => {
  
  const bg_color = [
    'bg-[#1D6882]',
    'bg-[#4F5470]',
    'bg-[#2CBA98]',
    'bg-[#00929B]',
  ]

  if(data && data.length > 0 ){
    return (
      <Slider {...offerSlidersettings}>
        { data.length > 0 && data.map((offer, index) => (
          <OfferItem key={offer.id} className={bg_color[index % 5]} offer={offer}></OfferItem>
        ))}
      </Slider>
    )
  }
  else return null
}

export default OfferSlider