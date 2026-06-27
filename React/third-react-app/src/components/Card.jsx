import React from 'react'

const Card = ({data}) => {
  console.log("card rerender howaa...");
  return (
    <div key={data.id} className='p-4 rounded w-[250px] h-[250px] bg-red-500'>{data.name}</div>
  )
}

export default Card
