import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import Icon from '../Icon';
import { getUsernameInEmail } from '../../UTULITIES/userFunction'
import { USER_MENU_LIST } from './userMenuList'
import UserMenuItem from './UserMenuItem';

const UserMenu = () => {
  const { auth } = usePage().props;
  const [menuOpened, setMenuOpened] = useState(false);

  
  return (
    <div className="flex items-center justify-between w-full px-3 text-sm relative">
      { auth.user ? 
        <div onClick={() => setMenuOpened(true)} className="flex items-center gap-1 cursor-pointer">
          <div className="w-5 h-5 overflow-hidden rounded bg-gray-200 mr-1"></div>
          <span className="font-semibold underline">{getUsernameInEmail(auth.user.data.email)}</span>
          <Icon name="chevron-down" className="w-4 h-4"></Icon>
        </div>
        : ''
      }
      <div className="absolute top-0 right-0 left-auto z-30 py-1 mt-8 text-sm whitespace-nowrap bg-neutral-100 rounded shadow-xl text-neutral-700 ">
          <div className={`min-w-[150px] ${menuOpened ? '' : 'hidden'}`}>
            {
              USER_MENU_LIST.map(menu => {
                if(menu.text.toLowerCase() === 'logout'){
                  return <UserMenuItem key={menu.text} menu={menu} method="post" as="button" type="button" onMenuItemClick={setMenuOpened}/>
                }
                return <UserMenuItem key={menu.text} menu={menu} onMenuItemClick={setMenuOpened}/>
              })
            }
          </div>
        </div>
      <div onClick={() => {setMenuOpened(false);}} className={`fixed inset-0 z-20 bg-black opacity-10 ${menuOpened ? '' : 'hidden'}`}></div>
    </div>

  )
}

export default UserMenu