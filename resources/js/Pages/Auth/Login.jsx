import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form'
import { Head } from '@inertiajs/inertia-react'
import { TextInput } from '../../Components/FormAndButton/Input'
import MemoLink from '../../Components/MemoLink'

const Login = () => {

  const header = <FormHeader description='Login to your account'/>
  const footer = <FormFooter 
                  processing={false} 
                  buttontText='Login'
                  >
                    <span className="mr-1 inline-block">Not registred?</span>
                    <MemoLink href={route('register')} className="font-semibold cursor-pointer">Create an account
                    </MemoLink>
                  </FormFooter>

  return (
    <>
    <Head title='Sign in'/>
    <AuthLayout>
      <Form header={header} footer={footer}>
          <main>
            <TextInput
              className="mt-5" label="Email" name="email" type="email" 
            />
            <TextInput
              className="mt-5" label="Mot de passe" name="password" type="password"
            />
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center select-none" htmlFor="remember"
              >
                <input
                  name="remember" className="mr-1 accent-slate-500 cursor-pointer" type="checkbox" 
                />
                <span className="text-xs text-neutral-700">Remember me</span>
              </label>
              <MemoLink 
                className="hover:underline hover:text-gray-700 duration-500 text-xs text-gray-500" tabIndex="-1" 
                href={route('password.reset')}>
                Forget password?
              </MemoLink>
            </div>
          </main>
        </Form>
    </AuthLayout>
    </>
  )
}

export default Login