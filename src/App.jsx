import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Fooder/Footer'
import Navbar from './components/navbar/navbar'


const App = () => {
  return (
  <div> 
      <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    <Footer/>
  </div>
  )
}
export default App