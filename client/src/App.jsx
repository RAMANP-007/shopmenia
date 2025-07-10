import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import {Routes, Route} from 'react-router-dom';
import Shop from './components/pages/Shop.jsx';
import Shopcategory from "./components/pages/Shopcategory.jsx";
import Product from './components/pages/Product.jsx';
import Cart from './components/pages/Cart.jsx';
import Login from './components/pages/Loginsignup.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';
import Payment from './components/Payment/Payment.jsx';




function App() {
  return ( <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={< Shopcategory banner={men_banner} category="men"/>}/>
    <Route path='/womens' element={< Shopcategory banner={women_banner}  category="women"/>}/>
    <Route path='/kids' element={< Shopcategory banner={kids_banner}   category="kid"/>}/>
    <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
    </Route>
    
    <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
    <Route path='/payment' element={<Payment/>}/>
  </Routes>
  <Footer />
  </> );
}

export default App;