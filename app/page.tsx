import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Footer from './component/Footer'
import TimelineSection from './component/TimelineSection'
import ChatInterface from './component/ChatInterface'
import { SignupFormDemo } from './component/SignupFormDemo'
import GithubGraph from './component/GithubGraph'
import FloatingNavigate from './component/FloatingNavigate'
import Marquee from "./component/Marquee"
import About from './component/About'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto p-5'>
          <Navbar className='' />
          <HeroSection />
        </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <Marquee/>
        <About/>
        <Projects />
        <Skills />

        <div id="timeline" className='relative overflow-hidden py-10 md:py-20'>
          <TimelineSection />
        </div>
        <GithubGraph />
        <SignupFormDemo />
        <Footer />
        <ChatInterface />

        <FloatingNavigate/>
      </div>
    </div>
  )
}