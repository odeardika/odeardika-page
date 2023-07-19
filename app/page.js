// import LandingPage from '@/components/LandingPage'
// import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Hero from '@/components/Hero'
import AboutPage from '@/components/About'
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutPage />
      <Portfolio />
      
    </div>
  )
}
