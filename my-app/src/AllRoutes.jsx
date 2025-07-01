import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'
import EditProduct from './Pages/EditProduct'
import Product from './Pages/Products'
import Navbaar from './Components/Navbaar'

function AllRoutes() {
  return (
    <>
    <Navbaar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/edit/:id' element={<EditProduct />} />
        </Routes>
    </>
  )
}

export default AllRoutes