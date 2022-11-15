import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import { SimpleButton } from '../../FormAndButton/Button'
import { defaultOfferIllustrationSrc as srcImages } from './illustrationSrc'


const OfferItem = ({offer, index, ...props}) => {
  const classNames = `w-full min-h-[20rem] sm:min-h-[24rem] flex items-center relative`
  const goToTheOffer = () => {
    Inertia.get(route('products'), { offer: offer.id })
  }

  return (
    <>
      <main className={classNames}>
        <div className="mx-auto p-6 md:p-8 flex items-center gap-x-6 max-w-4xl w-full z-20">
          <div className='gap-y-4 md:gap-y-8 flex flex-col w-full sm:w-2/3'>
            <h1 className="text-primary text-2xl xs:text-3xl md:text-4xl lg:text-5xl after:mt-2 tracking-wide after:content-[''] after:w-1/4 after:border after:border-dark after:bg-dark after:block first-letter:uppercase">{ offer.name }</h1>
            <p className="md:text-base font-light first-letter:uppercase text-justify">{ offer.description }</p>
            <SimpleButton className="rounded text-light bg-accent-secondary hover:bg-accent-secondary/80 duration-300 w-fit" icon="chevron-right" onClick={goToTheOffer} {...props}>See the offer</SimpleButton>
          </div>
          <div className='hidden sm:w-1/3 sm:flex items-center justify-center'>
            <img src={offer.illustration? offer.illustration: srcImages[index%srcImages.length]} alt="image_slide" />
          </div>
        </div>
      </main>
    </>
  )
}

export default OfferItem