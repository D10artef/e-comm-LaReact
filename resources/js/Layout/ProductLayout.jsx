import React, { useMemo , useEffect } from 'react'
import UserLayout from './UserLayout'
import ProductsSideBar from '../Components/NavigationAndMenu/ProductsSideBar'
import { usePage } from '@inertiajs/inertia-react'

const ProductLayout = ({children}) => {
  const { categories, offers } = usePage().props
  const categoriesData = useMemo(() => categories.data, [categories]);
  const offersData = useMemo(() => offers.data, [offers]);

  return (
    <>
      <UserLayout>
        <div className='flex flex-row relative'>
          <ProductsSideBar categories={categoriesData} offers={offersData}/>
          <div className='ml-0 lg:ml-56 grow w-full bg-background min-h-screen'>
            { children }
          </div>
        </div>
      </UserLayout>
    </>
  )
}

export default ProductLayout