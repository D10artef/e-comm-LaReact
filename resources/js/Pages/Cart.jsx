import React, { useState, useEffect } from 'react'
import UserLayout from '../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'
import { showPriceWithCurrency } from '../UTULITIES/productFunction'
import CartTable from '../Components/Cart/CartTable'
import axios from 'axios'
import { SimpleButton } from '../Components/FormAndButton/Button'
import Modal from '../Components/Portal/Modal'
import Loading from '../Components/Loading'
import UserPaymentSection from '../Components/Cart/UserPaymentSection'

const Cart = () => {
  const { user_session } = usePage().props
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTotal(user_session.data.total)
    setCartItems(user_session.data.cart_items)
    setLoading(false)
  }, [user_session])


  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const updateItemCart = async (id, operation) => {
    await axios.put(route('user.cart.update-item', id), {
      operation: operation,
    }).then((res) => {
      setCartItems(() => res.data.data.cart_items)
      setTotal(() => res.data.data.total)
    })
    .catch(err => console.log())
  }

  const removeFromCart = async (id) => {
    await axios.delete(route('user.cart.remove-item', id))
    .then((res) => {
      setCartItems(() => res.data.data.cart_items)
      setTotal(() => res.data.data.total)
    })
    .catch((err) => console.log(err))
  }

  const resetCart = () => {
    openModal()
  }

  const confirmResetCart = async () => {
    await axios.delete(route('user.cart.delete'))
    .then(res => {
      setCartItems(() => res.data.data.cart_items)
      setTotal(() => res.data.data.total)
      closeModal()
    })
    .catch(err => console.log(err))
  }

  const loadingOrEmpty = loading ? <><Loading/></> :
    <div className='flex flex-1 py-10 text-sm items-center justify-center text-primary'>
      <span>Your cart is empty. Now shop in our site and get your</span>
    </div>

  return (
    <>
      <Head title='Your cart'/>
      <UserLayout>
        <section className='px-4 md:px-8 lg:px-12 py-4 md:py-6'>
          <div className='flex justify-between items-center pb-2 border-b-2 border-slate-200 text-sm'>
            <h1 className='font-medium text-neutral-700'>Your cart</h1>
            <p className='font-bold text-neutral-700'>Total: <span className=' text-accent-secondary'>{showPriceWithCurrency(total)}</span></p>
          </div>
          { cartItems.length > 0 ?
          <main className='mt-4 flex flex-col md:flex-row gap-y-3 gap-x-5'>
            <div className='flex-1'>
              <div className='overflow-auto scroler max-h-96 relative'>
                <CartTable items={cartItems} removeFromCart={removeFromCart} updateItemCart={updateItemCart}/>
              </div>
              <div className='my-4'>
                <SimpleButton className='bg-rose-500 text-white hover:bg-red-500 duration-500 font-light rounded-sm' icon='trash' onClick={resetCart}>Empty your cart</SimpleButton>
              </div>
            </div>
            <div className='w-full md:max-w-xs lg:max-w-sm'>
              <UserPaymentSection/>
            </div>
          </main>
          :
          loadingOrEmpty
          }
        </section>
        { showModal &&
        <Modal onClose={closeModal}>
          <div className='bg-gray-100 rounded-sm'>
            <header className='px-6 pt-6 pb-3 border-b'>
              <h1 className='text-gray-600 text-sm font-medium'>You try to remove all items in your cart, are you sure ?</h1>
            </header>
            <footer className='px-6 py-3 flex justify-end items-center gap-3'>
              <SimpleButton className='bg-gray-500 text-white hover:bg-neutral-500 duration-500 font-light rounded-sm' icon='x-close' iconClass='w-4 h-4' onClick={closeModal}>Cancel</SimpleButton>
              <SimpleButton className='bg-rose-500 text-white hover:bg-red-500 duration-500 font-light rounded-sm' icon='simple-check' onClick={confirmResetCart}>Continue</SimpleButton>
            </footer>
          </div>
        </Modal>
        }
      </UserLayout>
    </>
  )
}

export default Cart