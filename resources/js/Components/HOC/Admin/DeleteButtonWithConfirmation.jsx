import React from 'react'
import WithConfirmDeletion from '../WithConfirmDeletion'
import { SimpleButton } from '../../FormAndButton/Button'

const DeleteButtonWithConfirmation = ({openConfirmation}) => {
  return (
    <SimpleButton className='bg-rose-500 text-white hover:bg-red-500  rounded-sm' icon='trash' onClick={openConfirmation}>Delete</SimpleButton>
  )
}

export default WithConfirmDeletion(DeleteButtonWithConfirmation);