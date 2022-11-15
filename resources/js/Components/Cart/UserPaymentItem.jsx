import React from 'react'
import classNames from 'classnames'
import { replaceLastFour } from '../../UTULITIES/userFunction'
import Icon from '../Icon'

const UserPaymentItem = ({payment, active, hanldeSelectPayement}) => {
  const divClass = classNames('flex bg-white rounded-sm flex-row flex-nowrap border border items-center text-sm gap-x-4 my-1  px-3 py-1.5 duration-500', 
  {'border-accent': active},
  )
  
  return (
    <div className={divClass}>
      <input type="radio" name="user_payement" value={payment.id} onChange={() => hanldeSelectPayement(parseInt(payment.id, 10))}/>
      <Icon name='credit-card' className='w-6 h-6 text-gray-500'/>
      <div className="flex flex-col">
        {/* <h1>{payment.provider_name}</h1> */}
        {
          payment.provider?.name ? <h1>{payment.provider.name}</h1> : <h1>Payement method</h1>
        }
        <span className='text-xs  text-gray-400'>{replaceLastFour(payment.account)}</span>
      </div>
    </div>
  )
}

export default UserPaymentItem