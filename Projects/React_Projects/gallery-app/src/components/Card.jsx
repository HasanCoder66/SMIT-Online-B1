import React from 'react'

const Card = ({post}) => {
    console.log(post.author);
    return (
        <div className='w-[300px] h-[250px] p-3 mb-3 mt-3 rounded bg-gray-800' >
            <div className='w-full h-[80%] mt-2 mb-2'>
                <img src={post.download_url} alt="" className='rounded' />
            </div>
            <h2 className='text-white font-bold'>Author: {post.author}</h2>
        </div>
    )
}

export default Card
