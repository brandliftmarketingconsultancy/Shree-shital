import { useEffect } from 'react'
import AboutHero from '../components/AboutHero.jsx'
import AboutContent from '../components/AboutContent.jsx'
import OurPurpose from '../components/OurPurpose.jsx'
import OurValues from '../components/OurValues.jsx'
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage() {
  // Always start at top when navigating to this page
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main>
      <AboutHero />
      <AboutContent />
      <OurPurpose />
      <WhyChooseUs />
      {/* <OurValues /> */}
    </main>
  )
}
