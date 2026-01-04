'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/widgets/hero'
import { DataEngineeringSection } from '@/widgets/data-engineering'
import { DataAnalyticsSection } from '@/widgets/data-analytics'
import { TechnologySection } from '@/widgets/technology'
import styles from './HomePage.module.css'

const ContactForm = dynamic(
  () => import('@/widgets/contact-form').then(mod => ({ default: mod.ContactForm })),
  { ssr: false }
)

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageGradient}></div>
      <HeroSection />
      <DataEngineeringSection />
      <DataAnalyticsSection />
      <TechnologySection />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  )
}

export default HomePage
