import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetailPage'

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/products'  element={<Product />}/>
    <Route path='/products/:id'  element={<ProductDetail />}/>
   </Routes>
   </>
  )
}

export default App
