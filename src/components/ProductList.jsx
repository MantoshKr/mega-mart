import React from 'react'
import ProductCard from './ProductCard'

const productList = ({products}) => {
  return (
    <div  className='py-6 px-10 grid 2xl:grid-cols-5 xl:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 '>
    {products.map(({id , title , price , description , category , image}) => (    
        <ProductCard 
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        
        />
    ))}
    </div>
  )
}

export default productList