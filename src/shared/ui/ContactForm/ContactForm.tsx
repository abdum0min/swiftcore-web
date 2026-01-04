'use client'

import React, { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@iconify/react'
import { useContactMutation } from '@/shared/api'
import styles from './ContactForm.module.css'

interface ContactFormProps {
  variant?: 'compact' | 'full'
  showPhone?: boolean
  className?: string
  headerTitle?: string
  headerDescription?: string
}

export const ContactForm: React.FC<ContactFormProps> = ({
  variant = 'full',
  showPhone = false,
  className = '',
  headerTitle,
  headerDescription
}) => {
  const { mutate: contactMutation, isPending } = useContactMutation()
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    company: '',
    phone_number: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    contactMutation(formData, {
      onSuccess: () => {
        // Reset form after success
        setFormData({
          full_name: '',
          email: '',
          subject: '',
          company: '',
          phone_number: '',
          message: ''
        })
      }
    })
  }

  return (
    <section className={`${styles.contactForm} ${className}`}>
      <div className={variant === 'compact' ? styles.contactContent : styles.formContainer}>
        {(headerTitle || headerDescription) && (
          <div className={variant === 'compact' ? styles.contactHeader : styles.formHeader}>
            {headerTitle && <h2 className={variant === 'compact' ? styles.contactTitle : styles.formTitle}>
              {headerTitle}
            </h2>}
            {headerDescription && <p className={variant === 'compact' ? styles.contactDescription : styles.formDescription}>
              {headerDescription}
            </p>}
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor={`full_name_${variant}`} className={styles.label}>
                <Icon icon="mdi:account" width={18} height={18} />
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id={`full_name_${variant}`}
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your full name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor={`email_${variant}`} className={styles.label}>
                <Icon icon="mdi:email" width={18} height={18} />
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id={`email_${variant}`}
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
              <label htmlFor={`subject_${variant}`} className={styles.label}>
                <Icon icon="mdi:subject" width={18} height={18} />
                Subject <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id={`subject_${variant}`}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor={`company_${variant}`} className={styles.label}>
                <Icon icon="mdi:office-building" width={18} height={18} />
                Company <span className={styles.optional}>(Optional)</span>
              </label>
              <input
                type="text"
                id={`company_${variant}`}
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your company name"
              />
            </div>
          </div>

          {showPhone && (
            <div className={styles.formGroup} style={{ marginBottom: '20px' }}>
              <label htmlFor={`phone_number_${variant}`} className={styles.label}>
                <Icon icon="mdi:phone" width={18} height={18} />
                Phone Number <span className={styles.optional}>(Optional)</span>
              </label>
              <input
                type="tel"
                id={`phone_number_${variant}`}
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className={styles.input}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor={`message_${variant}`} className={styles.label}>
              <Icon icon="mdi:message-text" width={18} height={18} />
              Message <span className={styles.required}>*</span>
            </label>
            <textarea
              id={`message_${variant}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Tell us about your project, requirements, or any questions you have..."
              rows={variant === 'compact' ? 6 : 8}
              required
            />
          </div>

          <div className={styles.formActions}>
            <Button 
              variant="primary" 
              type="submit"
              className={styles.submitButton}
              disabled={isPending}
            >
              {isPending ? (
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

