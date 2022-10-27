import React, { useState } from 'react'
import { SimpleButton, LoadingButton } from '../../../Components/FormAndButton/Button'
import { useFormInput } from '../../../Components/HOOKS/useFormField'
import { Inertia } from '@inertiajs/inertia'
import { TextInput, TextAreaInput } from '../../../Components/FormAndButton/Input'
import { usePage } from '@inertiajs/inertia-react'


const New = ({closeModal}) => {
  const [fields, handleFieldChange] = useFormInput({
    name: '',
    description: '',
  })
  const { errors } = usePage().props
  const [loading, setLoading] = useState(false)
  

  const submitNewCategory = (event) => {
    event.preventDefault()
    setLoading(true)
    Inertia.post(route('admin.category.create'), fields, {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: () => {
        closeModal()
      },
      onFinish: () => {
        setLoading(false)
      }
    })
  }
  return (
    <>
      <div className="bg-white rounded-sm w-5/6 sm:w-1/2 lg:w-2/6 shadow">
        <header className="px-6 py-3 border-b">
            <h1 className="text-secondary tracking-wide text-xl font-light text-center">
                New category
            </h1>
        </header>
        <main className='px-5'>
          <form onSubmit={submitNewCategory} id='formCategory'>
            <TextInput
              className="mt-5 w-full" label="Name" name="name" type="text" 
              errors={errors.name}
              value={fields.name}
              onChange={handleFieldChange}
            />
            <TextAreaInput
              className="mt-5 w-full" label="Description" name="description" type="text" 
              errors={errors.description}
              value={fields.description}
              onChange={handleFieldChange}
            />
          </form>
        </main>
        <footer className="px-6 py-3 flex justify-end items-center gap-3">
            <SimpleButton
                className="bg-gray-500 text-white hover:bg-neutral-500"
                icon="x-close"
                iconClass="w-4 h-4"
                onClick={closeModal}
            >
              Cancel
            </SimpleButton>
            <LoadingButton
                className="bg-accent text-white  hover:bg-accent/80 px-6"
                icon="simple-check"
                type='submit'
                form='formCategory'
                loading={loading}
            >
              Create
            </LoadingButton>
        </footer>
      </div>
    </>
  )
}

export default New