function ContactIcon({ type }) {
  const paths = {
    location: <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    email: <path d="M3 6.5h18v11H3v-11Zm1 1 8 6 8-6" />,
    linkedin: <path d="M6.5 9.5V18M6.5 6.3v.2M10.5 18v-8.5M10.5 13.2c.8-2.1 6-2.6 6 1.4V18" />,
    github: <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a8.9 8.9 0 0 1 4.8 0c1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.7.7 1 1.5 1 2.5 0 3.6-2.4 4.4-4.6 4.6.4.3.7.9.7 1.8v2.8c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" />,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function ContactInfoCard({ contact }) {
  const contactItems = [
    {
      id: 'location',
      label: 'Location',
      value: contact.location,
    },
    {
      id: 'email',
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: contact.linkedinLabel,
      href: contact.linkedinUrl,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: contact.githubLabel,
      href: contact.githubUrl,
    },
  ]

  return (
    <aside className="contact-info" aria-label="Direct contact information">
      <p className="contact-info__eyebrow">Direct contact</p>
      <h3>Prefer another way?</h3>
      <p className="contact-info__intro">
        Reach out directly through email or connect with me on social media.
      </p>

      <ul className="contact-info__list">
        {contactItems.map((item) => (
          <li key={item.id}>
            <span className="contact-info__icon">
              <ContactIcon type={item.id} />
            </span>
            <div>
              <span className="contact-info__label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.id === 'email' ? undefined : '_blank'}
                  rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
                >
                  {item.value}
                </a>
              ) : (
                <p>{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ContactInfoCard
