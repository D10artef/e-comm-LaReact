import React from 'react'
import MemoLink from '../MemoLink'
import Icon from '../Icon'

const UserMenuItem = ({menu, onMenuItemClick, ...props}) => {
  return (
    <MemoLink key={menu.text} className="px-3 py-2.5 w-full flex items-center gap-x-6 hover:bg-primary hover:text-white duration-500" href={menu.link} onClick={() => onMenuItemClick(false)} {...props}>
      <Icon name={menu.icon} className='w-5 h-5'/>
      <span>{menu.text}</span>
    </MemoLink>
  )
}

export default UserMenuItem