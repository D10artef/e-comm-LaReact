import React from 'react'
import PageTitle from '../../../Components/Admin/PageTitle'
import { usePage } from '@inertiajs/inertia-react'
import AdminLayout from '../../../Layout/AdminLayout'
import { ButtonBack } from '../../../Components/FormAndButton/Button'
import { SimpleButton } from '../../../Components/FormAndButton/Button'
import DeleteButtonWithConfirmation from '../../../Components/HOC/Admin/DeleteButtonWithConfirmation'
import AdminProductCard from '../../../Components/Product/AdminProductCard'
import Pagination from '../../../Components/Pagination'

const Show = () => {
  const {category, products} = usePage().props
  const {links} = products.meta
  const removeProductFromCategory = () => {

  }

  return (
    <>
      <div>
        <PageTitle title='Category'/>
        <div className='mb-4'>
          <ButtonBack />
        </div>
        <div className='grid grid-cols-3 gap-2 md:gap-x-5 p-3 border rounded sgadow-sm mb-3'>
          <div className='col-span-3'>
            <h1 className='font-medium text-primary'>{ category.data.name }</h1>
            <p className='my-2 text-sm text-gray-700 text-justify'>{ category.data.description }</p>
          </div>
          <div className='col-span-2 col-start-2'>
            <div className='flex justify-end gap-x-3'>
              <SimpleButton className='bg-cyan-400 hover:bg-cyan-500 text-white rounded-sm' icon='pencil-alt'>Update</SimpleButton>
              <DeleteButtonWithConfirmation url={route('admin.category.delete', category.data.id)} message='Are you sure you want to delete this category?'/>  
            </div>
          </div>
        </div>
        <div className='text-secondary'>
          <p className='text-sm'>
          List of products under this category 
          {/* <span className='font-medium text-gray-800'>{` (${offer.data.products_count} products)`}</span> */}
          </p>
          <div className='my-3 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1'>
            {
              products.data.length > 0 && 
              products.data.map(product => <AdminProductCard key={product.id} product={product} removeItem={removeProductFromCategory}/>)
            }
          </div>
          <Pagination links={links} arrayOnly={['products']}/>
        </div>
      </div>
    </>
  )
}

Show.layout = page => <AdminLayout title='Admin - Category' children={page}/>

export default Show