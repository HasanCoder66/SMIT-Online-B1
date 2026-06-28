import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Signup from './Pages/Signup'
const App = () => {

  const [count, setCount] = useState(0)


// useEffect(() => {
//   console.log(fetch("https://dummyjson.com/products")
//   .then((res) => res.json()).
//   then((result) => console.log(result)))

//   console.log("useEffect is running -->");
// },[])


// useEffect(() => {
//   return () => {

//   }
// })


  return (
  //  <>
  //  <div>
  //   <h1>Count:{count}</h1>
  //   <button onClick={() => {
  //     setCount(count + 1)
  //   }}>add</button>
  //   <button onClick={() => {
  //     setCount(count - 1)
  //   }}>sub</button>
  //  </div>
  //  </>

  <Routes>


<Route path='/' element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/signup" element={<Signup />} />

  </Routes>
  )
}

export default App
