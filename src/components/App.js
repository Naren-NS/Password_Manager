import React from 'react'
import Generate from './Generate'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Homepage from './Homepage'
import Home from './Home'


export default function App() {
  return (
   <>
      <Router>
          <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/generate' element={<Generate/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/home' element={<Home/>}/>
          </Routes>
      </Router>   
   </>
  )
}
