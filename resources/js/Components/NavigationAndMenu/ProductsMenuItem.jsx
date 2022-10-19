import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const ProductsMenuItem = ({id, text, link, type , classNames, setHideMenu, saveState = true }) => {
  const data = (type, id) => {
    if(type === 'category'){
      return {
        'category' : id,
        'page': 1
      }
    }else if(type === 'offer'){
      return {
        'offer' : id,
        'page' : 1
      }
    }
    return {}
  }
  return (
    <>
      <li className={`text-sm ${classNames} block border-b border-white`}>
        <Link className='block px-3 py-2 cursor-pointer first-letter:uppercase first-letter:font-medium first-letter:text-secondary' href={link} 
        data={data(type, id)} 
        only={['products']} 
        preserveScroll
        preserveState={saveState}
        onClick = {() => setHideMenu(true)}
        >
          {text}
        </Link>
      </li>
    </>
  )
}


const isEqual = (prev, next) => {
  if(prev.text === next.text &&
    prev.type === next.type &&
    prev.link === next.link &&
    prev.classNames === next.classNames)
    return true
  return false
}

export default React.memo(ProductsMenuItem, isEqual)

