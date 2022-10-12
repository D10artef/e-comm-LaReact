import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form'
import { Head, Link } from '@inertiajs/inertia-react'


const Register = () => {
  const header = <FormHeader description='Join our community'/>
  const footer = <FormFooter 
                  >
                    <span className="mr-1 inline-block">Already have an account?</span>
                    <Link href={route('register')} className="font-semibold cursor-pointer">Sign in
                    </Link>
                  </FormFooter>
  return (
    <>
    <Head title='Sign up'/>
    <AuthLayout>
      <Form header={header} footer={footer}>
        <main>
          
        </main>
      </Form>
    </AuthLayout>
    </>
  )
}

export default Register