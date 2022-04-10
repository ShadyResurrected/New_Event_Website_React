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


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>


      
      
      
    </div>
  )
}

export default App
