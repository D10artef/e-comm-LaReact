import React from 'react'
import { TextInput } from '../FormAndButton/Input'

const DestinationPaymentSection = ({userInfo, setUserInfo}) => {
  return (
    <>
      <div className="flex gap-x-2">
        <TextInput
        name="firstname" type="text" 
        value={userInfo.firstname}
        onChange={setUserInfo}
        placeholder='Firstname'
        className='flex-1'
        required
        />
        <TextInput
          name="lastname" type="text" 
          value={userInfo.lastname}
          onChange={setUserInfo}
          placeholder='Lastname'
          className='flex-1'
          />
      </div>
      <div className="flex gap-x-2">
        <TextInput
        name="address" type="text" 
        value={userInfo.address}
        onChange={setUserInfo}
        placeholder='Address'
        className='flex-1 w-2/3'

        required
        />
        <TextInput
          name="postal_code" type="text" 
          value={userInfo.postal_code}
          onChange={setUserInfo}
          placeholder='Postal code'
          className='w-1/3'
          />
      </div>
      <div className="flex gap-x-2">
        <TextInput
          name="city" type="text" 
          value={userInfo.city}
          onChange={setUserInfo}
          placeholder='City'
          className='flex-1'
          required
        />
        <TextInput
          name="country" type="text" 
          value={userInfo.country}
          onChange={setUserInfo}
          placeholder='State|Country'
          className='flex-1'
          required
        />
      </div>
      </>
  )
}

export default DestinationPaymentSection