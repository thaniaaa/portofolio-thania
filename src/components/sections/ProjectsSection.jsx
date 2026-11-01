import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Container from '../ui/Container'
import ProjectCard from '../ui/ProjectCard'
import ProjectDetailModal from '../ui/ProjectDetailModal'
import SectionHeading from '../ui/SectionHeading'

const filters = [
  { id: 'all', label: 'All Projects', icon: '☷' },
  { id: 'web', label: 'Web Development', icon: '</>' },
  { id: 'data', label: 'Data Science', icon: '⌁' },
]

function ProjectsSection({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const closeProjectModal = useCallback(() => setSelectedProject(null), [])
  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="projects-section" id="proyek">
      <Container className="projects-section__inner">
        <SectionHeading eyebrow="Featured works" title="Projects & Case Studies" />

        <div className="project-filters" role="tablist" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button
              className={`project-filter ${activeFilter === filter.id ? 'project-filter--active' : ''}`}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              key={filter.id}
            >
              <span aria-hidden="true">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        <div
          className="projects-grid"
          role="tabpanel"
          aria-live="polite"
          key={activeFilter}
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              project={project}
              onSelect={setSelectedProject}
              key={project.id}
            />
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} onClose={closeProjectModal} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection
