function ButtonLink({ children, href, variant = 'primary', download = false, className = '' }) {
  return (
    <a
      className={`button-link button-link--${variant} ${className}`.trim()}
      href={href}
      download={download || undefined}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export default ButtonLink
