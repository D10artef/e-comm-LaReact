import React from 'react'
import CartTableItem from './CartTableItem'


const CartTable = ({items, ...props}) => {
  return (
    <table className='w-full text-left text-gray-500'>
      <thead className='text-xs text-white uppercase bg-secondary'>
        <tr>
          <th scope='col' className='py-3 px-5 max-w-[280px] min-w-[200px] sticky top-0 z-10  bg-secondary'>Name</th>
          <th scope='col' className='py-3 px-5 sticky top-0 z-10  bg-secondary'>Price U</th>
          <th scope='col' className='py-3 px-5 text-center sticky top-0 z-10  bg-secondary'>Quantity</th>
          <th scope='col' className='py-3 px-5 sticky top-0 z-10  bg-secondary'>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (<CartTableItem key={item.id} item={item} {...props} />)
        )}
      </tbody>
    </table>
  )
}

export default CartTable