import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Focus from '@/components/Focus'
import Portfolio from '@/components/Portfolio'
import Milestones from '@/components/Milestones'
import Leadership from '@/components/Leadership'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <Focus />
      <Portfolio />
      <Milestones />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  )
}
