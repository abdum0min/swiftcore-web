import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import styles from './Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <Link href="/" className={styles.footerLogo}>Exanode</Link>
            <p className={styles.footerDescription}>
              Transforming data into actionable insights. We build reliable, secure, and scalable data systems.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Icon icon="mdi:linkedin" width={20} height={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <Icon icon="mdi:twitter" width={20} height={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <Icon icon="mdi:github" width={20} height={20} />
              </a>
            </div>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Quick Links</h3>
            <Link href="/" className={styles.footerLink}>Home</Link>
            <Link href="/about" className={styles.footerLink}>About Us</Link>
            <Link href="/#services" className={styles.footerLink}>Services</Link>
            <Link href="/contact" className={styles.footerLink}>Contact</Link>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Contact</h3>
            <a href="mailto:info@exanode.com" className={styles.footerLink}>
              <Icon icon="mdi:email" width={16} height={16} />
              info@exanode.com
            </a>
            <a href="tel:+15551234567" className={styles.footerLink}>
              <Icon icon="mdi:phone" width={16} height={16} />
              +1 (555) 123-4567
            </a>
            <p className={styles.footerText}>
              <Icon icon="mdi:map-marker" width={16} height={16} />
              123 Data Street, Tech City, TC 12345
            </p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © {currentYear} Exanode. All rights reserved.
          </p>
          <div className={styles.footerLegal}>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.separator}>•</span>
            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

