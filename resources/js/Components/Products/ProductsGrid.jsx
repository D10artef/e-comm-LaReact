import React from 'react'
import ProductCard from '../Product/ProductCard';
import Loading from '../Loading';
import NoItemFound from '../NoItemFound';

const ProductsGrid = ({products, loading}) => {
  let grid ;
  if(loading){
    grid = 
    <Loading />
  }
  else if (products.length){
    grid = 
      <div className='grid grid-cols-1 xs:grid-cols-2 gap-x-8 md:grid-cols-3   xl:grid-cols-4 gap-y-4 justify-items-center items-center'>
        { products.map(product => 
        <ProductCard key={product.id} product={product}></ProductCard>)}
      </div>
    
  }
  else{
    grid = <NoItemFound text='No item found, please make a new search with other criteria' /> 
  }
  return (
    <div className='px-4 py-3'>
      {grid}
    </div>
    
  )
}

export default ProductsGrid