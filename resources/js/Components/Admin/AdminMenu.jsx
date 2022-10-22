import React from 'react'
import AdminMenuItem from './AdminMenuItem'
import { ADMIN_SIDE_MENU_LIST } from './adminMenuList'

const AdminMenu = ({className}) => {
  const getActive = (link) => route().current(link + '*');
  return (
    <div className={className}>
      {
        ADMIN_SIDE_MENU_LIST.map(menu => <AdminMenuItem key={menu.text} text={menu.text} link={menu.route} icon={menu.icon} isActive={getActive(menu.route)}/>)
      }
    </div>
  )
}

export default AdminMenu