import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from './components/Details';
import './App.css'    


const App= () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path= "/Home" element= {<Home/>} />
        <Route path= "/About" element= {<About/>}/>
        <Route path= "/details/:id" element={<Details/>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
