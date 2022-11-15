import React, { useState, useEffect } from 'react'
import Select from '../FormAndButton/Select'
import { ORDEROPTIONS } from './selectOptions'
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
      
      let index = ORDEROPTIONS.findIndex(option => {
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
    const name = ORDEROPTIONS[id].name
    const order = ORDEROPTIONS[id].order
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
    <div className='px-4 pt-4 pb-3 shadow bg-light'>
      <div className='ml-5 lg:ml-0 grid grid-cols-2'>
        <span className='text-sm font-medium underline text-accent justify-self-start'>{title}</span>
        {
          url !== '/products' && 
          <MemoLink className='text-sm text-accent-secondary font-medium hover:text-accent-secondary underline justify-self-end' href={route('products')} only={['products']} preserveScroll>Reset</MemoLink>
        }
      </div>
      <div>
        {
          showSelect && 
          <div className='flex justify-start items-center gap-x-3 w-fit pt-2  text-primary'> 
            <span className='text-sm'>Order by </span>     
            <div className='w-44 text-sm border rounded'>
              <Select optionList={ORDEROPTIONS} onOptionSelected={handleOptionSelected} selectedIndex={selectedIndex}></Select>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductsPageHeader