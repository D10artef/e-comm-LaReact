import React from 'react'
import classNames from 'classnames';
import { Link } from '@inertiajs/inertia-react';
import Icon from '../Icon'

const AdminMenuItem = ({ icon, link, text }) => {

  const isActive = route().current(link + '*');
  const iconClasses = classNames('w-4 h-4 fill-current group-hover:text-accent', {
    'text-white': isActive,
    'text-white ': !isActive
  });

  const textClasses = classNames('text-sm group-hover:text-accent',
    {
    'text-white': isActive,
    'text-white': !isActive
  });
  return (
    <div className='px-2 my-1 hover:bg-secondary duration-300 '>
      <Link href={route(link)} className="flex items-center group gap-x-5 py-3 px-4">
        <Icon name={icon} className={iconClasses} />
        <span className={textClasses}>{text}</span>
      </Link>
    </div>
  )
}

export default AdminMenuItem