'use client'

import React from 'react'
import { ContactHero } from '@/widgets/contact-hero'
import { ContactInfo } from '@/widgets/contact-info'
import { ContactPageForm } from '@/widgets/contact-page-form'
import styles from './ContactPage.module.css'

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageGradient}></div>
      <ContactHero />
      <ContactInfo />
      <ContactPageForm />
    </div>
  )
}

export default ContactPage

