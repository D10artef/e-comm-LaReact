import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import PageHeader from '../../../Components/Admin/PageHeader'

const Index = () => {
  return (
    <>
      <div>
        <PageHeader title='Categories' link={route('admin.category')}/>
      </div>
    </>
  )
}

Index.layout = page => <AdminLayout title='Product' children={page}/>

export default Index