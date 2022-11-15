import React from 'react'

const NoItemFound = ({text = 'No item found'}) => {
  return (
    <div className='flex flex-col w-full justify-center gap-8 items-center p-12 text-sm'>
      <img src="../images/no_result_found.svg" alt="" className='object-scale-down aspect-square max-w-xs'/>
      <p className='max-w-xs text-my-neutral text-center font-light content-around'>{text}</p>
    </div>
  )
}

export default NoItemFound