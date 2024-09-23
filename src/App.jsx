import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import MyWork from './components/myWork/MyWork'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  )
}

export default App
