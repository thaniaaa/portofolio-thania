function SectionHeading({ eyebrow, title }) {
  return (
    <header className="section-heading">
      <p className="section-heading__eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </p>
      <h2>{title}</h2>
    </header>
  )
}

export default SectionHeading
