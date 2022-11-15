import React, {useEffect, useRef, useState} from 'react'
import NavigationBar from '../Components/NavigationAndMenu/NavigationBar'
import Footer from '../Components/NavigationAndMenu/Footer'
import { usePage } from '@inertiajs/inertia-react'
import { Toaster } from 'react-hot-toast'
import Icon from '../Components/Icon'

const UserLayout = ({children}) => {
  const {auth} = usePage().props
  const navRef = useRef()
  const [marginTop, setMarginTop] = useState('124px')
  useEffect(() => {
    const offsetHeight = navRef.current.offsetHeight
    setMarginTop(`${offsetHeight}px`)
  }, [])

  return (
    <>
      <NavigationBar ref={navRef} auth={auth} />
      <div className={`min-h-screen w-full pb-4 bg-background overflow-x-hidden`} style={{marginTop: marginTop}}>
        {children}
      </div>
      <Footer/>
      <Toaster 
        toastOptions={{
          position: "bottom-right",
          style:{
            fontSize: '0.75em',
            padding: '0.75rem 1.2rem'
          },
          success: {
            icon: <Icon name='check-circle' className='w-5 h-5 md:w-6 md:h-6 text-[#14B8A6]'/>,
            style: {
              borderBottom: '2px solid #14B8A6',
              borderLeft: '1px solid #14B8A6',
              borderRadius: '0.5rem',
            },
          },
          error: {
            icon: <Icon name='x-circle' className='w-5 h-5 md:w-6 md:h-6 text-accent-secondary'/>,
            style: {
              borderBottom: '2px solid #E11D48',
              borderRight: '1px solid #E11D48',
              borderRadius: '0.5rem',
            }
          }
        }}
      />
    </>
  )
}

export default UserLayout