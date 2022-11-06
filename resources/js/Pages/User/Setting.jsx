import React from 'react'
import UserLayout from '../../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'

const Setting = () => {
  return (
    <>
      <Head title='Setting'/>
      <UserLayout>
        <section className='px-4 md:px-8 lg:px-12 py-4 md:py-6'>
          Setting
        </section>  
      </UserLayout>
    </>
  )
}

export default Setting