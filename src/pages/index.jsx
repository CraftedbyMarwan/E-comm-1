import {Route, Routes} from 'react-router'
import LandingPage from './LandingPage';
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
      {/* Set LandingPage as the element for the home route */}
      <Route path='/' element={<LandingPage/>} />
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