import AboutUs from '../components/about'
import Benefits from '../components/benfits'
import ContactUs from '../components/contact'
import Hero from '../components/hero'
import Services from '../components/services'
import Testimonials from '../components/testimonials'
import Consultoria from '../components/twoSection'

const Home = () => {
  return (
    <>
    <Hero/>
    <Consultoria />
    <Services />
    <Benefits/>
    <Testimonials />
    <AboutUs />
    <ContactUs/>
    </>
  )
}

export default Home