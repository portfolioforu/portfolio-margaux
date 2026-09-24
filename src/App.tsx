import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Contact from './pages/Contact'
import CreationDetail from './pages/CreationDetail'
import Creations from './pages/Creations'
import Home from './pages/Home'
import Parcours from './pages/Parcours'
import SavoirFaire from './pages/SavoirFaire'

export default function App() {
  return (
    <div className="grain min-h-screen bg-ink text-fg">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/savoir-faire" element={<SavoirFaire />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/creations/:slug" element={<CreationDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
