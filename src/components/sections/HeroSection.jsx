import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import Badge from '../ui/Badge'
import ButtonLink from '../ui/ButtonLink'
import Container from '../ui/Container'
import Doodle from '../ui/Doodle'

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
}

function HeroSection({ profile }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const resumeButtonRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const tiltXValue = useMotionValue(0)
  const tiltYValue = useMotionValue(0)
  const tiltX = useSpring(tiltXValue, { stiffness: 180, damping: 22, mass: 0.8 })
  const tiltY = useSpring(tiltYValue, { stiffness: 180, damping: 22, mass: 0.8 })

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    resumeButtonRef.current?.focus()
  }, [])

  const heroItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.5, ease: 'easeOut' },
    },
  }

  const handleTiltMove = useCallback((event) => {
    if (shouldReduceMotion) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5

    tiltXValue.set(normalizedY * -10)
    tiltYValue.set(normalizedX * 10)
  }, [shouldReduceMotion, tiltXValue, tiltYValue])

  const resetTilt = useCallback(() => {
    tiltXValue.set(0)
    tiltYValue.set(0)
  }, [tiltXValue, tiltYValue])

  useEffect(() => {
    if (!isModalOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeWithEscape = (event) => {
      if (event.key === 'Escape') closeModal()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeWithEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeWithEscape)
    }
  }, [closeModal, isModalOpen])

  return (
    <>
      <section className="hero-section" id="beranda">
        <Container className="hero-section__inner">
          <motion.div
            className="hero-copy"
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <Badge tone="white">{profile.eyebrow} {profile.role}</Badge>
            <Doodle className="hero-copy__spark" />

            <motion.h1 variants={heroItemVariants}>
              Building <em>Functional</em> web application.
            </motion.h1>

            <motion.p variants={heroItemVariants}>{profile.introduction}</motion.p>

            <motion.div className="hero-copy__actions" variants={heroItemVariants}>
              <ButtonLink href="#tentang" className="button-link--stable">
                Let's Connect
              </ButtonLink>

              <button
                className="button-link button-link--secondary button-link--stable resume-trigger"
                type="button"
                onClick={() => setIsModalOpen(true)}
                ref={resumeButtonRef}
              >
                Download Resume
                <span aria-hidden="true">↓</span>
              </button>
            </motion.div>
          </motion.div>

          <div className="profile-visual">
            <div className="profile-visual__shadow" aria-hidden="true" />
            <motion.div
              className="profile-visual__frame"
              style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
              onPointerMove={handleTiltMove}
              onPointerLeave={resetTilt}
            >
              {profile.photo ? (
                <img src={profile.photo} alt={profile.photoAlt} width="520" height="600" />
              ) : (
                <div className="profile-placeholder" role="img" aria-label="Profile photo placeholder">
                  <span>{profile.initials}</span>
                  <small>Profile photo</small>
                </div>
              )}
            </motion.div>

            <Doodle type="arrow" className="profile-visual__arrow" />
          </div>
        </Container>
      </section>

      {isModalOpen && (
        <div
          className="resume-modal__overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal()
          }}
        >
          <div
            className="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
          >
            <button
              className="resume-modal__close"
              type="button"
              aria-label="Close resume selection"
              onClick={closeModal}
              autoFocus
            >
              <span aria-hidden="true">×</span>
            </button>

            <p className="resume-modal__eyebrow">Download resume</p>
            <h2 id="resume-modal-title">Select Resume Version</h2>
            <p className="resume-modal__description">
              Choose the resume that best matches the role you are looking for.
            </p>

            <div className="resume-modal__options">
              <ButtonLink href={profile.cvWebUrl} download>
                Web Developer CV
              </ButtonLink>
              <ButtonLink href={profile.cvDataUrl} variant="secondary" download>
                Data Science CV
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroSection
