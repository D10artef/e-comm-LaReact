import React, {useState} from 'react'
import classNames from 'classnames'
import { Inertia } from '@inertiajs/inertia'
import DeleteIconWithConfirmation from '../HOC/Admin/DeleteIconWithConfirmation'
import { getDateFormat } from '../../UTULITIES/dateFunction'


export const OfferTableItem = ({offer}) => {
  const active = offer.active
  const activeClass = classNames('font-light text-center',
    {'text-teal-600': active},
    {'text-rose-600': !active}
  )
  
  const viewOffer = () => {
    Inertia.get(route('admin.offer.show', offer.id))
  }

  return (
    <tr className="hover:bg-gray-100 focus-within:bg-gray-100 text-nxs 2xl:text-sm"
      >
      <td className="border-t px-4 py-2 text-sm font-medium first-letter:uppercase tracking-tight text-primary whitespace-nowrap ">
        <span className='cursor-pointer ' onClick={viewOffer}>{offer.name}
        </span>
      </td>
      <td className="border-t px-4 py-2 w-64 md:w-80 text-gray-500 ">
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
      <td className="border-t px-4 py-2">
        <div className='text-center text-xs text-neutral-500 font-medium'>
          {getDateFormat(offer.created_at)}
        </div>
      </td>
      <td className='border-t px-4 py-2 w-fit'>
        <div className="flex items-center justify-center gap-x-2 gap-y-1 text-xs font-medium">
          {/* <span className='underline text-teal-500 cursor-default'>Toggle</span> */}
          <span className='text-rose-600 hover:text-rose-500'>
            <DeleteIconWithConfirmation url={route('admin.offer.delete', offer.id)} message='Are you sure you want to delete this offer?'/> 
          </span>
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
    <tr className="hover:bg-gray-100 focus-within:bg-gray-100 text-nxs 2xl:text-sm"
      >
      <td className="border-t px-4 py-2 font-medium text-primary whitespace-nowrap tracking-tight first-letter:uppercase">
        <span className='cursor-pointer' onClick={viewCategory}>{category.name}
        </span>
      </td>
      <td className="border-t px-4 py-2 w-64 md:w-80 text-gray-500 ">
        <div className="text-justify line-clamp-2 w-full">
          {category.description}
        </div>
      </td>
      <td className="border-t px-4 py-2">
        <div className='text-center text-xs text-neutral-500 font-medium'>
          {getDateFormat(category.created_at)}
        </div>
      </td>
      <td className='border-t px-4 py-2 w-fit'>
        <div className="flex items-center justify-center gap-x-2 gap-y-1 text-xs font-medium">
          <span className='text-rose-600 hover:text-rose-500'>
            <DeleteIconWithConfirmation url={route('admin.category.delete', category.id)} message='Are you sure you want to delete this category?'/> 
          </span>
        </div>
      </td>
    </tr>
  )
}