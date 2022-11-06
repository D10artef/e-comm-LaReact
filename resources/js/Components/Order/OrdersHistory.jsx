import React from 'react'
import InformationSection from '../User/InformationSection'
import OrderItem from './OrderItem'

const OrdersHistory = () => {
  return (
    <>
      <InformationSection title='Orders history'>
        <div className="p-2 max-h-80 overflow-y-scroll scroler">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </InformationSection>
    </>
  )
}

export default OrdersHistory