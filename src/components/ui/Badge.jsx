import { motion, useReducedMotion } from 'framer-motion'

function Badge({ children, tone = 'yellow', interactive = false }) {
  const shouldReduceMotion = useReducedMotion()

  if (interactive) {
    return (
      <motion.span
        className={`badge badge--${tone} badge--interactive`}
        whileHover={shouldReduceMotion ? undefined : { y: -2, boxShadow: '0 3px 8px rgba(30, 41, 59, 0.12)' }}
        whileFocus={shouldReduceMotion ? undefined : { y: -2, boxShadow: '0 3px 8px rgba(30, 41, 59, 0.12)' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        tabIndex="0"
      >
        {children}
      </motion.span>
    )
  }

  return <span className={`badge badge--${tone}`}>{children}</span>
}

export default Badge
