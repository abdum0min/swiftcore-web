'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ContactHero } from '@/widgets/contact-hero'
import { ContactInfo } from '@/widgets/contact-info'
import styles from './ContactPage.module.css'

const ContactPageForm = dynamic(
  () => import('@/widgets/contact-page-form').then(mod => ({ default: mod.ContactPageForm })),
  { ssr: false }
)

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageGradient}></div>
      <ContactHero />
      <ContactInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPageForm />
      </Suspense>
    </div>
  )
}

export default ContactPage

