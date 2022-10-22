import React, { useState } from 'react'
import MiddleNavigationMenuItem from './MiddleNavigationMenuItem'
import Icon from '../Icon'
import { SearchForm } from '../FormAndButton/Input'
import { Inertia } from '@inertiajs/inertia'

const MiddleNavigationBar = ({menus}) => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  const hanldeSearch = (search) => {
    Inertia.get(route('products'), { search }, {
      only: ['products'],
      preserveScroll: true,
    })
  }

  const menuView = menus.length > 0 && menus.map(menu => (
                <MiddleNavigationMenuItem key={menu.text} text={menu.text} link={menu.link} active={menu.active}/>
              ))

  return (
    <>
      <div className="flex justify-between items-center pt-3 pb-1 text-sm mx-4">
        <div className="md:flex hidden lg:gap-x-8 gap-x-3 items-center">
          {
            menuView
          }
        </div>
        <div className="max-w-md flex-1">
          <SearchForm onSearch={hanldeSearch}>Find your product...</SearchForm>
        </div>
        <div className="md:hidden flex items-center cursor-pointer p-0.5 border rounded-sm ml-3 text-gray-200 border-gray-200" onClick={toggleMenu}>
          <span className="sr-only">Menu</span>
          <Icon name="burger" className="w-6 h-6 fill-current cursor-pointer" ></Icon>
        </div>
      </div>
      {
        openMenu && 
        <div className='p-3 flex flex-col md:hidden gap-y-5 '>
          {menuView}
        </div>
      }
    </>
  )
}

export default React.memo(MiddleNavigationBar)