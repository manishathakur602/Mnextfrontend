import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FirstSection from '../Components/HomePage/FirstSection'
import ThirdSection from '../Components/HomePage/ThirdSection'

function Home() {
  return (
    <div>
    <Navbar />
     <FirstSection />
     <ThirdSection />
     <Footer />
    </div>
  )
}

export default Home
