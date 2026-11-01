import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import { portfolio } from './data/portfolio'

function App() {
  return (
    <>
      <Navbar profile={portfolio.profile} />
      <main>
        <HeroSection profile={portfolio.profile} />
        <AboutSection
          profile={portfolio.profile}
          education={portfolio.education}
          skillGroups={portfolio.skillGroups}
        />
        <ExperienceSection experiences={portfolio.experiences} />
        <ProjectsSection projects={portfolio.projects} />
        <ContactSection contact={portfolio.contact} />
      </main>
      <Footer profile={portfolio.profile} contact={portfolio.contact} />
    </>
  )
}

export default App
