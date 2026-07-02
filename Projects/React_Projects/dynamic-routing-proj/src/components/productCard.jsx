import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
    console.log(data);
  return (
    
    <Link to={`/products/${data.id}`}>
    <div className='p-4 shadow rounded w-[350px] mt-3 mb-3 cursor-pointer'>
      <div>
        <img src={data.thumbnail} alt="" className='w-[150px] h-[150px] ' />
      </div>
      <div>
        <h2 className='font-bold text-2xl'>{data.title}</h2>
        <p className='text-gray-500 font-semibold'>{data.description}</p>
        <div className='flex justify-between'>
            <p className='font-bold bg-blue-300 p-2 rounded-full mt-2'>category : {data.category}</p>
            <p className='font-bold bg-blue-300 p-2 rounded-full mt-2'>ratings: {data.rating}</p>
        </div>
        <button className='font-bold bg-blue-300 p-2 rounded mt-2'>Price: {data.price}</button>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
