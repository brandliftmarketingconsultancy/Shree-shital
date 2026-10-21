import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { findProject } from '../data/siteData.js'
import PropertyHero from '../components/PropertyHero.jsx'
import PropertyOverview from '../components/PropertyOverview.jsx'
import PropertyNeighbourhood from '../components/PropertyNeighbourhood.jsx'
import ContactForm from '../components/ContactForm.jsx'
import PropertyAmenities from '../components/PropertyAmenities.jsx'
import PropertyGallery from '../components/PropertyGallery.jsx'

export default function PropertyDetailPage() {
  const { slug } = useParams()
  const project = findProject(slug)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [slug])

  if (!project) return <Navigate to="/projects" replace />

  // Old numeric link like /projects/1 -> redirect to /projects/sheetal-vatika
  if (slug !== project.slug) {
    return <Navigate to={`/projects/${project.slug}`} replace />
  }

  return (
    <main>
      <PropertyHero project={project} />
      <PropertyOverview project={project} />  
      <PropertyNeighbourhood project={project} />
      <div className="bg-white py-16" />
      <PropertyAmenities project={project} />
      <PropertyGallery project={project} />
      <ContactForm key={project.id} project={project} />
    </main>
  )
}