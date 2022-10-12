import React, {useState} from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form'
import { Head, usePage } from '@inertiajs/inertia-react'
import { TextInput } from '../../Components/FormAndButton/Input'
import MemoLink from '../../Components/MemoLink'
import { useFormInput } from '../../Components/HOOKS/useFormInput'
import { Inertia } from '@inertiajs/inertia'

const Login = () => {
  const [fields, handleFieldChange] = useFormInput({
    email: '',
    password: '',
    remember: false,
  })
  const [processing, setProcessing] = useState(false)

  const { errors } = usePage().props

  const handleSubmit = (event) => {
    event.preventDefault()
    setProcessing(true)
    Inertia.post(route('login'), fields, {
      onError: () => {
        setProcessing(false)
      },
      onFinish: () => {
        setProcessing(false)
      }
    })

  }

  const header = <FormHeader description='Login to your account'/>
  const footer = <FormFooter 
                  processing={processing} 
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
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center select-none" htmlFor="remember"
              >
                <input
                  name="remember" className="mr-1 accent-slate-500 cursor-pointer" type="checkbox" 
                  checked={fields.remember} 
                  onChange={handleFieldChange}
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