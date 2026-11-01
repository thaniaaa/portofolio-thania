import usePointerSpotlight from '../../hooks/usePointerSpotlight'

function EducationCard({ item }) {
  const spotlightProps = usePointerSpotlight()

  return (
    <article className="education-card spotlight-surface" {...spotlightProps}>
      <span className="cursor-spotlight" aria-hidden="true" />
      <div className="education-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="m3 9 9-5 9 5-9 5-9-5Zm3 2.2V16c3.4 2.7 8.6 2.7 12 0v-4.8" />
        </svg>
      </div>
      <div>
        <p className="card-kicker">Education</p>
        <h3>{item.institution}</h3>
        <p>{item.qualification}</p>
      </div>
      <span className="education-card__period">{item.period}</span>
    </article>
  )
}

export default EducationCard
