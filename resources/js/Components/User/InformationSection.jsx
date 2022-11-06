import React from 'react'
import Icon from '../Icon'

const InformationSection = ({title, editable = false, children}) => {
  return (
    <div>
      <div className='flex justify-between items-center group'>
        <h1 className='text-neutral-600 uppercase'>{title}</h1>
        {
          editable && 
          <Icon name='pencil-alt' className='text-neutral-600 w-5 h-5 hidden group-hover:inline-flex cursor-pointer'/>
        }  
      </div>
      <hr className='my-1 border-t border-neutral-600' />
      {children}
    </div>
  )
}

export default InformationSection