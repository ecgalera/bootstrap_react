import React from 'react'
import Cards from './components/Cards'
import './App.css'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
    <div className='App'>
      <Cards/>
    </div>
    </>
  )
}

export default App