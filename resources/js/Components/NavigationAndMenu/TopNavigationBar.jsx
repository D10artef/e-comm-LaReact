import React from 'react'
import Logo from '../Logo'
import { usePage } from '@inertiajs/inertia-react'
import TopNavigationMenuItem from './TopNavigationMenuItem'
import UserMenu from './UserMenu'

const TopNavigationBar = ({totalCart = 0}) => {
  const { auth } = usePage().props

  return (
    <div className="flex justify-between items-center">
      <Logo textColor='text-white'/>
      <div className="flex gap-x-3 md:gap-x-8 mr-4">
        {
          auth.user ?
          <UserMenu />
          :
          <TopNavigationMenuItem text="Sign in" icon="login" link={route('login')}/>
        }
        <div className='relative'>
          <TopNavigationMenuItem text="Cart" icon="cart" link={route('user.cart')}/>
          {
            auth.user && totalCart > 0 &&
            <div className='inline-flex absolute -top-2 -left-3 justify-center items-center w-5 h-5 text-[0.65em] font-medium text-white bg-red-500 rounded-full'>{totalCart}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(TopNavigationBar)