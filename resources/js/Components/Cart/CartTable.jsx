import React from 'react'
import CartTableItem from './CartTableItem'


const CartTable = ({items, ...props}) => {
  return (
    <table className='w-full text-left text-gray-500'>
      <thead className='text-xs text-primary uppercase bg-gray-100'>
        <tr>
          <th scope='col' className='py-3 px-5 max-w-[280px] min-w-[200px]'>Name</th>
          <th scope='col' className='py-3 px-5'>Price U</th>
          <th scope='col' className='py-3 px-5 text-center'>Quantity</th>
          <th scope='col' className='py-3 px-5'>Action</th>
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