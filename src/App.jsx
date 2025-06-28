import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skincare from './components/Skincare';
import About from './components/About';
gsap.registerPlugin(ScrollTrigger,SplitText);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Skincare/>
      <About/>
    </main>
  )
}

export default App