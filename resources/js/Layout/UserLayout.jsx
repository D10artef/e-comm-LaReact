import React from 'react'
import NavigationBar from '../Components/NavigationAndMenu/NavigationBar'
import Footer from '../Components/NavigationAndMenu/Footer'
import { usePage } from '@inertiajs/inertia-react'
import { Toaster } from 'react-hot-toast'
import Icon from '../Components/Icon'

const UserLayout = ({children}) => {
  const {auth} = usePage().props
  return (
    <>
      <NavigationBar auth={auth} />
      <div className="min-h-screen w-full">
        {children}
      </div>
      <Footer/>
      <Toaster 
        toastOptions={{
          position: "bottom-right",
          style:{
            fontSize: '0.75em'
          },
          success: {
            icon: <Icon name='check-circle' className='w-5 h-5 text-teal-500'/>,
            style: {
              borderBottom: '2px solid #14B8A6',
              borderLeft: '1px solid #14B8A6',
              borderRadius: '1px',
            },
          },
          error: {
            icon: <Icon name='x-circle' className='w-5 h-5 text-rose-500'/>,
            style: {
              borderBottom: '2px solid #E11D48',
              borderRight: '1px solid #E11D48',
              borderRadius: '1px',
            }
          }
        }}
      />
    </>
  )
}

export default UserLayout