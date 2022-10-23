import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import { SearchForm } from '../FormAndButton/Input'
import { SimpleButton } from '../FormAndButton/Button'
import { Inertia } from '@inertiajs/inertia'
import PageTitle from './PageTitle'

const PageHeader = ({ title, link }) => {
  const titlelower = title.toLowerCase()

  const hanldeSearch = (search) => {
    Inertia.get(route(route().current()), { search }, {
      only: [titlelower],
      preserveScroll: true,
    })
  }
  return (
    <>
      <PageTitle title={title}/>
      <div className="flex items-center justify-between mb-6">
        <div className='lg:w-72'>
          <SearchForm onSearch={hanldeSearch}>{`Find ${title} ...`}</SearchForm>
        </div>
        {
          link && 
          <SimpleButton className='bg-accent-secondary hover:bg-accent rounded-sm shadow-sm text-white font-medium'>
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