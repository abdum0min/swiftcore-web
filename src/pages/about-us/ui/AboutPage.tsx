'use client'

import React from 'react'
import { AboutHero } from '@/widgets/about-hero'
import { SolutionsSection } from '@/widgets/solutions'
import { TeamSlider } from '@/widgets/team-slider'
import styles from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageGradient}></div>
      <AboutHero />
      <SolutionsSection />
      <TeamSlider />
    </div>
  )
}

export default AboutPage

