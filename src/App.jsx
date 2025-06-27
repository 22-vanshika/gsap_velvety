import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skincare from './components/Skincare';
gsap.registerPlugin(ScrollTrigger,SplitText);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Skincare/>
    </main>
  )
}

export default App