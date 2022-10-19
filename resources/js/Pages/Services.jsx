import React from 'react'
import UserLayout from '../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'
import ServiceSection from '../Components/Service/ServiceSection'
import { usePage } from '@inertiajs/inertia-react'

const Services = () => {
  const { services } = usePage().props
  return (
    <>
      <Head title='Services'/>
      <UserLayout>
        <div className="p-8">
          { 
            services && services?.data.map((service, index) => {
              const reverse = index % 2 == 0 ? false : true
              return <ServiceSection key={service.id} service={service} reverse={reverse}/>
            })
          }
        </div>
      </UserLayout>
    </>
  )
}
export default Services