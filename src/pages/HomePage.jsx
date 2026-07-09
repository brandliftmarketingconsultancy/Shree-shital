import Hero from '../components/Hero.jsx'
import AboutUs from '../components/AboutUs.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import OurValues from '../components/OurValues.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
import TownshipAmenities from '../components/TownshipAmenities.jsx'
import AvailableLocations from '../components/AvailableLocations.jsx'
import PressReleases from '../components/PressReleases.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <FeaturedProjects />  
      <WhyChooseUs />
      <OurValues />
      {/* <TownshipAmenities /> */}
      <AvailableLocations />
      <PressReleases />
      <ContactForm />
    </main>
  )
}
