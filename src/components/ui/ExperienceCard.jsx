function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div
        className={`experience-card__icon experience-card__icon--${experience.tone}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24">
          <path d="M8 7V5.8C8 4.8 8.8 4 9.8 4h4.4c1 0 1.8.8 1.8 1.8V7M5 7h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2Zm-2 5.5c5.4 2 12.6 2 18 0M10 13h4" />
        </svg>
      </div>

      <div className="experience-card__content">
        <div className="experience-card__header">
          <div>
            <h3>{experience.role}</h3>
            <p className="experience-card__organization">{experience.organization}</p>
          </div>
          <time className="experience-card__period">{experience.period}</time>
        </div>

        <ul className="experience-card__highlights">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
