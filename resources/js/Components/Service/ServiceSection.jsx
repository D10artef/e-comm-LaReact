import React from 'react'

const ServiceSection = ({service, reverse = false}) => {
  return (
    <div className={`flex flex-row gap-8 mb-8 py-2 border-b-2 border-accent shadow sm:shadow-none sm:border-0 px-8 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className={`flex flex-1 flex-col items-center justify-center gap-5`}>
          <h1 className='my-2 py-1 text-xl text-secondary text-center first-letter:uppercase'>{service.title}</h1>
          <p className='text-neutral-600 text-sm text-center first-letter:uppercase'>
            {service.description}
          </p>
      </div>
      <div className='h-64 border-y border-accent flex-1 bg-neutral-100 rounded-sm hidden sm:block'>
      </div>
    </div>
    
  )
}

export default ServiceSection