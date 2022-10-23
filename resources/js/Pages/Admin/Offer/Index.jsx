import React, { useState, useEffect } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { usePage } from '@inertiajs/inertia-react'
import {OfferTableItem} from '../../../Components/Admin/AdminTableItem'
import Pagination from '../../../Components/Pagination'
import PageHeader from '../../../Components/Admin/PageHeader'

const Index = () => {
  const { offers } = usePage().props
  const [ dataOffers, setDataOffers ] = useState([])
  const { meta: {links} } = offers

  useEffect(() => {
    setDataOffers(offers.data)
  },[offers])

  return (
    <>
      <div>
        <PageHeader title='offers' link={route('admin.offer')}/>
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