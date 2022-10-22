import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'

const Index = () => {
  return (
    <div>Orders</div>
  )
}

Index.layout = page => <AdminLayout title='Product' children={page}/>

export default Index