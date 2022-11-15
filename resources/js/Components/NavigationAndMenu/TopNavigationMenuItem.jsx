import React from 'react'
import MemoLink from '../MemoLink'
import Icon from '../Icon'

const TopNavigationMenuItem = ({icon, text, link}) => {
  return (
    <div>
      <MemoLink href={link} className="hover:text-dark/80 flex items-center" preserveState>
        <Icon name={icon} className='w-6 h-6 sm:w-5 sm:h-5'></Icon>
        <span className="hidden sm:inline-block ml-2 text-sm font-medium">{ text }</span>
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