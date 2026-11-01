import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactInfoCard from '../ui/ContactInfoCard'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const initialFormData = {
  name: '',
  email: '',
  message: '',
}

async function submitContactForm(formData) {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

  if (!endpoint) {
    throw new Error('The contact form endpoint has not been configured yet.')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    throw new Error('Your message could not be sent. Please try again or use direct email.')
  }
}

function ContactSection({ contact }) {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setIsSuccess(false)
    setErrorMessage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setErrorMessage('')

    try {
      await submitContactForm(formData)
      setIsSuccess(true)
      setFormData(initialFormData)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="kontak">
      <Container className="contact-section__inner">
        <SectionHeading eyebrow="Get in touch" title="Let's Work Together" />

        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__heading">
              <p>Have a project in mind?</p>
              <h3>Send me a message</h3>
            </div>

            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about your project..."
                rows="6"
                required
              />
            </label>

            <button className="contact-form__submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <span aria-hidden="true">→</span>
            </button>

            {isSuccess && (
              <p className="contact-form__status contact-form__status--success" role="status">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {errorMessage && (
              <p className="contact-form__status contact-form__status--error" role="alert">
                {errorMessage}
              </p>
            )}
          </form>

          <ContactInfoCard contact={contact} />
        </motion.div>
      </Container>
    </section>
  )
}

export default ContactSection
