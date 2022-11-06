import React from 'react'
import UserLayout from '../../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'
import UserInfoSection from '../../Components/User/UserInfoSection'
import { usePage } from '@inertiajs/inertia-react'
import OrdersHistory from '../../Components/Order/OrdersHistory'
import UserPaymentSection from '../../Components/User/UserPaymentSection'

const Profil = () => {
  const {user_info} = usePage().props
  return (
    <>
      <Head title='Your profil'/>
      <UserLayout>
        <section className='px-4 md:px-8 lg:px-12 py-4 md:py-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5'>
            <UserInfoSection info={user_info.data} />
            <UserPaymentSection />
            <OrdersHistory />
          </div>
        </section>  
      </UserLayout>
    </>
  )
}

export default Profil