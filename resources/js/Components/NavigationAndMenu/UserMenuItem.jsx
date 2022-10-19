import React from 'react'
import MemoLink from '../MemoLink'
import Icon from '../Icon'

const UserMenuItem = ({menu, onMenuItemClick, ...props}) => {
  return (
    <MemoLink key={menu.text} className="border-b px-3 py-2 w-full flex items-center gap-x-6 hover:bg-gray-500 hover:text-white" href={menu.link} onClick={() => onMenuItemClick(false)} {...props}>
      <Icon name={menu.icon} className='w-4 h-4'/>
      <span>{menu.text}</span>
    </MemoLink>
  )
}

export default UserMenuItem