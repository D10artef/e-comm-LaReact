import React from 'react'

const SelectItem = ({option, selected, onOptionClick}) => {
  return (
    <li 
      className='px-5 py-1.5 font-light hover:bg-my-neutral duration-300'
      tabIndex={0} 
      id={option.id} 
      role='option' 
      aria-selected={selected}
      onClick={onOptionClick}
      >
        {option.text}
    </li>
  )
}

export default SelectItem