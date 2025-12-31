import React from 'react'
import styles from './ContactHero.module.css'

export const ContactHero = () => {
  return (
    <section className={styles.contactHero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Contact Us</h1>
        <p className={styles.heroDescription}>
          Get in touch with our team. We're here to help you transform your data infrastructure 
          and unlock the full potential of your business data.
        </p>
      </div>
    </section>
  )
}

