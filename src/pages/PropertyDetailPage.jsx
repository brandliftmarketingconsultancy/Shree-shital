import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { allProjects } from '../data/siteData.js'
import PropertyHero from '../components/PropertyHero.jsx'
import PropertyOverview from '../components/PropertyOverview.jsx'
import PropertyNeighbourhood from '../components/PropertyNeighbourhood.jsx'
import ContactForm from '../components/ContactForm.jsx'
import PropertyAmenities from '../components/PropertyAmenities.jsx'
import PropertyGallery from '../components/PropertyGallery.jsx'

export default function PropertyDetailPage() {
  const { id } = useParams()
  const project = allProjects.find((p) => p.id === Number(id))

  useEffect(() => { window.scrollTo({ top: 0 }) }, [id])

  if (!project) return <Navigate to="/projects" replace />

  return (
    <main>
      <PropertyHero project={project} />
      <PropertyOverview project={project} />
      <PropertyNeighbourhood project={project} />
      <div className="bg-white py-16" />
      <PropertyAmenities project={project} />
      <PropertyGallery project={project} />
      <ContactForm />
    </main>
  )
}