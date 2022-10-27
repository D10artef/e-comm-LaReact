import React, {useState, useEffect} from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import PageHeader from '../../../Components/Admin/PageHeader'
import { usePage } from '@inertiajs/inertia-react'
import { TableHead } from '../../../Components/Admin/AdminTableHead'
import { dataCategoryHead } from '../../../Components/Admin/tableHeadList'
import { useOrderData } from '../../../Components/HOOKS/useOrderData'
import { CategoryTableItem } from '../../../Components/Admin/AdminTableItem'
import Modal from '../../../Components/Portal/Modal'
import NewCategory from './New'
import { useModal } from '../../../Components/HOOKS/useModal'

const Index = () => {
  const [dataCategories, setDataCategories] = useState([])
  const { categories } = usePage().props
  const [loading, setLoading] = useState(true)
  const [orderData] = useOrderData(['name','created_at'], 'categories')
  const [showModal, openModal, closeModal] = useModal(false)
  const { links } = categories.meta 
  
  useEffect(() => {
    setDataCategories(categories.data)
    setLoading(false)
  }, [categories])

  
  return (
    <>
      <div>
        <PageHeader title='Categories' createAction={openModal}/>
        <div className="overflow-x-auto overflow-y-visible bg-white rounded shadow scroler">
          <table className="w-full table-fixed">
            <TableHead handleOrder={orderData} dataHead={dataCategoryHead}/>
            <tbody>
              {
                dataCategories.length > 0 
                && dataCategories.map(category => <CategoryTableItem key={category.id} category={category}/>)
              }
            </tbody>
          </table>
          
          {
            !loading && dataCategories.length == 0 && 
            <div className='text-sm font-medium flex flex-row justify-center items-center text-gray-500 p-10 text-center'>
              <span>No category</span>
            </div>
          }

        </div>
      </div>
      {
        showModal && 
        <Modal onClose={closeModal} >
          <NewCategory closeModal={closeModal}/>
        </Modal>
      }
    </>
  )
}

Index.layout = page => <AdminLayout title='Admin - Categories' children={page}/>

export default Index