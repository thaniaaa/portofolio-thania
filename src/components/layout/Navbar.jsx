import { useEffect, useRef, useState } from 'react'
import Container from '../ui/Container'

const navigationItems = [
  { label: 'About Me', href: '#tentang' },
  { label: 'Experience', href: '#pengalaman' },
  { label: 'Projects', href: '#proyek' },
]

function Navbar({ profile }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeWithEscape)
    return () => window.removeEventListener('keydown', closeWithEscape)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`site-header ${isOpen ? 'site-header--menu-open' : ''}`}>
      <Container className="site-header__inner">
        <a className="brand" href="#beranda" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>

        <nav
          className={`site-nav ${isOpen ? 'site-nav--open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <a href={item.href} onClick={closeMenu} key={item.href}>
              {item.label}
            </a>
          ))}
          <a className="site-nav__mobile-cta" href="#kontak" onClick={closeMenu}>
            Contact Me <span aria-hidden="true">→</span>
          </a>
        </nav>

        <a className="site-header__cta" href="#kontak">
          Contact Me <span aria-hidden="true">→</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((current) => !current)}
          ref={menuButtonRef}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>
    </header>
  )
}

export default Navbar
