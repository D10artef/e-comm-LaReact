import React, { useState } from 'react'
import { Head } from '@inertiajs/inertia-react';
import AuthLayout from '../../Layout/AuthLayout';
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form';
import MemoLink from '../../Components/MemoLink';
import { TextInput } from '../../Components/FormAndButton/Input';
import { useFormInput } from '../../Components/HOOKS/useFormField';
import { usePage } from '@inertiajs/inertia-react';

const ResetPassword = () => {
  const [fields, handleFieldChange] = useFormInput({
    email: ''
  })
  const [processing, setProcessing] = useState(false)
  const {errors} = usePage().props

  const handleSubmit = (event) => {
    event.preventDefault()
    setProcessing(true)
    console.log('Post emeil');
  }
  const header = <FormHeader title='Oupsss!' description='Reset your password'/>
  const footer = <FormFooter 
                  processing={processing} 
                  buttontText='Send'
                  >
                    <MemoLink href={route('login')} className="font-light cursor-pointer underline hover:text-slate-900">Login on your account
                    </MemoLink>
                  </FormFooter>

  return (
    <>
      <Head title="Reset password"/>
      <AuthLayout>
        <Form handleSubmit={handleSubmit} footer={footer} header={header}>
          <main>
            <TextInput
              className="mt-5" label="Email" name="email" type="email" 
              value={fields.email}
              errors={errors.email}
              onChange={handleFieldChange}
            />
          </main>
        </Form>
      </AuthLayout>
    </>
  )
}

export default ResetPassword