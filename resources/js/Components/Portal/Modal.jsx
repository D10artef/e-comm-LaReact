import React from 'react'
import { createPortal } from 'react-dom'
import Icon from '../Icon'

const Modal = ({children, onClose}) => {
  return createPortal(
    <>
      <div className='absolute inset-0 bg-black bg-opacity-10 z-30 backdrop-blur-sm flex justify-center items-center'
      tabIndex='-1'
      role='dialog'>
        <span className='fixed top-2 right-3 text-white' onClick={onClose}><Icon name='x-close'/></span>
        {children}
      </div>
    </>
  , document.getElementById('portal'))
}

export default Modal