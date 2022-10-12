import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import { Head } from '@inertiajs/inertia-react'


const Login = () => {
  return (
    <>
    <Head title='Sign in'/>
    <AuthLayout>
      Login
    </AuthLayout>
    </>
  )
}

export default Login