import React from 'react'
import { SimpleButton } from '../FormAndButton/Button'
import { Inertia } from '@inertiajs/inertia'


const OfferItem = ({className = 'bg-cyan-500', offer, ...props}) => {
  const classNames = `w-full h-96 flex items-center ${className}`
  const goToTheOffer = () => {
    Inertia.get(route('products'), { offer: offer.id })
  }
  return (
    <div className={classNames}>
      <div className="mx-auto p-3 md:p-4  max-w-4xl w-full gap-y-3 lg:gap-y-4 flex flex-col">
        <h1 className="text-neutral-50 text-xl md:text-2xl lg:text-3xl after:mt-2 tracking-wide after:content-[''] after:w-1/4 after:border after:border-gray-50 after:block first-letter:uppercase">{ offer.name }</h1>
        <p className="text-neutral-200 text-sm md:text-base font-light my-2 first-letter:uppercase">{ offer.description }</p>
        <SimpleButton className="rounded-sm text-gray-100 bg-accent hover:bg-orange-500 duration-300 w-fit" icon="chevron-right" onClick={goToTheOffer} {...props}>See the offer</SimpleButton>
      </div>
    </div>
  )
}

export default OfferItem