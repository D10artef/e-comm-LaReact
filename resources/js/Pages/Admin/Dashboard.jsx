import React from 'react'
import AdminLayout from '../../Layout/AdminLayout'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

Dashboard.layout = page => <AdminLayout title="Dashboard" children={page} />;

export default Dashboard