import React from 'react'
import { showPriceWithCurrency } from '../../UTULITIES/productFunction'

const OrderItem = () => {
  const order = {
    id: 1,
    name: 'Order-8934FR',
    order_placed_on: '21-10-2022',
    status: 'Delivered',
    order_delivered_on: '23-10-2022',
    total: 24545565.55,
    items_number: 9
  }
  return (
    <>
      <div className='border-b py-3 px-4 shadow-sm'>
        <main className='flex gap-x-5 justify-between text-sm'>
          <div className='flex flex-col gap-y-1'>
            <h1 className='font-medium'>{order.name}</h1>
            <p className='text-xs text-gray-500'>{`Placed on ${order.order_placed_on}`}</p>
            <span className='text-sm font-medium text-gray-600'>Total:<span className='text-accent'>{` ${showPriceWithCurrency(order.total)}`}</span></span>
          </div>
          <div className='flex flex-col items-end'>
            <span className='text-teal-700 font-medium'>{order.status}</span>
            {
              order.status.toLowerCase() === 'arrived' && order.order_delivered_on && 
              <span className='text-xs text-gray-500'>{`On ${order.order_delivered_on}`}</span>
            }
          </div>
        </main>
      </div>
    </>
  )
}

export default OrderItem