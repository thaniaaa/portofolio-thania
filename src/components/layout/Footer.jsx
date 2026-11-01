import Container from '../ui/Container'

function Footer({ profile, contact }) {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>© 2026 {profile.name}. All rights reserved.</p>

        <nav className="footer-links" aria-label="Social media links">
          <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </nav>
      </Container>
    </footer>
  )
}

export default Footer
