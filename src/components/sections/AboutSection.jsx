import { motion, useReducedMotion } from 'framer-motion'
import Container from '../ui/Container'
import EducationCard from '../ui/EducationCard'
import SectionHeading from '../ui/SectionHeading'
import SkillsPanel from '../ui/SkillsPanel'

function AboutSection({ profile, education, skillGroups }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className="about-section"
      id="tentang"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: 'easeOut' }}
    >
      <Container className="about-section__grid">
        <div className="about-content">
          <SectionHeading eyebrow="Get To Know Me" title="About Me" />
          <div className="about-content__copy">
            {profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="education-list">
            {education.map((item) => <EducationCard item={item} key={item.id} />)}
          </div>
        </div>
        <SkillsPanel groups={skillGroups} />
      </Container>
    </motion.section>
  )
}

export default AboutSection
