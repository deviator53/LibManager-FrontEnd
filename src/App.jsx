import React, { useState } from "react";
import './App.css';
import Home from "./components/home/Home";
import Book from "./components/book/Book";
import Login from './components/pages/auth/Login';
import Navbar from './components/navbar/Navbar';
import VerifyUser from "./components/pages/auth/VerifyUser";
import Register from './components/pages/auth/Register';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Books from './components/books/Books';
import products from './data/products';


function App() {
  const [ prod, setProd ] = useState(products);

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/book/:detail" element={<Book/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/verify-user" element={<VerifyUser/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/banner" element={<Navbar/>}/>


        </Routes>
      </Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            color: 'white'
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />

    </>
  );
}

export default App;
