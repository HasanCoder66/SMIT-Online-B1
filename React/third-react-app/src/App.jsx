// import React from 'react'
// import Home from './components/Home';
// import Admin from './components/Admin';
// import RenderingList from './components/renderingList';

// const App = () => {
//   // console.log("hello -->");

//   let isAdmin = true;
//   // if(isAdmin) {
//   //   return <Admin />
//   // }
// // let isPremiumUser = false;

// //   if(!isPremiumUser){
// //     return <AdComp />
// //   }


//   return (
//    <>
// {/* {isPremiumUser ? <Home /> : <AdComp /> } */}
//   {/* {isAdmin ? <Admin /> : <Home />} */}

// {/* {isAdmin && <Admin />} */}

// {/* <Home /> */}

// <RenderingList />
//    </>
//   )
// }

// export default App



import React, { useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'


const App = () => {

  let data = [ 
{
  name : "Shoaib Jamali",
  id : 1
},
{
  name : "Faizan",
  id : 2
},
{
  name : "Muahmmad Shakoor",
  id : 3
},

  ]


  // const apiCallingFn = async () => {
  //   let apiRes = await fetch("https://dummyjson.com/products")
  //   let result = await apiRes.json()
  //    console.log(result);
  // }

//  useEffect(() => {
// apiCallingFn()
//  },[])


  return (
    <div>
      {/* header */}
      <Header />
      
      {/* card section */}
      <div className='p-5 flex justify-evenly items-center flex-wrap gap-5 mb-5'>

{/* card 1 */}
{data && data.map((item) => (<Card data={item} key={item.id} jani="maani" kuchbi="kuchbiiii"/>))}


      </div>

    </div>
  )
}

export default App
