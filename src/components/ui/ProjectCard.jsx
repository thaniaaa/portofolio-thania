export function ProjectVisual({ project, showLabel = true }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt}
        width="640"
        height="400"
        loading="lazy"
      />
    )
  }

  return (
    <div
      className={`project-card__placeholder project-card__placeholder--${project.visualTone}`}
      role="img"
      aria-label={`${project.imageAlt} placeholder`}
    >
      <div className="project-card__window" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {project.category === 'web' ? (
        <div className="project-card__web-art" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      ) : (
        <div className="project-card__data-art" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
      )}
      {showLabel && <span className="project-card__image-label">Project screenshot</span>}
    </div>
  )
}

function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card">
      <div className={`project-card__image${project.screenshots?.length || project.imageFit === 'contain' ? ' project-card__image--screenshot' : ''}`}>
        <ProjectVisual project={project} />
        <span className="project-card__category">
          {project.category === 'web' ? 'Web Development' : 'Data Science'}
        </span>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="project-card__technologies" aria-label={project.stackLabel || 'Technologies used'}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <span className="project-card__action">
          {project.actionLabel} <span aria-hidden="true">→</span>
        </span>
      </div>

      <button
        className="project-card__open"
        type="button"
        aria-label={`Open details for ${project.title}`}
        onClick={() => onSelect(project)}
      />
    </article>
  )
}

export default ProjectCard
