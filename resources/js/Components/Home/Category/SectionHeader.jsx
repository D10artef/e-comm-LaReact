import React from 'react'
import Icon from '../../Icon'
import { Inertia } from '@inertiajs/inertia'

const SectionHeader = ({title, description, titleClass, linkText = 'See more', reverse = false, id}) => {
  const classNames = `${titleClass} font-light tracking-wide uppercase text-xl after:content-[""] after:block after:w-1/2 after:border-b-2 after:mx-auto`
  const seeMore = () => {
    Inertia.get(route('products'), {category: id},)
  }
  return (
    <div className={`px-12 pb-2 mt-3 flex items-center gap-x-8 justify-between ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <h1 className={classNames}>
        {title}
      </h1>
      <div className="font-light max-w-3xl  hidden md:block text-center">
        <p className='text-primary/80'>{description} <span className="text-sm text-accent-secondary hover:underline font-medium cursor-pointer first-letter:uppercase" onClick={seeMore}>{linkText}<Icon name='chevron-right' className='w-4 h-4 inline-block'/>
          </span>
        </p>
      </div>
    </div>
  )
}

export default SectionHeader