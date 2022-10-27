import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'
import PageHeader from '../../../Components/Admin/PageHeader'

const Index = () => {
  return (
    <>
      <div>
        <PageHeader title='Products' link={route('admin.product')}/>
      </div>
    </>
  )
}

Index.layout = page => <AdminLayout title='Admin - Products' children={page}/>

export default Index