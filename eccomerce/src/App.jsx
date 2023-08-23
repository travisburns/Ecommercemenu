import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'

function App() {
  

  return (
    <>
    <Nav />
    <Products />
    <Recommended />
  </>
  )
}

export default App
