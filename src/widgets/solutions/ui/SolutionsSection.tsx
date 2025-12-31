import React from 'react'
import { Icon } from '@iconify/react'
import styles from './SolutionsSection.module.css'

interface Solution {
  icon: string
  title: string
  description: string
}

const solutions: Solution[] = [
  {
    icon: 'mdi:shield-check',
    title: 'Reliability First',
    description: 'We design for failure—because systems fail. Our pipelines include monitoring, alerting, retry logic, and graceful degradation so your data keeps flowing.'
  },
  {
    icon: 'mdi:chart-line',
    title: 'Built to Scale',
    description: 'Whether you&apos;re processing gigabytes or petabytes, our architectures grow with your business without requiring costly re-platforming.'
  },
  {
    icon: 'mdi:school',
    title: 'Knowledge Transfer',
    description: 'We don&apos;t just build and leave. We document everything, train your teams, and ensure you can maintain and extend what we deliver.'
  }
]

export const SolutionsSection = () => {
  return (
    <section className={styles.solutions}>
      <div className={styles.solutionsContent}>
        <div className={styles.solutionsHeader}>
          <h2 className={styles.solutionsTitle}>Data Engineering, Done Right</h2>
          <p className={styles.solutionsDescription}>
            Our approach is built on three core principles that ensure your data infrastructure delivers real business value.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div key={index} className={`${styles.solutionCard} ${styles.cardShadow1}`}>
              <div className={styles.solutionIcon}>
                <Icon icon={solution.icon} width={32} height={32} style={{ color: '#6155F5' }} />
              </div>
              <h3 className={styles.solutionTitle}>{solution.title}</h3>
              <p className={styles.solutionDescription}>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

