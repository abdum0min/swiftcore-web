import React from 'react'
import { ContactForm as BaseContactForm } from '@/shared/ui/ContactForm'

export const ContactForm = () => {
  return (
    <BaseContactForm
      variant="compact"
      showPhone={true}
      headerTitle="Get in Touch"
      headerDescription="Have a question or want to discuss your data engineering needs? We'd love to hear from you."
    />
  )
}

