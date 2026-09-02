import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import PropertyDetailPage from './pages/PropertyDetailPage.jsx'
import PropertyAmenitiesPage from './pages/PropertyAmenitiesPage.jsx'
import PropertyGalleryPage from './pages/PropertyGalleryPage.jsx'
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from './components/ScrollToTop'
import FloatingContact from "./components/FloatingContact";
import AmenitiesPage from './pages/AmenitiesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <ScrollToHash />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<PropertyDetailPage />} />
        <Route path="/projects/:id/amenities" element={<PropertyAmenitiesPage />} />
        <Route path="/projects/:id/gallery" element={<PropertyGalleryPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <FloatingContactButtons /> */}
      <FloatingContact />
      <Footer />

    </div>
  )
}
