import React from 'react'
import MiddleNavigationMenuItem from './MiddleNavigationMenuItem'
import Icon from '../Icon'
import { SearchForm } from '../FormAndButton/Input'

const MiddleNavigationBar = ({menus}) => {

  const menuView = menus.length > 0 && menus.map(menu => (
                <MiddleNavigationMenuItem key={menu.text} text={menu.text} link={menu.link} active={menu.active}/>
              ))

  return (
    <>
      <div className="flex justify-between items-center pt-3 pb-1 text-sm mx-4">
        <div className="md:flex hidden lg:gap-x-6 gap-x-3 items-center">
          {
            menuView
          }
        </div>
        <div className="max-w-md flex-1">
          <SearchForm>Find your product...</SearchForm>
        </div>
        <div className="md:hidden flex items-center cursor-pointer p-1 border rounded-sm ml-3 text-gray-200 border-gray-200" >
          <span className="sr-only">Menu</span>
          <Icon name="burger" className="w-5 h-5 fill-current cursor-pointer" ></Icon>
        </div>
      </div>
    </>
  )
}

export default MiddleNavigationBar