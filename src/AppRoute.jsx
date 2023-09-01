import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Home,
  About,
  Recommend
} from './pages'
import Navbar from './components/Navbar'

const AppRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </>
  )
}

export default AppRoute