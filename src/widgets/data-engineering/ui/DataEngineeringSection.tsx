import React from 'react'
import { Icon } from '@iconify/react'
import { Button } from '@/shared/ui/Button'
import styles from './DataEngineeringSection.module.css'

export const DataEngineeringSection = () => {
  return (
    <section id="services" className={styles.dataEngineering}>
      <div className={styles.sectionGradient}></div>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Data Engineering</h2>
        <p className={styles.sectionDescription}>
          We design and build reliable, automated data pipelines that continuously collect, process, and prepare data for analytics.
        </p>
        <div className={styles.cardsGrid}>
          {/* Auto load Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(97, 85, 245, 0.3)' }}>
              <Icon icon="mdi:clock-outline" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Auto load</h3>
          </div>

          {/* Incremental load Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(59, 130, 246, 0.3)' }}>
              <Icon icon="mdi:refresh" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Incremental load</h3>
          </div>

          {/* Multi-source Ingestion Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(239, 68, 68, 0.3)' }}>
              <Icon icon="mdi:earth" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Multi-source Ingestion</h3>
          </div>

          {/* Data Warehouse Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(219, 39, 119, 0.3)' }}>
              <Icon icon="mdi:database" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Data Warehouse</h3>
          </div>

          {/* Data Modeling Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(20, 184, 166, 0.3)' }}>
              <Icon icon="mdi:view-grid" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Data Modeling</h3>
          </div>

          {/* Data Security & Quality Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(34, 197, 94, 0.3)' }}>
              <Icon icon="mdi:shield-check" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Data Security & Quality</h3>
          </div>
        </div>
      </div>
      <div className={styles.dataEngineeringButtons}>
        <Button variant="outline">Get free consultation</Button>
        <Button variant="primary">Contact us</Button>
      </div>
    </section>
  )
}

