import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/Dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
import Timing from './sections/Timing'
import Testimonial from './sections/Testimonial'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Footer from './Components/Footer'
import SmoothScroll from './Components/SmoothScroll'
const App = () => {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

export default App