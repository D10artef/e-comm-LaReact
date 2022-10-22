import React, { useState, useEffect } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '@inertiajs/inertia-react'
import { SimpleButton } from '../../../Components/FormAndButton/Button'
import OfferTableItem from '../../../Components/Admin/OfferTableItem'
import Pagination from '../../../Components/Pagination'
import {SearchForm} from '../../../Components/FormAndButton/Input'
import { Inertia } from '@inertiajs/inertia'

const Index = () => {
  const { offers } = usePage().props
  const [ dataOffers, setDataOffers ] = useState([])
  const { meta: {links} } = offers

  useEffect(() => {
    setDataOffers(offers.data)
  },[offers])

  const hanldeSearch = (search) => {
    console.log('search offers', search);
    Inertia.get(route('admin.offer'), { search }, {
      only: ['offers'],
      preserveScroll: true,
    })
  }

  return (
    <>
      <div>
        <h1 className="text-2xl mb-1 font-light">Offers</h1>
        <hr className="w-1/4 border border-gray-500 mb-8"/>
        <div className="flex items-center justify-between mb-6">
          <div className='lg:w-72'>
            <SearchForm onSearch={hanldeSearch}>Find offers ...</SearchForm>
          </div>
          <SimpleButton className='bg-accent-secondary hover:bg-accent rounded-sm shadow-sm text-white font-medium'>
            <Link
              href={route('admin.offer')}
            >
              <span>Create</span>
              <span className="hidden md:inline"> Offer</span>
            </Link>
          </SimpleButton>
        </div>

        <div className="overflow-x-auto bg-white rounded shadow mb-8">
          <table className="w-full">
            <thead>
              <tr className="text-sm text-gray-700">
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 max-w-xs">Description</th>
                <th className="px-6 py-3 pb-4">Status</th>
                <th className="px-6 py-3 pb-4">Discount</th>
              </tr>
            </thead>
            <tbody>
              {
                dataOffers.map(offer => <OfferTableItem key={offer.id} offer={offer}/>)
              }
            </tbody>
          </table>
        </div>
        <Pagination links={links}/>
      </div>
    </>
  )
}

Index.layout = page => <AdminLayout title='Product' children={page}/>

export default Index