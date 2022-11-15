import React from 'react'
import TopNavigationBar from './TopNavigationBar'
import { usePage } from '@inertiajs/inertia-react'
import { menus } from './navigationMenus'
import MiddleNavigationBar from './MiddleNavigationBar'

const NavigationBar = React.forwardRef((props, ref) => {
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
      <nav ref={ref} className='fixed top-0 inset-x-0 bg-light px-1 sm:px-3 py-3 text-dark shadow-indigo-100 shadow-md border-b z-20' id='navigation_bar'>
        <TopNavigationBar/>
        <hr className='border-neutral-200 border-t m-4'/>
        <MiddleNavigationBar menus={menuNavList} />
      </nav>
    </>
  )
})

export default NavigationBar