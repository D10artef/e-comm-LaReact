import React from 'react'
import AdminMenuItem from './AdminMenuItem'

const AdminMenu = ({className}) => {
  return (
    <div className={className}>
      <AdminMenuItem text="Dashboard" link="login" icon="collection" />
      <AdminMenuItem text="Orders" link="login" icon="shopping-cart" />
      <AdminMenuItem text="Categories" link="login" icon="view-board" />
      <AdminMenuItem text="Offers" link="login" icon="offer" />
      <AdminMenuItem text="Products" link="login" icon="template" />
    </div>
  )
}

export default AdminMenu