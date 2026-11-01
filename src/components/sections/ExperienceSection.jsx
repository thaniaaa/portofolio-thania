import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Container from '../ui/Container'
import ExperienceCard from '../ui/ExperienceCard'
import SectionHeading from '../ui/SectionHeading'

function TimelineNode({ index, total, progress, nodeRef, reduceMotion }) {
  const threshold = total <= 1 ? 0.5 : 0.04 + (index / (total - 1)) * 0.92
  const nodeColor = useTransform(
    progress,
    [Math.max(0, threshold - 0.035), threshold],
    ['#fffdf9', '#e07a5f'],
  )
  const nodeShadow = useTransform(
    progress,
    [Math.max(0, threshold - 0.035), threshold],
    ['0 0 0 2px rgba(224, 122, 95, 0.16)', '0 0 0 6px rgba(224, 122, 95, 0.2)'],
  )
  const nodeScale = useTransform(
    progress,
    [Math.max(0, threshold - 0.025), threshold, Math.min(1, threshold + 0.035)],
    [1, 1.22, 1],
  )

  return (
    <motion.span
      className="experience-timeline__node"
      aria-hidden="true"
      ref={nodeRef}
      style={{
        backgroundColor: nodeColor,
        boxShadow: nodeShadow,
        scale: reduceMotion ? 1 : nodeScale,
      }}
    />
  )
}

function ExperienceSection({ experiences }) {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const nodeRefs = useRef([])
  const [railBounds, setRailBounds] = useState({ top: 0, height: 0 })
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 35%'],
  })
  const runnerY = useTransform(scrollYProgress, [0, 1], [0, railBounds.height])
  const runnerOpacity = useTransform(scrollYProgress, [0, 0.025, 0.975, 1], [0, 1, 1, 0])

  useLayoutEffect(() => {
    const timeline = timelineRef.current

    if (!timeline || experiences.length === 0) return undefined

    const updateRailBounds = () => {
      const firstNode = nodeRefs.current[0]
      const lastNode = nodeRefs.current[experiences.length - 1]

      if (!firstNode || !lastNode) return

      const timelineBounds = timeline.getBoundingClientRect()
      const firstBounds = firstNode.getBoundingClientRect()
      const lastBounds = lastNode.getBoundingClientRect()
      const start = firstBounds.top + firstBounds.height / 2 - timelineBounds.top
      const end = lastBounds.top + lastBounds.height / 2 - timelineBounds.top

      const nextBounds = {
        top: Math.round(start * 100) / 100,
        height: Math.round(Math.max(0, end - start) * 100) / 100,
      }

      setRailBounds((current) => {
        const unchanged = Math.abs(current.top - nextBounds.top) < 0.5
          && Math.abs(current.height - nextBounds.height) < 0.5

        return unchanged ? current : nextBounds
      })
    }

    updateRailBounds()
    const resizeObserver = new ResizeObserver(updateRailBounds)
    resizeObserver.observe(timeline)

    return () => resizeObserver.disconnect()
  }, [experiences.length])

  return (
    <section className="experience-section" id="pengalaman" ref={sectionRef}>
      <Container className="experience-section__inner">
        <SectionHeading eyebrow="Professional journey" title="Work Experience" />

        <ol className="experience-timeline" ref={timelineRef}>
          <svg
            className="experience-timeline__path"
            viewBox={`0 0 20 ${Math.max(1, railBounds.height)}`}
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{
              top: railBounds.top,
              height: railBounds.height,
              opacity: railBounds.height > 0 ? 1 : 0,
            }}
          >
            <path
              className="experience-timeline__path-base"
              d={`M10 0V${railBounds.height}`}
              strokeDasharray="4 4"
            />
            <motion.path
              className="experience-timeline__path-progress"
              d={`M10 0V${railBounds.height}`}
              pathLength="1"
              style={{ pathLength: shouldReduceMotion ? 1 : scrollYProgress }}
            />
            {!shouldReduceMotion && (
              <>
                <motion.circle
                  className="experience-timeline__runner-halo"
                  cx="10"
                  cy={runnerY}
                  r="7"
                  style={{ opacity: runnerOpacity }}
                />
                <motion.circle
                  className="experience-timeline__runner"
                  cx="10"
                  cy={runnerY}
                  r="3.5"
                  style={{ opacity: runnerOpacity }}
                />
              </>
            )}
          </svg>

          {experiences.map((experience, index) => (
            <li className="experience-timeline__item" key={experience.id}>
              <TimelineNode
                index={index}
                total={experiences.length}
                progress={scrollYProgress}
                reduceMotion={shouldReduceMotion}
                nodeRef={(element) => {
                  nodeRefs.current[index] = element
                }}
              />
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default ExperienceSection
