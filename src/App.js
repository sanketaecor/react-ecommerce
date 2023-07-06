import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProduct from './modules/CategoryProduct';
import Error from './modules/Error';
import Cart from './modules/Cart';
import Contact from './modules/Contact';
import About from './modules/About';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/categories/:name" element={<CategoryProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
