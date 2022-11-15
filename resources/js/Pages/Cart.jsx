import React, { useState, useEffect } from 'react'
import UserLayout from '../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'
import axios from 'axios'
import { SimpleButton } from '../Components/FormAndButton/Button'
import Modal from '../Components/Portal/Modal'
import Loading from '../Components/Loading'
import MakeOrderSection from '../Components/Cart/MakeOrderSection'
import CartSummary from '../Components/Cart/CartSummary'
import CartItemList from '../Components/Cart/CartItemList'
import DeleteButtonWithConfirmation from '../Components/HOC/Admin/DeleteButtonWithConfirmation'


const EmptyCart = ({text = 'Your cart is empty. Now shop in our site'}) => {
  return(
    <div className='flex flex-1 py-10 text-sm font-medium items-center justify-center text-primary/70'>
      <span>{text}</span>
    </div>
  )
}

const Cart = () => {
  const { user_session } = usePage().props
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  // const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTotal(user_session.data.total)
    setCartItems(user_session.data.cart_items)
    setLoading(false)
  }, [user_session])


  // const openModal = () => {
  //   setShowModal(true)
  // }

  // const closeModal = () => {
  //   setShowModal(false)
  // }

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

  const loadingOrEmpty = loading ? <><Loading/></> : <><EmptyCart /></>

  return (
    <>
      <Head title='Your cart'/>
      <UserLayout>
        <section className='px-6 md:px-8 lg:px-12 py-4 mt-8 md:mt-2 md:py-6'>
          <div className='flex lg:flex-row lg:items-start flex-col lg:gap-x-10 gap-4'>
            <section className='lg:w-2/3 w-full'>
              {/* May be max-h-[48rem] */}
              <main className='overflow-auto scroler max-h-[43rem] py-1 space-y-2 bg-white rounded shadow-xl'>
                {
                  cartItems.length > 0 ?
                  <CartItemList items={cartItems} removeFromCart={removeFromCart} updateItemCart={updateItemCart}/> : loadingOrEmpty
                }
              </main>
              {
                cartItems.length > 0 && 
                <div className='my-4'>
                  <DeleteButtonWithConfirmation text='Empty your cart' url={route('user.cart.delete')}  message='Are you sure to delete all items in your cart?'/>
                </div>
              }
            </section>
            <CartSummary total={total}/>
          </div>
        </section>
        {/* { showModal &&
        <Modal onClose={closeModal}>
          <div className='bg-gray-100 rounded-sm'>
            <header className='px-6 pt-6 pb-3 border-b'>
              <h1 className='text-gray-600 text-sm font-medium'>You try to remove all items in your cart, are you sure ?</h1>
            </header>
            <footer className='px-6 py-3 flex justify-end items-center gap-3'>
              <SimpleButton className='bg-my-neutral text-white hover:bg-my-neutral duration-500 font-light rounded-sm' icon='x-close' iconClass='w-4 h-4' onClick={closeModal}>Cancel</SimpleButton>
              <SimpleButton className='bg-rose-500 text-white hover:bg-red-500 duration-500 font-light rounded-sm' icon='simple-check' onClick={confirmResetCart}>Continue</SimpleButton>
            </footer>
          </div>
        </Modal>
        } */}
      </UserLayout>
    </>
  )
}

export default Cart