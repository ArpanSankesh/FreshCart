import React from 'react'
import Card from './Card'
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {

  const { products } = useAppContext();
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
      <div className='mt-6 flex gap-7'>
        {products.filter((product)=> product.inStock).slice(0,5).map((product, index)=>(
          <Card product={products[0]} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
