import React from 'react'
import { Button } from '@/shared/ui/Button'
import styles from './HeroSection.module.css'

export const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Turn Your Data Into a Competitive Advantage
      </h1>
      <p className={styles.heroDescription}>
        We design and implement automated, scalable data pipelines that transform raw information into reliable insights—so you can make faster, smarter decisions.
      </p>
      <div className={styles.heroButtons}>
        <Button variant="outline">Schedule a Free Consultation</Button>
        <Button variant="primary">See Our Work</Button>
      </div>
    </section>
  )
}

