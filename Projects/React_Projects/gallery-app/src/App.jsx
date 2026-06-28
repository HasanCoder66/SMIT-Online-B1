import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios'

const App = () => {
  const [postsData, setPostsData] = useState([])
  // console.log(postsData);

  const [pages, setPages] = useState(1)
  console.log(pages);
  const [limit, setLimit] = useState(12)
  // useEffect(() => {
  //   fetch("https://picsum.photos/v2/list")
  //   .then((res) => res.json())
  //   .then((result) => console.log(result))
  // }, [])

  // useEffect(() => {

  //   const apiCall = async () => {
  //     let apiRes = await fetch("https://picsum.photos/v2/list");
  //     let result = await apiRes.json()

  //     console.log(result);
  //   }

  //   apiCall()
  // }, [])



  const apiCall = async () => {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${pages}&limit=${limit}`)
    // console.log(response.data);

    if (response.data) {
      setPostsData(response.data)
    }
  }

  useEffect(() => {
    apiCall()
  }, [pages, limit])

  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-4'>Gallery App</h1>


      <div className='flex justify-evenly items-center flex-wrap'>
        {/* cards */}
        {/* <Card /> */}
        {/* {postsData.length > 0 ? postsData.map((post) => {
        // console.log(post);
        return <Card post={post} />
      }): <>
      <h1 className='h-[100vh] font-bold text-3xl flex justify-center items-center'>Loading...</h1>
      </>} */}


        {postsData.length > 0 ? postsData.map((post) => (
          <Card post={post} />
        )) : <h1 className='h-[100vh] font-bold text-3xl flex justify-center items-center'>Loading...</h1>
        }
      </div>


      {/* pagination */}

      <div className='flex items-center justify-evenly mt-4'>
        <h1 className='text-3xl font-semibold text-white'>Pages</h1>
        <div className='flex gap-4'>

          <button className={`p-3 bg-gray-700 w-[100px] text-white font-bold rounded cursor-pointer`} onClick={() => {
            setPages(pages - 1)
          }}>Prev</button>

          <button onClick={() => {
            setPages(1)
          }} className='p-3 bg-gray-700 w-[100px] text-white font-bold rounded cursor-pointer'>1</button>
          
          <button className='p-3 bg-gray-700 w-[100px] text-white font-bold rounded cursor-pointer' onClick={() => {
            setPages(2)
          }}>2</button>

          <button className='p-3 bg-gray-700 w-[100px] text-white font-bold rounded cursor-pointer' onClick={() => {
            setPages(pages + 1)
          }}>next</button>

        </div>
      </div>
    </div>
  )
}

export default App
