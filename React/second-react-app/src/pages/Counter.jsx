import React, { useState } from 'react'

const Counter = ({message}) => {
// message = "hey!"

    let [count, setCount] = useState(0)

    const incrementHandler = () => {
        console.log("increment howa");
        setCount(count + 1)
        
    }

    const decrementHandler = () => {
        console.log("decrement howa");
        setCount(count - 1)
    }


    return (
        <div className='p-4 rounded w-[300px] h-[300px] shadow-2xl flex flex-col justify-evenly'>
            <h1 className='text-center font-bold text-2xl'>{message} count {count}</h1>
            <div className="btns flex justify-evenly">
                <button onClick={decrementHandler} className='w-[100px] h-[30px] cursor-pointer rounded font-semibold bg-red-500 text-white'>Decrement</button>
                <button onClick={incrementHandler} className='w-[100px] h-[30px] cursor-pointer rounded font-semibold bg-green-500 text-white'>Increment</button>
            </div>
        </div>
    )
}

export default Counter