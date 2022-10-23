import React from 'react'
import AdminLayout from '../../Layout/AdminLayout'
import PageTitle from '../../Components/Admin/PageTitle'

const Dashboard = () => {
  return (
    <>
      <PageTitle title='Dashboard'/>
    </>
  )
}

Dashboard.layout = page => <AdminLayout title="Dashboard" children={page} />;

export default Dashboard