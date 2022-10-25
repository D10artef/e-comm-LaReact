import React, { useState, useEffect } from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import { usePage } from '@inertiajs/inertia-react'
import {OfferTableItem} from '../../../Components/Admin/AdminTableItem'
import Pagination from '../../../Components/Pagination'
import PageHeader from '../../../Components/Admin/PageHeader'
import { ORDERS } from '../../../UTULITIES/const'
import { Inertia } from '@inertiajs/inertia'
import { TableHead } from '../../../Components/Admin/AdminTableHead'
import { dataOfferHead } from '../../../Components/Admin/tableHeadList'
import { useOrderData } from '../../../Components/HOOKS/useOrderData'

const Index = () => {
  const { offers } = usePage().props
  const [ dataOffers, setDataOffers ] = useState([])
  const [loading, setLoading] = useState(true)
  const [orderData] = useOrderData(['name', 'active', 'discount_percent'])
  
  const { links } = offers.meta 

  useEffect(() => {
    setDataOffers(offers.data)
    setLoading(false)
  },[offers])

  

  return (
    <>
      <div>
        <PageHeader title='Offers' link={route('admin.offer')}/>
        <div className="overflow-x-auto overflow-y-visible bg-white rounded shadow scroler">
          <table className="w-full">
            <TableHead dataHead={dataOfferHead} handleOrder={orderData}/>
            <tbody>
              {
                dataOffers.length > 0 && dataOffers.map(offer => <OfferTableItem key={offer.id} offer={offer}/>)
              }
            </tbody>
          </table>
          
          {
            !loading && dataOffers.length == 0 && 
            <div className='text-sm font-medium flex flex-row justify-center items-center text-gray-500 p-10 text-center'>
              <span>No offer</span>
            </div>
          }

        </div>
        <Pagination links={links} arrayOnly={['offers']}/>
      </div>
    </>
  )
}

Index.layout = page => <AdminLayout title='Admin - Offers' children={page}/>

export default Index