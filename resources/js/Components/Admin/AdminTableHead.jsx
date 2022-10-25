import React from 'react'
import Icon from '../Icon'
import classNames from 'classnames'

export const TableHeadItem = ({textHead, canOrder = false, orderKey, maxWidth = false, orderItemBy}) => {
  const thClass = classNames('px-6 py-4 text-center',
                {'max-w-xs': maxWidth})
  return(
    <th className={thClass}>
      <span className='inline-flex gap-x-1 items-center group uppercase' >
        {textHead}
        { 
          canOrder && <Icon name='switch-vertical' className='invisible group-hover:visible opacity-50 w-3 h-3 cursor-pointer' onClick={() => orderItemBy(orderKey.trim())}/>
        }
      </span>
    </th>
  )
}

export const TableHead = React.memo(({dataHead ,handleOrder}) => {
  
  return (
    <thead>
      <tr className="text-xs text-white bg-primary">
        {
          dataHead.length > 0 && dataHead.map(head => 
          <TableHeadItem key={head.textHead} 
          textHead={head.textHead}
          canOrder={head.canOrder} 
          orderKey={head.orderKey}
          maxWidth={head.maxWidth}
          orderItemBy={handleOrder}
          />
          )
        }
      </tr>
    </thead>
  )
})




