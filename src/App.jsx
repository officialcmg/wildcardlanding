import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <Projects />
        </main>
        <Footer />
      </div>
      {/* Glassmorphism background elements */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="fixed top-40 right-40 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="fixed bottom-40 left-1/3 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
    </div>
  )
}
