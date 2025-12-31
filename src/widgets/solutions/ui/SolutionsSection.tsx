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
    icon: 'mdi:database-sync',
    title: 'Scalable Data Infrastructure',
    description: 'We design and implement data architectures that grow with your business, ensuring high performance and reliability at any scale.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Enterprise Security',
    description: 'Your data security is our priority. We implement industry-leading security practices and compliance standards.'
  },
  {
    icon: 'mdi:chart-line',
    title: 'Advanced Analytics',
    description: 'Transform raw data into actionable insights with our comprehensive analytics solutions and reporting tools.'
  },
  {
    icon: 'mdi:cloud-check',
    title: 'Cloud-Native Solutions',
    description: 'Leverage the power of cloud computing with our optimized cloud-native data engineering solutions.'
  },
  {
    icon: 'mdi:robot',
    title: 'Automated Pipelines',
    description: 'Reduce manual work and increase efficiency with our automated data pipeline solutions.'
  },
  {
    icon: 'mdi:lightning-bolt',
    title: 'Real-Time Processing',
    description: 'Get instant insights with our real-time data processing and streaming capabilities.'
  }
]

export const SolutionsSection = () => {
  return (
    <section className={styles.solutions}>
      <div className={styles.solutionsContent}>
        <div className={styles.solutionsHeader}>
          <h2 className={styles.solutionsTitle}>Our Solutions</h2>
          <p className={styles.solutionsDescription}>
            We provide comprehensive data engineering and analytics solutions tailored to your business needs.
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

