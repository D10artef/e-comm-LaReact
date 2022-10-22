import React from 'react'
import classNames from 'classnames';
import { Link } from '@inertiajs/inertia-react';
import Icon from '../Icon'

const AdminMenuItem = ({ icon, link, text, isActive }) => {

  const iconClasses = classNames('w-4 h-4 fill-current group-hover:text-accent', {
    'text-accent': isActive,
    'text-white ': !isActive
  });

  const textClasses = classNames('text-sm group-hover:text-accent',
    {
    'text-accent': isActive,
    'text-white': !isActive
  });

  const divClasses = classNames('px-2 my-1 hover:bg-secondary duration-300',
    {
      'bg-secondary': isActive
    }
  )
  return (
    <div className={divClasses}>
      <Link href={route(link)} className="flex items-center group gap-x-5 py-3 px-4">
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