import Image from 'next/image'
import React from 'react'

const ProductCard = ({id , title , price , description , category , image}) => {
  return (
    <div className='py-6 px-4 grid grid-cols-4 gap-4'>
    <div className='border-[1px] border-gray-200 mb-6 group'>
    <div className='w-full h-[350px] overflow-hidden p-1'>
      <Image 
        className='w-full h-full object-contain scale-100 group-hover:scale-110  duration-300'
        alt='img'
        width={300}
        height={250}
        src={image}
      />
    </div>
   
    
   
    </div>
    </div>
  )
}

export default ProductCard