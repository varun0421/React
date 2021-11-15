import { useState } from 'react';
import Products from './components/products'
import Details from './components/details'
import Navbar from './layout/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:name' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;