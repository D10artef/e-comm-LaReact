import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { SimpleButton, LoadingButton } from '../FormAndButton/Button'
import Modal from '../Portal/Modal'
import { TextInput } from '../FormAndButton/Input'
import {useModal} from '../HOOKS/useModal'
import { Inertia } from '@inertiajs/inertia'
import { useFormInput } from '../HOOKS/useFormField'
import UserPaymentSection from './UserPaymentSection'
import DestinationPaymentSection from './DestinationPaymentSection'

const MakeOrderSection = () => {
  const {user_payments, errors } = usePage().props
  const [showModal, openModal, closeModal] = useModal(false)
  const [showError, setShowError] = useState(false)
  const [activeUserPayement, setActiveUserPayement] = useState(0);
  const [fields, handleFieldChange] = useFormInput({
    'password': ''
  })

  const [userInfo, setUserInfo] = useFormInput({
    'firstname': '',
    'lastname': '',
    'phone': '',
    'address': '',
    'city': '',
    'country': '',
    'postal_code':'',
  })
  
  const handleSelectPayment = (id) => {
    setActiveUserPayement(id)
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
      {/* <div className='p-3 shadow-sm bg-neutral-50 border-2 border-accent/50 '> */}
        <h1 className='font-medium text-primary uppercase text-center mb-2'>Make your order</h1>
        {/* <hr className='w-1/2 m-auto'/> */}
        <main className='flex flex-col md:flex-row lg:flex-col gap-x-6'>
          <div>
            <h1 className='text-accent text-sm mt-3'>Please select a payement method</h1>
            <hr className='w-1/2 mb-3 mt-1'/>

            <div className="my-2">
              <UserPaymentSection userPayements={user_payments?.data} activeUserPayement={activeUserPayement} handleSelectPayment={handleSelectPayment}/>
            </div>
          </div>
          {
            activeUserPayement !== 0 && 
            <div className='flex-1'>
              <h1 className='text-accent text-sm mt-3'>Order destination</h1>
              <hr className='w-1/2 mb-3 mt-1'/>

              <div className='flex flex-col gap-y-2'>
                <DestinationPaymentSection userInfo={userInfo} setUserInfo={setUserInfo} />
              </div>
            </div>
          }
        </main>
        
        {
          activeUserPayement !== 0 &&
          <div className='flex justify-end mt-3'>
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
              <p className='text-my-neutral'>Before processing, please enter your password</p>
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
                    className="bg-gray-500 text-white hover:bg-my-neutral duration-500 font-light rounded-sm"
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

export default MakeOrderSection