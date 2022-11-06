import React from 'react'
import Icon from '../../Components/Icon'
import InformationSection from './InformationSection'

const UserInfoSection = ({info}) => {
  return (
    <InformationSection title='User information' editable={true}>
      <aside className='text-sm flex flex-col sm:flex-row lg:flex-col justify-between gap-y-2'>
        <section >
          <h1 className='text-base font-light uppercase'>{info.firstname}</h1>
          <h1>{info.lastname}</h1>
          <div className='flex flex-nowrap gap-x-3 mt-2 items-center  text-gray-600'>
            <Icon name='phone'/>
            <span className='font-light'>{info.phone}</span>
          </div>
        </section>
        <section className='text-gray-600 flex flex-nowrap gap-x-3 items-center'>
          <Icon name='location-marker'/>
          <div>
            <p>{info.address}</p>
            <p><span className=''>{info.postal_code},</span>{` ${info.city}`}</p>
            <p>{info.country}</p>
          </div>
        </section>
      </aside>
    </InformationSection>
  )
}

export default UserInfoSection