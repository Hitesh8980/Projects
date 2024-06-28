import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Function/pages/Home';
import SellononGroupon from './Function/pages/SellononGroupon';
import Mywishlist from './Function/pages/Mywishlist';
import Sign from './Function/pages/Sign';
import Cart from './Function/pages/Cart';
import Help from './Function/pages/Help';
import Products from './Structure/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sell" element={<SellononGroupon />} />
        <Route path="/wishlist" element={<Mywishlist />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/help" element={<Help/>}/>
        <Route path="/product/:id" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
