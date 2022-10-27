import React from 'react'
import PageTitle from '../../../Components/Admin/PageTitle'
import { usePage } from '@inertiajs/inertia-react'
import AdminLayout from '../../../Layout/AdminLayout'
import { ButtonBack } from '../../../Components/FormAndButton/Button'
import DeleteButtonWithConfirmation from '../../../Components/HOC/Admin/DeleteButtonWithConfirmation'
import { SimpleButton } from '../../../Components/FormAndButton/Button'
import AdminProductCard from '../../../Components/Product/AdminProductCard'
import { Inertia } from '@inertiajs/inertia'
import Pagination from '../../../Components/Pagination'

const Show = () => {
  const {offer, products} = usePage().props
  const active = offer.data.active ? 'Active' : 'Not active'
  const {links} = products.meta
  const removeProductFromOffer = ( product_id) => {
    Inertia.put(route('admin.offer.remove.product', offer.data.id),
      {
      product_id, 
      },
    )
  }
  
  return (
    <>
      <div>
        <PageTitle title='Offer'/>
        <div className='mb-4'>
          <ButtonBack />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 border rounded shadow-sm mb-3'>
          <div className="flex flex-col p-3 gap-1.5">
            <div className="flex justify-between items-center">
              <h1 className='font-medium text-primary'>{ offer.data.name }</h1>
            </div>
            <div className="flex justify-between wrap gap-2">
              <span className='text-sm font-bold text-gray-600 my-2 whitespace-nowrap'>{`Discount: ${offer.data.discount_percent} %`}</span>
              <h1 className={`font-medium text-sm ${offer.data.active ? 'text-teal-600' : 'text-rose-600 '} text-uppercase`}>{active}</h1>
            </div>
            <p className='my-2 text-sm text-gray-700 text-justify'>{ offer.data.description }</p>
            <div className='flex justify-center gap-x-3 self-end justify-self-end'>
              <SimpleButton className='bg-cyan-400 hover:bg-cyan-500 text-white rounded-sm' icon='pencil-alt'>Update</SimpleButton>
              <DeleteButtonWithConfirmation url={route('admin.offer.delete', offer.data.id)}  message='Are you sure you want to delete this offer?'/>  
              {/* <span className='text-rose-600 hover:text-rose-500 cursor-pointer'>
                <DeleteIconWithConfirmation url={route('admin.offer.delete', offer.data.id)} message='Delete this offer?'/> 
              </span> */}
            </div>
          </div>
          {
            offer.data.illustration && 
            <div className='relative  overflow-hidden'>
              <img src={`/storage/${offer.data.illustration}`} alt="illustration" className='object-cover max-h-56 w-full' />
            </div>
          }
        </div>

        <div className='text-secondary'>
          <p className='text-sm'>
          List of products that are subject to this offer 
          <span className='font-medium text-gray-800'>{` (${offer.data.products_count} products)`}</span>
          </p>
          <div className='my-3 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1'>
            {
              products.data.length > 0 && 
              products.data.map(product => <AdminProductCard key={product.id} product={product} removeItem={removeProductFromOffer}/>)
            }
          </div>
          <Pagination links={links} arrayOnly={['products']}/>
        </div>
      </div>
    </>
  )
}

Show.layout = page => <AdminLayout title='Admin - Offer' children={page}/>

export default Show