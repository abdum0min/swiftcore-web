'use client'

import React from 'react'
import { HeroSection } from '@/widgets/hero'
import { DataEngineeringSection } from '@/widgets/data-engineering'
import { DataAnalyticsSection } from '@/widgets/data-analytics'
import { TechnologySection } from '@/widgets/technology'
import { ContactForm } from '@/widgets/contact-form'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageGradient}></div>
      <HeroSection />
      <DataEngineeringSection />
      <DataAnalyticsSection />
      <TechnologySection />
      <ContactForm />
    </div>
  )
}

export default HomePage
