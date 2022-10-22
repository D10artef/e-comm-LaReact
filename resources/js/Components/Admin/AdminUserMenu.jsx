import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '@inertiajs/inertia-react';
import Icon from '../Icon';
import UserMenuItem from '../NavigationAndMenu/UserMenuItem';
import { ADMIN_USER_MENU_LIST }  from './adminMenuList'

const AdminUserMenu = () => {
  const { auth } = usePage().props;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <div className="flex items-center justify-end w-full p-4 text-sm border-b border-accent">
      <div className="relative">
        <div
          className="flex items-center  cursor-pointer select-none group"
          onClick={() => setMenuOpened(true)}
        >
          <div className="mr-1 text-gray-800 whitespace-nowrap group-hover:text-primary focus:text-primary font-medium">
            <span>{auth.admin?.data?.username}</span>
          </div>
          <Icon
            className="w-5 h-5 text-gray-800 fill-current group-hover:text-primary focus:text-iprimary"
            name="chevron-down"
          />
        </div>
        <div className={menuOpened ? '' : 'hidden'}>
          <div className="absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl min-w-[150px]">
            {
              ADMIN_USER_MENU_LIST.map(menu => {
                if(menu.text.toLowerCase() === 'logout'){
                  return <UserMenuItem key={menu.text} menu={menu} method="post" as="button" type="button" onMenuItemClick={setMenuOpened}/>
                }
                return <UserMenuItem key={menu.text} menu={menu} onMenuItemClick={setMenuOpened}/>
              })
            }
          </div>
          <div
            onClick={() => {
              setMenuOpened(false);
            }}
            className="fixed inset-0 z-10 bg-black opacity-25"
          ></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminUserMenu