import React from 'react'
import PageTitle from '../../../Components/Admin/PageTitle'
import { usePage } from '@inertiajs/inertia-react'
import AdminLayout from '../../../Layout/AdminLayout'
import { ButtonBack } from '../../../Components/FormAndButton/Button'
import { SimpleButton } from '../../../Components/FormAndButton/Button'
import DeleteButtonWithConfirmation from '../../../Components/HOC/Admin/DeleteButtonWithConfirmation'

const Show = () => {
  const {offer} = usePage().props
  const active = offer.data.active ? 'Active' : 'Not active'
  
  return (
    <>
      <div>
        <PageTitle title='Offer'/>
        <div className='mb-4'>
          <ButtonBack />
        </div>
        <div className='grid grid-cols-3 gap-2 md:gap-x-5 p-3 border rounded sgadow-sm mb-3'>
          <div className='col-span-2'>
            <h1 className='font-medium text-primary'>{ offer.data.name }</h1>
            <p className='my-2 text-sm text-gray-700 text-justify'>{ offer.data.description }</p>
          </div>
          <div className='text-right'>
            <h1 className='font-medium text-sm text-accent-secondary text-uppercase'>{active}</h1>
            <span className='text-sm font-bold my-2'>{`Dicsount: ${offer.data.discount_percent} %`}</span>
          </div>
          <div className='col-span-2 col-start-2'>
            <div className='flex justify-end gap-x-3'>
              <SimpleButton className='bg-cyan-400 hover:bg-cyan-500 text-white rounded-sm' icon='pencil-alt'>Update</SimpleButton>
              <DeleteButtonWithConfirmation url={route('admin.offer.delete', offer.data.id)} />  
            </div>
          </div>
        </div>
        <div className='text-secondary'>
          <p className='text-sm'>
          List of products that are subject to this offer 
          <span className='font-medium text-gray-800'>{` (${offer.data.products_count} products)`}</span>
          </p>
        </div>
      </div>
    </>
  )
}

Show.layout = page => <AdminLayout title='Admin - Offer' children={page}/>

export default Show