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
          <div className='grow px-4 py-3 w-full bg-neutral-100 min-h-screen'>
            { children }
          </div>
        </div>
      </UserLayout>
    </>
  )
}

export default ProductLayout