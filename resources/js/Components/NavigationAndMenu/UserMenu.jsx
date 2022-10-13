import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import MemoLink from '../MemoLink';
import Icon from '../Icon';
import { getUsernameInEmail } from '../../UTULITIES/userFunction'

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
            
            <MemoLink href={route('products')} className="border-b px-6 py-2 flex gap-x-4 hover:bg-gray-500 hover:text-white"
            onClick={() => setMenuOpened(false)}>
              <Icon name='user'/>
              <span>Profile</span>
            </MemoLink>
            <MemoLink href={route('services')} className=" border-b px-6 py-2 flex gap-x-4 hover:bg-gray-500 hover:text-white"
            onClick={() => setMenuOpened(false)}>
              <Icon name='setting'/>
              <span>Setting</span>
            </MemoLink>
            <MemoLink href={route('logout')} method="post" as="button" type="button" className="flex gap-x-4 w-full px-6 py-2 hover:bg-gray-500 hover:text-white"
            onClick={() => setMenuOpened(false)}>
              <Icon name='logout'/>
              <span>Logout</span>
            </MemoLink>
          </div>
        </div>
      <div onClick={() => {setMenuOpened(false);}} className={`fixed inset-0 z-20 bg-black opacity-10 ${menuOpened ? '' : 'hidden'}`}></div>
    </div>

  )
}

export default UserMenu