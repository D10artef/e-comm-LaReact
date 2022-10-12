import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form'
import { Head, Link } from '@inertiajs/inertia-react'


const Login = () => {

  const header = <FormHeader description='Login to your account'/>
  const footer = <FormFooter 
                  >
                    <span className="mr-1 inline-block">Not registred?</span>
                    <Link href={route('register')} className="font-semibold cursor-pointer">Create an account
                    </Link>
                  </FormFooter>

  return (
    <>
    <Head title='Sign in'/>
    <AuthLayout>
      <Form header={header} footer={footer}>
          <main>
            
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center select-none" htmlFor="remember"
              >
                <input
                  name="remember" className="mr-1 accent-slate-500 cursor-pointer" type="checkbox" 
                />
                <span className="text-xs text-neutral-700">Remember me</span>
              </label>
              <Link 
                className="hover:underline hover:text-gray-700 duration-500 text-xs text-gray-500" tabIndex="-1" 
                href={route('login')}>
                Forget password?
              </Link>
            </div>
          </main>
        </Form>
    </AuthLayout>
    </>
  )
}

export default Login