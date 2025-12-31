import React from 'react'
import styles from './AboutHero.module.css'

export const AboutHero = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>About Exanode</h1>
        <p className={styles.heroDescription}>
          We are a team of passionate data engineers and analysts dedicated to transforming 
          complex data challenges into scalable, secure, and reliable solutions.
        </p>
        <p className={styles.heroSubDescription}>
          With years of experience in data engineering and analytics, we help businesses 
          unlock the full potential of their data infrastructure.
        </p>
      </div>
    </section>
  )
}

