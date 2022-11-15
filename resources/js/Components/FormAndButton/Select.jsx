import React, { useState, useCallback, useEffect } from 'react'
import SelectItem from './SelectItem'
import classNames from 'classnames'

const Select = ({optionList, onOptionSelected, selectedIndex}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0)

  const toggleSelect = useCallback(() => 
    setIsOpen(!isOpen), [])

  const handleOptionClick = (id) => {
    setIsOpen(false)
    setSelectedOption(id)
    onOptionSelected(id)
  }

  useEffect(() => {
    setSelectedOption(selectedIndex)
  },[selectedIndex])

  const buttonClass = classNames(
    'border-0 rounded bg-white w-full px-5 py-1.5 relative text-left hover:cursor-pointer select-button',
    {'expanded' : isOpen}
  )

  return (
    <div className='flex justify-center w-full'>
      <div className='w-full relative'>
        <button type='button'
         onClick={toggleSelect} 
         aria-haspopup='listbox' 
         aria-expanded={isOpen}
         className={buttonClass}
         >
          {optionList[selectedOption]?.text}
        </button>
        <ul className={`absolute top-10 z-30 w-full bg-light border shadow list-none -mt-1 ${isOpen ? 'block': 'hidden'}`} 
          tabIndex={-1} 
          role='listbox' 
          aria-activedescendant={optionList[selectedOption].text}
          >
          { 
            optionList.map((option, index)=> (
              <SelectItem key={option.id} option={option} selected={selectedOption === index} onOptionClick={() => handleOptionClick(index)}/>
            )) 
          }
        </ul>
      </div>
      <div onClick={() => {setIsOpen(false);}} className={`fixed inset-0 z-30 bg-transparent opacity-10 ${isOpen ? '' : 'hidden'}`}></div>
    </div>
  )
}

export default Select