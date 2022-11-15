import React from 'react'
import Icon from '../Icon'

const HomeSection = ({title, icon, color, children}) => {
  const borderColor = color ? 'border-' + color : 'border-accent-secondary'
  const iconColor = color ? 'text-' + color : 'text-accent-secondary'
  return (
    <section className='my-8'>
      <div className="py-4 px-12 flex justify-center items-center gap-x-4 font-bold">
        <h1 className={`md:text-2xl text-xl pb-2 text-center border-b-2 text-primary  first-letter:uppercase ${borderColor}`}>{title}</h1>
        <Icon name={icon} className={`w-6 h-6 md:w-8 md:h-8 ${iconColor}`}/>
      </div>
      <div className='px-8'>
        {children}
      </div>
    </section>
  )
}

export default HomeSection