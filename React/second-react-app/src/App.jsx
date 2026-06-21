import React, { useState } from 'react'
import Card from './components/Card'

const App = (props) => {
  

  // State Management


  // state management kaa kaam hai ke components ke dermiyan aapas mai data ko share kerai..
  
  
  // State vs Props
  
// state 
// internal memory 
// editable hoti hai jisy mutable kehty hai.
// component khud manage kerta hai..


// props ==> properties
// readonly immutable
// parent ki taraf sai child mai milty hain

  
  // const [age , setAge] = useState(12)


  // console.log("Props -->", props.two);
  // let numArr =  [1,2,3,4,5]

  // let listItem = ["Home","About","Contact", "Portfolio", "Home","About","Contact", "Portfolio"]

  // let listItem = [
  //   {
  //     item:"Home",
  //     url:"https://www.facebook.com",
  //     id:"home_12",

  //   },
  //   {
  //     item:"About",
  //     url:"https://www.facebook.com",
  //     id:"home_12",

  //   },
  // ]

  //   numArr.forEach((n) => {
  // console.log(n);
  //   })


  // useState for Numbers ->

  // const [age , setAge] = useState(12)

  // useState for string  -->
//   const [username, setUsername] = useState("")
// console.log(username);

// useState for boolean  -->
// const [isAdmin , setIsAdmin] = useState(false)

// useState for null  -->
// const [data, setData] = useState(null)

// useState for undefined  -->

// const [user, setUser] = useState()
// console.log("user -->", user);


// useState for Array  -->
// const [data, setData] = useState([1,2,3,4,5]);
// console.log("Data -->",data);


// useState for Object  -->
const [product, setProduct] = useState({
  itemName : "Water Bottle",
  price : 150,
})


// setProduct({
//   itemName : "coldrink",
//   price : 100
// })

// console.log(product);

  return (
    // <ul>
    //  {listItem.map((listItem, i) => (
    //    <a href={listItem.url}><li key={listItem.id}>{listItem.item}</li></a>
    //  ))}
    // </ul>

    <div>

<Card userName={"Hasan"} description="lorem 123 45674987981 lorem impsum dolar"/>
<Card userName={"Abdullah"} description="lorem 123456749   87981 lorem impsum dolar"/>
<Card userName={"Ali"} description="lorem 123     981 lorem imp sum dolar"/>

    
    </div>
  )
}

export default App


// elem -> elem name --> elem url --> 
