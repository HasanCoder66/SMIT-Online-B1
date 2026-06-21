import React from 'react'

const Card = ({userName, description}) => {
    console.log(description);
  return (
    <div className="card p-4 rounded h-[300px] w-[300px] border border-2">
    <h1 className='font-bold text-2xl'>Username: {userName}</h1>
    <p>About: {description}</p>
  </div>
  )
}

export default Card
