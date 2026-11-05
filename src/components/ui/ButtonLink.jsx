function ButtonLink({
  children,
  href,
  variant = 'primary',
  download = false,
  className = '',
  target,
  rel,
  ...props
}) {
  const computedRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)

  return (
    <a
      className={`button-link button-link--${variant} ${className}`.trim()}
      href={href}
      download={download || undefined}
      target={target}
      rel={computedRel}
      {...props}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export default ButtonLink
