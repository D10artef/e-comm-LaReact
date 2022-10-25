import React, {useState, useEffect} from 'react'
import { Link } from '@inertiajs/inertia-react'
import { SearchForm } from '../FormAndButton/Input'
import { SimpleButton } from '../FormAndButton/Button'
import { Inertia } from '@inertiajs/inertia'
import PageTitle from './PageTitle'
import Icon from '../Icon'

const PageHeader = ({ title, link}) => {
  const [querySearch, setQuerySearch] = useState('')
  const titlelower = title.toLowerCase()
  const queryString = window.location.search

  const urlParams = new URLSearchParams(queryString)

  useEffect(() => {
    setQuerySearch(urlParams.get('search'))
  },[])

  const hanldeSearch = (search) => {
    Inertia.get(route(route().current()), { search }, {
      only: [titlelower],
      preserveScroll: true,
    })
  }

  const deleteSearch = () => {
    Inertia.get(route(route().current()), {} ,{
      only: [titlelower],
      preserveScroll: true,
    })
    setQuerySearch('')
  }


  return (
    <>
      <PageTitle title={title}/>
      <div className="flex items-center gap-x-3">
        <div className='lg:w-72'>
          <SearchForm onSearch={hanldeSearch}>{`Find ${title} ...`}</SearchForm>
        </div>
        {
          querySearch && 
          <span className='inline-flex px-2 items-center py-0.5 text-sm gap-2 border rounded-sm shadow-sm'>
            {querySearch}
            <Icon name='x-close' className='h-3 w-3 cursor-default opacity-50' onClick={deleteSearch}/>
          </span>
        }
      </div>
      <div className="flex justify-end mb-3">
        {
          link && 
          <SimpleButton className='bg-accent self-start hover:bg-accent/75 rounded-sm shadow-sm text-white font-medium'>
            <Link
              href={link}
            >
              <span>Create</span>
              <span className="hidden md:inline ml-1">{title.slice(0,-1)}</span>
            </Link>
          </SimpleButton>
        }
      </div>
    </>
  )
}

export default PageHeader