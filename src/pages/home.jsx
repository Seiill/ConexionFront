import AboutUs from '../components/about'
import Benefits from '../components/benfits'
import ContactUs from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Services from '../components/services'
import Testimonials from '../components/testimonials'
import Consultoria from '../components/twoSection'

const Home = ({scrollToSection}) => {
  return (
    <>
    <Hero scrollToSection={scrollToSection}/>
    <Consultoria scrollToSection={scrollToSection}/>
    <Services scrollToSection={scrollToSection} />
    <Benefits scrollToSection={scrollToSection}/>
    <Testimonials />
    <AboutUs />
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Home