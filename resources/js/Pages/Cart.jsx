import React from 'react'
import UserLayout from '../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'

const Cart = () => {
  return (
    <>
      <Head title='Your cart'/>
      <UserLayout>
        Cart
      </UserLayout>
    </>
  )
}

export default Cart