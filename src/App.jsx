import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import "./App.css"

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <MyWork/> 
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App