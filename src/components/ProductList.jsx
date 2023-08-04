import React from 'react'
import ProductCard from './ProductCard'

const productList = ({products}) => {
  return (
    <div>
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