import React from 'react'
import WithConfirmDeletion from '../WithConfirmDeletion'
import Icon from '../../Icon'

const DeleteIconWithConfirmation = ({openConfirmation}) => {
  return (
    <Icon name='trash' onClick={openConfirmation}/>
  )
}

export default WithConfirmDeletion(DeleteIconWithConfirmation)