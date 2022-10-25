import React, {useState} from 'react'
import classNames from 'classnames'
import { Inertia } from '@inertiajs/inertia'


export const OfferTableItem = ({offer}) => {
  const active = offer.active
  const activeClass = classNames('text-sm font-light text-center',
    {'text-teal-600': active},
    {'text-rose-600': !active}
  )
  
  const viewOffer = () => {
    Inertia.get(route('admin.offer.show', offer.id))
  }

  return (
    <tr className="hover:bg-gray-100 focus-within:bg-gray-100 text-sm"
      >
      <td className="border-t px-4 py-2 font-medium first-letter:uppercase tracking-tight text-primary whitespace-nowrap ">
        <span className='cursor-pointer ' onClick={viewOffer}>{offer.name}
        </span>
      </td>
      <td className="border-t px-4 py-2 max-w-xs min-w-[250px] text-gray-500 ">
        <div className="text-justify line-clamp-2 w-full">
          {offer.description}
        </div>
      </td>
      <td className="border-t px-4 py-2">
        <div className={activeClass}>
          {active ? 'Active' : 'Not active'}
        </div>
      </td>
      <td className="border-t px-4 py-2">
        <div className='text-center font-bold text-xs text-gray-700'>
          {offer.discount_percent}%
        </div>
      </td>
      <td className='border-t px-4 py-2'>
        <div className="flex items-center justify-center gap-x-2 gap-y-1 text-xs font-medium">
          <span className='underline text-teal-500 cursor-default'>Toggle</span>
          <span className='underline text-rose-600 cursor-default'>Delete</span>
        </div>
      </td>
    </tr>
  )
}


export const CategoryTableItem = ({category}) => {

  const viewCategory = () => {
    Inertia.get(route('admin.category.show', category.id))
  }

  return (
    <tr className="hover:bg-gray-100 focus-within:bg-gray-100 text-sm"
      >
      <td className="border-t px-4 py-2 font-medium text-primary whitespace-nowrap tracking-tight first-letter:uppercase">
        <span className='cursor-pointer' onClick={viewCategory}>{category.name}
        </span>
      </td>
      <td className="border-t px-4 py-2 max-w-xs min-w-[250px] text-gray-500 ">
        <div className="text-justify line-clamp-2 w-full">
          {category.description}
        </div>
      </td>
      <td className='border-t px-4 py-2'>
        <div className="flex items-center justify-center gap-x-2 gap-y-1 text-xs font-medium">
          <span className='underlin text-teal-500 cursor-default'>Toggle</span>
          <span className='underline text-rose-600 cursor-default'>Delete</span>
        </div>
      </td>
    </tr>
  )
}