import React from 'react'
import ProductCard from './ProductCard'

const productList = ({products}) => {
  return (
    <div>
    {products.map(({id , title , price , description , category , image}) => (    
     <div key={id}>{title}</div>
   
    ))}
    </div>
  )
}

export default productList