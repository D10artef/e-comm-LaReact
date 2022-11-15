import React from 'react'
import Icon from '../Icon'
import UserPaymentItem from './UserPaymentItem'

const UserPaymentSection = ({userPayements, handleSelectPayment, activeUserPayement}) => {
  return (
    <>
      { userPayements.length > 0 &&
        userPayements.map(payment => (<UserPaymentItem key={payment.id} payment={payment} hanldeSelectPayement={handleSelectPayment} active={activeUserPayement === payment.id}/>))
      }
      <button className='border bg-white text-gray-500 flex font-light justify-center items-center rounded-sm px-3 py-1.5 text-sm'>
        <Icon name='plus-circle' className='mr-2 w-4 h-4'/>Add payment method
      </button>
    </>
  )
}

export default UserPaymentSection