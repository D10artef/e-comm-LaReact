import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import AdminMenu from '../Components/Admin/AdminMenu'
import AdminUserMenu from '../Components/Admin/AdminUserMenu'
import TopNavHeader from '../Components/Admin/TopNavHeader'

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
    </>
  )
}

export default AdminLayout