import React from 'react'
import NavigationBar from '../Components/NavigationAndMenu/NavigationBar'
import Footer from '../Components/NavigationAndMenu/Footer'
import { usePage } from '@inertiajs/inertia-react'

const UserLayout = ({children}) => {
  const {auth} = usePage().props
  return (
    <>
      <NavigationBar auth={auth} />
      <div className="min-h-screen w-full">
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default UserLayout