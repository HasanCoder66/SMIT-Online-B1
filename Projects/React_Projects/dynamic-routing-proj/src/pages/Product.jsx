import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard'

const Product = () => {

    const [products, setProducts] = useState([])

    const apiCall = async () => {
    let response = await axios.get(`https://dummyjson.com/products`)
    // console.log(response.data.products);
    setProducts(response.data.products)
    }

    useEffect(() => {
        apiCall()
    }, [])

  return (
    <div>
      this is a product page..

    <div className='flex flex-wrap justify-around'>
   {products && products.map((prod) => (<ProductCard data={prod} />))}
    </div>
    </div>
  )
}

export default Product
