import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assests/css/bootstrap.min.css'
import '../src/global.css'

import '../src/assests/css/font-awesome.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home'

import Communities from './components/Communities/communities'
import Stats from './components/Stats/Stats'
import Footer from './components/Footer/Footer';
import Blog1 from './components/Blogs/Blog1'
import Blog2 from './components/Blogs/Blog2'
import Blog3 from './components/Blogs/Blog3'
import Compete from './components/Lets_Compete/Compete'


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/blog-1" element={<Blog1 />} />
          <Route path="/blog-2" element={<Blog2 />} />
          <Route path="/blog-3" element={<Blog3 />} />
          <Route path="/compete" element={<Compete />} />
        </Routes>
        <Footer />
      </BrowserRouter>


      
      
      
    </div>
  )
}

export default App
