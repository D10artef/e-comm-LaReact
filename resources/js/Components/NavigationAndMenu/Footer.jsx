import React from 'react'
import Logo from '../Logo'
import MemoLink from '../MemoLink'
import Icon from '../Icon'
import { menus } from './navigationMenus'

const Footer = () => {
  return (
    <div className='w-full bg-secondary px-4 py-3  text-white gap-x-6'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <Logo textColor='text-white'/>
        <ul className='flex flex-wrap justify-center items-center mb-6 text-sm font-light text-white sm:mb-0'>
          {
            menus.length > 0 && menus.map(menu => (
              <li key={menu.text}>
                <MemoLink href={menu.link} className='mr-4 hover:underline hover:text-gray-100 md:mr-6'>{menu.text}</MemoLink>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='mt-3 mb-2 border-b border-gray-50 border-opacity-20 sm:mx-auto'></div>
      <div className="flex items-center justify-center gap-x-6 py-2">
        <span className='text-xs text-neutral-200 sm:text-center'>© 2022 - ArisD</span>
        <div className='flex space-x-6 justify-center items-center'>
          <a href="#" className='text-gray-200 hover:text-white'>
            <Icon className='w-5 h-5' name='facebook'/>
            <span className='sr-only'>Page Facebook</span>
          </a>
          <a href="#" className='text-gray-200 hover:text-white'>
            <Icon name='twitter' className='w-5 h-5'/>
            <span className='sr-only'>Page Twitter</span>
          </a>
          <a href="#" className='text-gray-200 hover:text-white'>
            <Icon name='mail' className='w-5 h-5'/>
            <span className='sr-only'>Contact email</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer)