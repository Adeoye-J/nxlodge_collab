// import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import { Route, Routes } from "react-router-dom"
import NavBar from './containers/NavBar/NavBar'
import Footer from './containers/Footer/Footer'
import StartToday from "./containers/StartToday/StartToday"
import NoPage from "./containers/NoPage/NoPage"
import Login from './pages/Login/Login'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
      <StartToday />
      <Footer />
    </div>
  )
}

export default App
