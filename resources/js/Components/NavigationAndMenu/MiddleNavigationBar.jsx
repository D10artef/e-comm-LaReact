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
      <div className="flex justify-between items-center text-sm mx-4">
        <div className="md:flex hidden gap-x-8 lg:gap-x-10 items-center">
          {
            menuView
          }
        </div>
        <div className="max-w-sm lg:max-w-md flex-1">
          <SearchForm onSearch={hanldeSearch}>Find your product...</SearchForm>
        </div>
        <div className="md:hidden flex items-center cursor-pointer p-1 border rounded-sm ml-3 text-my-neutral border-my-neutral" onClick={toggleMenu}>
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