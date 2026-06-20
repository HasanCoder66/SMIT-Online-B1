import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black/5 h-[500px] flex justify-around p-5'>
      <div className='shadow-md p-2 flex-1  flex justify-center flex-col items-center'>
        <div className='w-[500px]'>
        <h2 className='font-bold mb-3 mt-2'>I'm Hasan a <span className='text-3xl'>Full Stack Developer</span> and Trainer.</h2>
        <p className='mb-3 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem repudiandae architecto illum maxime ducimus porro aliquam possimus hic voluptatum consequuntur.</p>
        <button className='p-2 mb-3 mt-2 bg-black text-white rounded mt-3 font-bold hover:bg-black/5 hover:text-black cursor-pointer transition-all duration-200'>Contact Me</button>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center p-4 rounded'>
        <div className='shadow-md h-[420px] w-[420px] flex justify-center items-center'>
        <img src="https://avatars.githubusercontent.com/u/140997677?v=4" alt="" className='h-[400px] w-[400px] rounded'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
