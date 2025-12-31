import React from 'react'
import styles from './ContactHero.module.css'

export const ContactHero = () => {
  return (
    <section className={styles.contactHero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Ready to Fix Your Data Problems?</h1>
        <p className={styles.heroDescription}>
          Tell us about your challenges. We&apos;ll share honest feedback on what&apos;s possible—and whether we&apos;re the right fit to help.
        </p>
      </div>
    </section>
  )
}

