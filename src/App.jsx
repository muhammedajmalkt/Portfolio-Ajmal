import React from 'react'
import Project from './Components/Features/Project'
import Profile from './Components/Features/Profile'
import Skills from './Components/Features/Skills'
import Contact from './Components/Features/Contacts'
import { Toaster } from 'react-hot-toast'
import "./App.css"

const App = () => {
  return (
    <>
    <Toaster position="bottom-right" reverseOrder={false} />
    <Profile/>
    <Project/>
    <Skills/>
    <Contact/>
    </>
  )
}

export default App