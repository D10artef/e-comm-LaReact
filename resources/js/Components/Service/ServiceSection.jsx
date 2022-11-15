import React from 'react'
import { defaultServiceIllustrationSrc as imgSrcs } from '../Home/Offer/illustrationSrc'

const ServiceSection = ({service, index , reverse = false}) => {
  const src = service.illustration ? service.illustration : imgSrcs[index % imgSrcs.length];
  console.log(src);
  return (
    <div className={`flex flex-row gap-14 max-w-4xl mx-auto py-2 border-b border-accent/10  px-8 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className={`flex flex-1 flex-col items-center justify-center gap-5`}>
          <h1 className='my-2 py-1 text-xl text-primary text-center first-letter:uppercase'>{service.title}</h1>
          <p className='text-my-neutral text-sm max-w-lg text-center first-letter:uppercase'>
            {service.description}
          </p>
      </div>
      <div className='h-64 justify-center items-center hidden sm:flex'>
        <img src={src} className='h-full' alt="Service Illustration"/>
      </div>
    </div>
    
  )
}

export default ServiceSection