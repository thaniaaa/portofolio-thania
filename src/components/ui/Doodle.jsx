function Doodle({ type = 'spark', className = '' }) {
  if (type === 'arrow') {
    return (
      <svg className={`doodle ${className}`} viewBox="0 0 72 48" aria-hidden="true">
        <path d="M8 8c20 1 36 11 44 27M43 30l10 6 5-11" />
      </svg>
    )
  }

  return (
    <svg className={`doodle ${className}`} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 5c1 12 7 18 19 19-12 1-18 7-19 19-1-12-7-18-19-19 12-1 18-7 19-19Z" />
    </svg>
  )
}

export default Doodle
