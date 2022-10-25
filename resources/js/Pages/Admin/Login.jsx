import React, {useState} from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Form, { FormHeader, FormFooter } from '../../Components/Auth/Form'
import { Head, usePage } from '@inertiajs/inertia-react'
import { TextInput } from '../../Components/FormAndButton/Input'
import { useFormInput } from '../../Components/HOOKS/useFormField'
import { Inertia } from '@inertiajs/inertia'
import MemoLink from '../../Components/MemoLink'

const Login = () => {
  const [fields, handleFieldChange] = useFormInput({
    username: '',
    password: '',
    remember: false,
  })
  const [processing, setProcessing] = useState(false)

  const { errors } = usePage().props

  const handleSubmit = (event) => {
    event.preventDefault()
    setProcessing(true)
    Inertia.post(route('admin.authenticate'), fields, {
      onError: () => {
        setProcessing(false)
      },
      onFinish: () => {
        setProcessing(false)
      }
    })

  }

  const header = <FormHeader title='Admin Login' description='Happy to see you again'/>
  const footer = <FormFooter 
                  processing={processing} 
                  buttontText='Login'
                  >
                  </FormFooter>

  return (
    <>
    <Head title='Admin page - Sign in'/>
    <AuthLayout>
      <Form handleSubmit={handleSubmit} header={header} footer={footer}>
          <main>
            <TextInput
              className="mt-5" label="Username" name="username" type="text" 
              errors={errors.username}
              value={fields.username}
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
                href={route('admin.login')}>
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