// import LandingPage from '@/components/LandingPage'
// import Navbar from '@/components/Navbar'
import Hero from '../components/Hero'
import AboutPage from '../components/About'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutPage />
      <Portfolio />
      <Contact email='dirfanardika@gmail.com'/>
    </main>
  )
}
