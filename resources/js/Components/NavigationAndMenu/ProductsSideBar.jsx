import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import ProductsMenu from './ProductsMenu'
import ProductsMenuItem from './ProductsMenuItem'

const ProductsSideBar = ({ categories, offers }) => {
  const [hideMenu, setHideMenu] = useState(true)
  const [activeMenu, setActiveMenu] = useState({
    category: 0,
    offer: 0,
  })

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  
  useEffect(() => {
    if(urlParams.has('category')){
      setActiveMenu(prev => ({
        ...prev, category: parseInt(urlParams.get('category'), 10)
      }))
    }
    else{
      setActiveMenu(prev => ({
        ...prev, category: 0
      }))
    }
    if(urlParams.has('offer')){
      setActiveMenu(prev => ({
        ...prev, offer: parseInt(urlParams.get('offer'),10)
      }))
    }
    else{
      setActiveMenu(prev => ({
        ...prev, offer: 0
      }))
    }
  }, [queryString])

  const divClassName = classNames(
    'w-56 shrink-0 h-full fixed lg:relative bg-white z-20',
    'transition ease-in-out duration-500',
    'lg:translate-x-0',
    {'-translate-x-full': hideMenu },
    {'translate-x-0' : !hideMenu}
  )
  const iconClassName = classNames(
    'text-gray-500 h-4 w-4 ',
    'transition ease-in-out duration-500',
    {'rotate-180': !hideMenu}
  )

  const handleClick = () => {
    setHideMenu(!hideMenu)
  }

  return (
    <div className={divClassName}>
      <button className='absolute -right-8 bg-white p-2 shadow inline-block lg:hidden' onClick={handleClick}>
        <Icon name='chevron-double-right' className={iconClassName}/>
      </button>
      <div className='flex-col flex'>
        <ProductsMenu activeMenu={activeMenu.category}  menuTitle='Categories' menuList={categories} icon='view-board' type='category' setHideMenu={setHideMenu}>
        </ProductsMenu>
        <ProductsMenu activeMenu={activeMenu.offer} menuTitle='Offers' color='lime'  menuList={offers} icon='offer' type='offer' setHideMenu={setHideMenu}></ProductsMenu>
      </div>
    </div>
  )
}

export default ProductsSideBar