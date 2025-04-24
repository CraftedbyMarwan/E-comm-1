import {Route, Routes} from 'react-router'
import Home from './Home'
import P404 from './P404'
import React from 'react'
import Contact from './contact'
import FAQ from './faq'
import Products from './products'
import ShowProduct from './products/showProduct'
import Cart from './Cart'


const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<ShowProduct />} />
      <Route path='/cart' element={<Cart />}/>
      <Route path='*' element={<P404/>} />
      
    </Routes>
  )
}

export default Pages