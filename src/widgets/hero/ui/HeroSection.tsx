import React from 'react'
import { Button } from '@/shared/ui/Button'
import styles from './HeroSection.module.css'

export const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Data Engineering & Analytics for Reliable, Secure, and Scalable Data Systems
      </h1>
      <p className={styles.heroDescription}>
        We build automated and incremental data pipelines that continuously transform raw data from multiple sources.
      </p>
      <div className={styles.heroButtons}>
        <Button variant="outline">Get free consultation</Button>
        <Button variant="primary">Contact us</Button>
      </div>
    </section>
  )
}

