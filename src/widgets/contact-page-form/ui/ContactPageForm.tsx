import React from 'react'
import { ContactForm as BaseContactForm } from '@/shared/ui/ContactForm'

export const ContactPageForm = () => {
  return (
    <BaseContactForm
      variant="full"
      showPhone={true}
      headerTitle="Send us a Message"
      headerDescription="Fill out the form below and we'll get back to you as soon as possible."
    />
  )
}

