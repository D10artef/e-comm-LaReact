import React from 'react'
import UserLayout from '../../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'

const Profil = () => {
  return (
    <>
      <Head title='Your profil'/>
      <UserLayout>
        <h1>Profile</h1>
      </UserLayout>
    </>
  )
}

export default Profil