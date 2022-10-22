import React from 'react'
import classNames from 'classnames'

const OfferTableItem = ({offer}) => {
  const active = offer.active
  const activeClass = classNames('text-sm font-medium text-center',
    {'text-emerald-700': active},
    {'text-rose-400': !active}
  )
  return (
    <tr className="hover:bg-gray-100 focus-within:bg-gray-100 text-sm"
      >
      <td className="border-t px-4 py-2 font-medium text-primary whitespace-nowrap">
        {offer.name}
      </td>
      <td className="border-t px-4 py-2 max-w-xs min-w-[250px] text-gray-500 text-justify">
        {offer.description}
      </td>
      <td className="border-t px-4 py-2">
        <div className={activeClass}>
          {active ? 'Active' : 'Not active'}
        </div>
      </td>
      <td className="border-t px-4 py-2">
        <div className='text-center font-bold text-xs text-gray-700'>
          - {offer.discount_percent}%
        </div>
      </td>
    </tr>
  )
}

export default OfferTableItem