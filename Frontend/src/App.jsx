import { useState } from 'react'
import Header from './components/Header/header'
import Fotter from './components/Footer/fotter'
import Home from './components/Home/Home'
import './App.css'

function App() {
  return (
    <div>
        <Header/>
        <Home/>
        <Fotter/>
    </div>
  )
}

export default App
