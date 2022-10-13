import React from 'react'
import TopNavigationBar from './TopNavigationBar'
import { usePage } from '@inertiajs/inertia-react'
import { menus } from './navigationMenus'
import MiddleNavigationBar from './MiddleNavigationBar'

const NavigationBar = () => {
  const url = usePage().url
  const isMenuActive = (link) => {
    return url.startsWith(link)
  }
  const menuNavList = menus.length > 0 && menus.map(menu => {
    return {
      active: isMenuActive(menu.rawRoute),
      ...menu,
    }
  })
  return (
    <>
      <nav className='bg-secondary px-3 py-3 text-white'>
        <TopNavigationBar/>
        <hr className='border-slate-400 border-t mx-4 mt-3'/>
        <MiddleNavigationBar menus={menuNavList} />
      </nav>
    </>
  )
}

export default NavigationBar