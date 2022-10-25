import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import AdminMenu from '../Components/Admin/AdminMenu'
import AdminUserMenu from '../Components/Admin/AdminUserMenu'
import TopNavHeader from '../Components/Admin/TopNavHeader'
import { Toaster } from 'react-hot-toast'
import Icon from '../Components/Icon'

const AdminLayout = ({title, children}) => {
  return (
    <>
      <Head title={title}/>
      <div>
        <div className="flex flex-col">
          <div className="flex flex-col h-screen">
            <div className="md:flex">
              <div>
                <TopNavHeader/>
              </div>
              <div className='w-full'>
                <AdminUserMenu/>
              </div>
            </div>
            <div className="flex flex-grow overflow-hidden">
              <AdminMenu className="flex-shrink-0 hidden w-52 pt-6 overflow-y-auto bg-primary md:block" />
              <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default AdminLayout