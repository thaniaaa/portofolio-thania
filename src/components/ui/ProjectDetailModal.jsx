import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectVisual } from './ProjectCard'

function ProjectAction({ href, variant, children }) {
  const className = `project-modal__action project-modal__action--${variant}`

  if (!href) {
    return (
      <span className={`${className} project-modal__action--disabled`} aria-disabled="true">
        {children}
      </span>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

function ProjectDetailModal({ project, onClose }) {
  const closeButtonRef = useRef(null)
  const [screenshotIndex, setScreenshotIndex] = useState(0)
  const [isGalleryPaused, setGalleryPaused] = useState(false)
  const screenshots = project.screenshots || []
  const hasGallery = screenshots.length > 1
  const changeScreenshot = (direction) => {
    setScreenshotIndex((current) => (current + direction + screenshots.length) % screenshots.length)
  }

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement
    const previousOverflow = document.body.style.overflow
    const closeWithEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeWithEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeWithEscape)
      previouslyFocusedElement?.focus()
    }
  }, [onClose])

  useEffect(() => {
    if (!hasGallery || isGalleryPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const interval = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        setScreenshotIndex((current) => (current + 1) % screenshots.length)
      }
    }, 2000)

    return () => window.clearInterval(interval)
  }, [hasGallery, isGalleryPaused, screenshots.length])

  return (
    <motion.div
      className="project-modal__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onKeyDown={(event) => {
        if (!hasGallery) return
        if (event.key === 'ArrowLeft') changeScreenshot(-1)
        if (event.key === 'ArrowRight') changeScreenshot(1)
      }}
    >
      <motion.div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <button
          className="project-modal__close"
          type="button"
          aria-label="Close project details"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <span aria-hidden="true">×</span>
        </button>

        {hasGallery ? (
          <div
            className="project-modal__gallery"
            aria-label={`${project.title} screenshots`}
            onMouseEnter={() => setGalleryPaused(true)}
            onMouseLeave={() => setGalleryPaused(false)}
            onFocusCapture={() => setGalleryPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setGalleryPaused(false)
            }}
          >
            <div className="project-modal__gallery-viewport">
              <div
                className="project-modal__gallery-track"
                style={{ transform: `translateX(-${screenshotIndex * 100}%)` }}
              >
                {screenshots.map((screenshot) => (
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width || 1600}
                    height={screenshot.height || 900}
                    loading="lazy"
                    key={screenshot.src}
                  />
                ))}
              </div>
            </div>
            <div className="project-modal__gallery-controls">
              <button type="button" aria-label="Previous screenshot" onClick={() => changeScreenshot(-1)}>
                <span aria-hidden="true">←</span>
              </button>
              <div className="project-modal__gallery-caption" aria-live={isGalleryPaused ? 'polite' : 'off'}>
                <strong>{screenshots[screenshotIndex].label}</strong>
                <span>{screenshotIndex + 1} / {screenshots.length}</span>
              </div>
              <button type="button" aria-label="Next screenshot" onClick={() => changeScreenshot(1)}>
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <a className="project-modal__gallery-full" href={screenshots[screenshotIndex].src} target="_blank" rel="noopener noreferrer">
              View full-size screenshot ↗
            </a>
          </div>
        ) : (
          <div className="project-modal__media">
            <ProjectVisual project={project} showLabel={false} />
            <span className="project-modal__screenshot-badge">Project screenshot</span>
          </div>
        )}

        <div className="project-modal__content">
          <p className="project-modal__category">
            {project.category === 'web' ? 'Web Development' : 'Data Science'}
          </p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="project-modal__description" id="project-modal-description">
            {project.longDescription || project.description}
          </p>

          <div className="project-modal__stack">
            <h3>{project.stackLabel || 'Tech Stack'}</h3>
            <ul aria-label={project.stackLabel || 'Project technologies'}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="project-modal__actions">
            <ProjectAction href={project.demoUrl} variant="primary">
              Live Demo <span aria-hidden="true">→</span>
            </ProjectAction>
            <ProjectAction href={project.repositoryUrl} variant="secondary">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.7a9.3 9.3 0 0 0-2.9 18.1c.5.1.6-.2.6-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a8.9 8.9 0 0 1 4.8 0c1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.7.7 1 1.5 1 2.5 0 3.6-2.4 4.4-4.6 4.6.4.3.7.9.7 1.8v2.8c0 .3.2.6.7.5A9.3 9.3 0 0 0 12 2.7Z" />
              </svg>
              GitHub Repository
            </ProjectAction>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetailModal
