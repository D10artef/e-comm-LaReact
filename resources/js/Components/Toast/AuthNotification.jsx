import React from 'react'
import Icon from '../Icon'
import { Link } from '@inertiajs/inertia-react'

const AuthNotification = () => {
  return (
    <div className='p-4 border-b-2 border-r border-rose-600 rounded-sm text-xs bg-white shadow-sm'>
      <div className='flex flex-nowrap gap-x-3 items-center'>
        <Icon className='w-5 h-5 text-rose-500' name='x-circle'/>
        <span>You need to login</span>
      </div>
      <div className='text-center mt-1'>
        <Link href={route('login')} className='text-accent'>Login</Link>
      </div>
    </div>
  )
}

export default AuthNotification


// icon: <Icon name='x-circle' className='w-5 h-5 text-rose-500'/>,
//             style: {
//               borderBottom: '2px solid #E11D48',
//               borderRight: '1px solid #E11D48',
//               borderRadius: '1px',
//             }