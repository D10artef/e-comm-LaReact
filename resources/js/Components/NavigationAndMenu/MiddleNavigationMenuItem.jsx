import React from 'react'
import MemoLink from '../MemoLink'

const MiddleNavigationMenuItem = ({active, link, text}) => {
  const className = active ? 'text-accent ' : 'text-dark'
  return (
    <li className='inline-block'>
      <MemoLink href={link} className={`flex items-center hover:text-accent ${className}`}>
        <span className="text-sm font-medium first-letter:uppercase">{text}</span>
      </MemoLink>
    </li>
  )
}

export default React.memo(MiddleNavigationMenuItem, 
  (prev, next) => {
      if(
        prev.active === next.active &&
        prev.link === next.link &&
        prev.text === next.text
        )
        return true
      return false
  }
)