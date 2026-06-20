import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around shadow-md p-2 h-[50px] items-center'>
       <div className='font-bold text-2xl text-white bg-mauve-800 p-2 rounded'>Logo</div>
       <ul className='flex gap-5'>
        <li className='hover:bg-black/5 p-2 rounded font-semibold cursor-pointer '>Home</li>
        <li className='hover:bg-black/5 p-2 rounded font-semibold cursor-pointer '>About</li>
        <li className='hover:bg-black/5 p-2 rounded font-semibold cursor-pointer '>Contact</li>
       </ul>
    </div>
  )
}

export default Navbar
