import React from 'react'
import AdminLayout from '../../../Layout/AdminLayout'

const Index = () => {
  return (
    <div>Products</div>
  )
}

Index.layout = page => <AdminLayout title='Product' children={page}/>

export default Index