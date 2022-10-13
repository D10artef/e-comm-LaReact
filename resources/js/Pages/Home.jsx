import React from 'react'
import UserLayout from '../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'

const Home = () => {
  return (
    <>
      <Head title='Home'/>
      <UserLayout>
        Home
      </UserLayout>
    </>
  )
}

export default Home