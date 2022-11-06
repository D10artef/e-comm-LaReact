import React from 'react'
import { deepEqual } from '../../UTULITIES/compareFunction'
import Icon from '../Icon'
import { OPERATIONS } from '../../UTULITIES/const'

const CartTableItem = ({item, removeFromCart, updateItemCart}) => {

  return (
    <tr className='bg-white border-b border-gray-300 text-[0.8em]'>
      <td className="py-1.5 px-5 font-semibold text-primary max-w-[280px] min-w-[200px]">{item.product_name}</td>
      <td className="py-1.5 px-5">{item.product_price}</td>
      <td className="py-1.5 px-5 td-quantity">
        <div className=' flex items-center gap-x-2 justify-center'>
          <div className='w-8 flex justify-center items-center'>
            <Icon name='minus-circle' className='td-icon w-4 h-4 cursor-pointer duration-300' 
            onClick={() => updateItemCart(item.id, OPERATIONS.minus)}/>
          </div>
          <span className='flex w-8 justify-center text-center font-medium text-secondary'>{item.quantity}</span>
          <div className="w-8 flex justify-center items-center">
            <Icon name='plus-circle' className='td-icon w-4 h-4 cursor-pointer' 
            onClick={() => updateItemCart(item.id, OPERATIONS.add)}/>
          </div>
        </div>
      </td>
      <td className="py-1.5 px-5">
        <button className='flex items-center gap-x-1 font-light text-rose-500' onClick={() => removeFromCart(item.id)}>
          <span>Remove</span>
        </button>
      </td>
    </tr>
  )
}

export default React.memo(CartTableItem, (prev, next) => deepEqual(prev.item, next.item))