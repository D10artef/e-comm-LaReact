import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form'
import { Head } from '@inertiajs/inertia-react'
import { TextInput } from '../../Components/FormAndButton/Input'
import MemoLink from '../../Components/MemoLink'


const Register = () => {
  const header = <FormHeader description='Join our community'/>
  const footer = <FormFooter 
                  processing={false} 
                  buttontText='Register'
                  >
                    <span className="mr-1 inline-block">Already have an account?</span>
                    <MemoLink href={route('login')} className="font-semibold cursor-pointer">Sign in
                    </MemoLink>
                  </FormFooter>
  return (
    <>
    <Head title='Sign up'/>
    <AuthLayout>
      <Form header={header} footer={footer}>
        <main>
          <TextInput
              className="mt-5" label="Email" name="email" type="email" 
            />
            <TextInput
              className="mt-5" label="Password" name="password" type="password"
            />
            <TextInput
              className="mt-5" label="Password confirmation" name="password_confirmation" type="password"
            />
        </main>
      </Form>
    </AuthLayout>
    </>
  )
}

export default Register