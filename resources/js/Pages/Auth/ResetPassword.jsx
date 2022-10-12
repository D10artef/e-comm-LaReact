import React from 'react'
import { Head } from '@inertiajs/inertia-react';
import AuthLayout from '../../Layout/AuthLayout';
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form';
import MemoLink from '../../Components/MemoLink';
import { TextInput } from '../../Components/FormAndButton/Input';

const ResetPassword = () => {

  const header = <FormHeader title='Oupsss!' description='Reset your password'/>
  const footer = <FormFooter 
                  processing={false} 
                  buttontText='Send'
                  >
                    <MemoLink href={route('login')} className="font-light cursor-pointer underline hover:text-slate-900">Login on your account
                    </MemoLink>
                  </FormFooter>

  return (
    <>
      <Head title="Reset password"/>
      <AuthLayout>
        <Form  footer={footer} header={header}>
          <main>
            <TextInput
              className="mt-5" label="Email" name="email" type="email" 
            />
          </main>
        </Form>
      </AuthLayout>
    </>
  )
}

export default ResetPassword