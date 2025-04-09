import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {Home,ProductsList,ProductDetail, Register, Login,Cart, Order, DashboardPage, PageNotFound} from '../pages'
import ProtectedRoute from './ProtectedRoute'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductsList/>}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>   
            <Route path='/cart'  element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
            <Route path='/order-summary'  element={<ProtectedRoute><Order/></ProtectedRoute>}/>
            <Route path='/dashboard'  element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
            <Route path='*' element={<PageNotFound/>}/>
            
            
        </Routes>
    </>
  )
}

export default AllRoutes
