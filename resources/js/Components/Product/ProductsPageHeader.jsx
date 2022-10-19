import React, { useState, useEffect } from 'react'
import Select from '../FormAndButton/Select'
import { options } from './selectOptions'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

const ProductsPageHeader = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const url = usePage().url
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)

  useEffect(() => {
    if(urlParams.has('orderby')){
      const data = {
        orderby: urlParams.get('orderby'),
        order: urlParams.get('order'),
      }
      
      let index = options.findIndex(option => {
        if(option.name === data.orderby && option.order === data.order){
          return option
        }
      }) 
      if (index < 0) index = 0
      setSelectedIndex(() => index);
    }
  }, [url])

  const handleOptionSelected = (id) => {
    const name = options[id].name
    const order = options[id].order
    Inertia.get(url, 
      {
        orderby: name, order
      }, 
      {
        preserveScroll: true,
        preserveState: true,
        only: ['products'],
      })
  }

  return (
    <div>
      <div className='flex justify-start items-center gap-x-3 w-fit py-2 mb-3'> 
          <span className='text-sm'>Order by </span>     
          <div className='w-48 text-sm'>
            <Select optionList={options} onOptionSelected={handleOptionSelected} selectedIndex={selectedIndex}></Select>
          </div>
      </div>
    </div>
  )
}

export default ProductsPageHeader