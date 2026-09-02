// import Hero from '../components/Hero.jsx'
// import AboutUs from '../components/AboutUs.jsx'
// import WhyChooseUs from '../components/WhyChooseUs.jsx'
// import OurValues from '../components/OurValues.jsx'
// import FeaturedProjects from '../components/FeaturedProjects.jsx'
// import TownshipAmenities from '../components/TownshipAmenities.jsx'
// import AvailableLocations from '../components/AvailableLocations.jsx'
// import PressReleases from '../components/PressReleases.jsx'
// import ContactForm from '../components/ContactForm.jsx'

// export default function HomePage() {
//   return (
//     <main>
//       <Hero />
//       <AboutUs />
//       <FeaturedProjects />  
//       <WhyChooseUs />
//       <OurValues />
//       {/* <TownshipAmenities /> */}
//       <AvailableLocations />
//       <PressReleases />
//       <ContactForm />
//     </main>
//   )
// }

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.substring(1)

    requestAnimationFrame(() => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  }, [hash])

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