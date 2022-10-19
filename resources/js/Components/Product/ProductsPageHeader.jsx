import React, { useState, useEffect } from 'react'
import Select from '../FormAndButton/Select'
import { options } from './selectOptions'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import MemoLink from '../MemoLink'

const ProductsPageHeader = ({showSelect}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [title, setTitle] = useState('Products')
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
  }, [queryString])

  useEffect(() => {
    if(urlParams.has('search')){
      const title = `Result of  "${urlParams.get('search')}"`;
      setTitle(title)
    }
  }, [queryString])


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
      <div className='ml-5 lg:ml-0 grid grid-cols-2'>
        <span className='text-sm font-medium underline text-gray-600 justify-self-start'>{title}</span>
        {
          url !== '/products' && 
          <MemoLink className='text-sm text-accent font-medium hover:text-accent-secondary underline justify-self-end' href={route('products')} only={['products']} preserveScroll>Reset</MemoLink>
        }
      </div>
      <div className='border-b  border- mb-2'>
        {
          showSelect && 
          <div className='flex justify-start items-center gap-x-3 w-fit py-1.5  text-gray-600'> 
            <span className='text-sm'>Order by </span>     
            <div className='w-48 text-sm'>
              <Select optionList={options} onOptionSelected={handleOptionSelected} selectedIndex={selectedIndex}></Select>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductsPageHeader