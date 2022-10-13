import React from 'react'
import MemoLink from '../MemoLink'
import Icon from '../Icon'

const TopNavigationMenuItem = ({icon, text, link}) => {
  return (
    <div>
      <MemoLink href={link} className="hover:text-neutral-200 flex items-center">
        <Icon name={icon} className='w-5 h-5'></Icon>
        <span className="hidden sm:inline-block ml-2 text-sm font-semibold">{ text }</span>
      </MemoLink>
    </div>
  )
}

export default React.memo(TopNavigationMenuItem, (prev, next) => {
  if(
    prev.icon === next.icon && 
    prev.text === next.text &&
    prev.link === next.link
    )
    return true
  return false
})