import React, { useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form'
import { Head, usePage } from '@inertiajs/inertia-react'
import { TextInput } from '../../Components/FormAndButton/Input'
import MemoLink from '../../Components/MemoLink'
import { useFormInput } from '../../Components/HOOKS/useFormInput'
import { Inertia } from '@inertiajs/inertia'


const Register = () => {
  const [fields, handleFieldChange] = useFormInput({
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [processing, setProcessing] = useState(false)
  const {errors} = usePage().props

  const handleSubmit = (event) => {
    event.preventDefault()
    setProcessing(true)
    Inertia.post(route('register'), fields, {
      onError: () => {
        setProcessing(false)
      },
      onFinish: () => {
        setProcessing(false)
      }
    })

  }

  const header = <FormHeader description='Join our community'/>
  const footer = <FormFooter 
                  processing={processing} 
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
      <Form handleSubmit={handleSubmit} header={header} footer={footer}>
        <main>
          <TextInput
              className="mt-5" label="Email" name="email" type="email" 
              errors={errors.email}
              value={fields.email}
              onChange={handleFieldChange}
            />
            <TextInput
              className="mt-5" label="Password" name="password" type="password"
              errors={errors.password}
              value={fields.password}
              onChange={handleFieldChange}
            />
            <TextInput
              className="mt-5" label="Password confirmation" name="password_confirmation" type="password"
              value={fields.password_confirmation}
              onChange={handleFieldChange}
            />
        </main>
      </Form>
    </AuthLayout>
    </>
  )
}

export default Register