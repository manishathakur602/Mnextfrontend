
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'


function App() {


  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mnext-/about' element={<About />} />
        <Route path='/Mnext-/services' element={<Services  />} />
        <Route path='/Mnext-/portfolio' element={<Portfolio />} />
        <Route path='/Mnext-/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
