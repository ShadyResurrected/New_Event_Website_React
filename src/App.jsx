import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/global.css'

import '../src/assests/css/font-awesome.css'
import Welcome from './components/Welcome Background/Welcome';


function App() {
  return (
    <div >
     <Navbar/>
     <Welcome/>
    </div>
  )
}

export default App
