import React from 'react'
import classNames from 'classnames';
import { Link } from '@inertiajs/inertia-react';
import Icon from '../Icon'

const AdminMenuItem = ({ icon, link, text, isActive }) => {

  const iconClasses = classNames('w-5 h-5 group-hover:text-accent duration-500', {
    'text-accent': isActive,
    'text-white ': !isActive
  });

  const textClasses = classNames('text-sm uppercase group-hover:text-accent duration-500',
    {
    'text-accent': isActive,
    'text-white': !isActive
  });

  const divClasses = classNames('px-2 hover:bg-light duration-500',
    {
      'bg-light': isActive
    }
  )
  return (
    <div className={divClasses}>
      <Link href={route(link)} className="flex items-center group gap-x-5 py-4 px-4">
        <Icon name={icon} className={iconClasses} />
        <span className={textClasses}>{text}</span>
      </Link>
    </div>
  )
}

export default React.memo(AdminMenuItem, (prev,next) => {
  return (prev.icon === next.icon && 
    prev.link === next.link && 
    prev.text === next.text && 
    prev.isActive === next.isActive)
})