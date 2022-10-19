import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid = ({products, loading}) => {
  let grid ;
  if(loading){
    grid = 
    <div className='p-12 flex justify-center items-center'>
      <span className='text-sm font-neutral-300 font-light'>Chargement ...</span>
    </div>
  }
  else if (products.length){
    grid = 
      <div className='grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        { products.map(product => 
        <ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    
  }
  else{
    grid = <div className='flex flex-col w-full justify-center gap-8 items-center p-12 text-sm'>
            <p className=' text-gray-400 font-light'>Aucun produit trouvé</p>
          </div>
  }
  return (
    <div>
      {grid}
    </div>
    
  )
}

export default ProductsGrid