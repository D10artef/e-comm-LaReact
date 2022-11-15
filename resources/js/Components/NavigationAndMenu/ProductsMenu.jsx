import React from 'react'
import Icon from '../Icon'
import ProductsMenuItem from './ProductsMenuItem'
import { usePage } from '@inertiajs/inertia-react'

const ProductsMenu = ({ menuTitle, menuList, activeMenu, icon, color = 'accent', type , children, ...props}) => {
  const colors = {
    accent:{
      bg: 'bg-accent',
      bg_item: 'bg-accent/10',
      bg_item_hover: 'hover:bg-accent/10'
    },
    lime: {
      bg: 'bg-lime-600',
      bg_item: 'bg-lime-100',
      bg_item_hover: 'hover:bg-lime-100'
    }
  }
  let url = usePage().url
  const components = usePage().component
  if(components === 'Product')
  {
    url = route('products')
  }
  const className = `text-sm font-medium px-4 py-2.5 flex items-center justify-between text-white ${colors[color].bg}`
  return (
    <div className='border-b pb-3'>
      <h1 className={className}>
        <span>{menuTitle}</span>
        <Icon name={icon}/>
      </h1>
      <ul className='flex flex-col text-sm  text-primary'>
        {children}
        { menuList.length > 0 && menuList.map(menuItem => 
            <ProductsMenuItem 
            key={menuItem.id} 
            link={url} id={menuItem.id} type={type}
            classNames={`${colors[color].bg_item_hover} ${menuItem.id === activeMenu ? colors[color].bg_item : ''}`}
            {...props}
            text={menuItem.name}
            />) 
          }
      </ul>
    </div>
  )
}

export default React.memo(ProductsMenu, (prev, next) => prev.activeMenu === next.activeMenu)