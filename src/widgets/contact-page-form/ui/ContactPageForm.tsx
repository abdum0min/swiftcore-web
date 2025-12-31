'use client'

import React, { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@iconify/react'
import styles from './ContactPageForm.module.css'

export const ContactPageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          company: '',
          message: ''
        })
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.contactForm}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Send us a Message</h2>
          <p className={styles.formDescription}>
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                <Icon icon="mdi:account" width={18} height={18} />
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your full name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                <Icon icon="mdi:email" width={18} height={18} />
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                <Icon icon="mdi:subject" width={18} height={18} />
                Subject <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                <Icon icon="mdi:office-building" width={18} height={18} />
                Company <span className={styles.optional}>(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              <Icon icon="mdi:message-text" width={18} height={18} />
              Message <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Tell us about your project, requirements, or any questions you have..."
              rows={8}
              required
            />
          </div>

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              <Icon icon="mdi:check-circle" width={20} height={20} />
              <span>Message sent successfully! We'll get back to you soon.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>
              <Icon icon="mdi:alert-circle" width={20} height={20} />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}

          <div className={styles.formActions}>
            <Button 
              variant="primary" 
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Icon icon="mdi:loading" width={18} height={18} className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  <Icon icon="mdi:send" width={18} height={18} />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

