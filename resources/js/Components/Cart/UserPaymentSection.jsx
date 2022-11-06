import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import UserPaymentItem from './UserPaymentItem'
import Icon from '../Icon'
import { SimpleButton, LoadingButton } from '../FormAndButton/Button'
import Modal from '../Portal/Modal'
import { TextInput } from '../FormAndButton/Input'
import {useModal} from '../HOOKS/useModal'
import { Inertia } from '@inertiajs/inertia'
import { useFormInput } from '../HOOKS/useFormField'

const UserPaymentSection = () => {
  const {user_payments, errors } = usePage().props
  const [showModal, openModal, closeModal] = useModal(false)
  const [showError, setShowError] = useState(false)
  const [userPayement, setUserPayement] = useState(0);
  const [fields, handleFieldChange] = useFormInput({
    password: ''
  })
  
  const handleSelectPayment = (event) => {
    setUserPayement(parseInt(event.target.value, 10))
  }

  const confirmOrder = () => {
    openModal()
  }

  const hanldeCloseModal = () => {
    setShowError(false)
    closeModal()
  }

  const createOrder =  (event) => {
    event.preventDefault();
    Inertia.post(route('user.order.create'), fields, {
      onSuccess: () => {
        closeModal()
      },
      onError: () => {
        setShowError(true)
        fields.password = ''
      },
    })
  }


  return (
    <>
      <div className='border p-3 shadow-sm bg-neutral-50'>
        <h1 className='font-medium text-primary uppercase text-sm text-center mb-2'>Make your order</h1>
        <hr className='w-1/2 m-auto'/>
        <p className='text-sm text-center text-secondary py-3'>Please select a payement method</p>
        <div className="my-2">
          { user_payments.data.length > 0 &&
            user_payments.data.map(payment => (<UserPaymentItem key={payment.id} payment={payment} selectPayement={handleSelectPayment} active={userPayement === payment.id}/>))
          }
          <button className='border bg-white text-gray-500 flex font-light justify-center items-center rounded-sm px-3 py-1.5 text-sm'>
            <Icon name='plus-circle' className='mr-2 w-4 h-4'/>Add payment method
          </button>
        </div>
        {
          userPayement !== 0 &&
          <div className='flex justify-end'>
            <SimpleButton className='bg-accent hover:bg-accent-secondary text-white' onClick={confirmOrder}>Continue</SimpleButton>
          </div>
        }
      </div>
      {
        showModal && 
        <Modal onClose={hanldeCloseModal}>
          <div className='bg-white border shadow p-4'>
            <header className='mb-2 pb-2 border-b'>
              <h1 className='text-xl font-medium'>Confirm order</h1>
            </header>
            <main className='text-sm'>
              <p className='text-neutral-600'>Before processing, please enter your password</p>
              <form onSubmit={createOrder} id="confirmform">
                <TextInput
                className="mt-5" name="password" type="password" 
                errors={errors.password}
                value={fields.password}
                showError={showError}
                onChange={handleFieldChange}
                required
                />
              </form>
            </main>
            <footer className="px-4 mt-4 flex justify-end items-center gap-3">
                <SimpleButton
                    className="bg-gray-500 text-white hover:bg-neutral-500 duration-500 font-light rounded-sm"
                    icon="x-close"
                    iconClass="w-4 h-4"
                    type='reset'
                    onClick={hanldeCloseModal}
                >
                    Cancel
                </SimpleButton>
                <LoadingButton
                    className="bg-accent text-white hover:bg-accent-secondary duration-500 font-light rounded-sm"
                    icon="simple-check"
                    type='submit'
                    form="confirmform"
                >
                    Continue
                </LoadingButton>
            </footer>

          </div>
        </Modal>
      }
    </>
  )
}

export default UserPaymentSection