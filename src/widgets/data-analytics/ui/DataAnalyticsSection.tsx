import React from 'react'
import Image from 'next/image'
import styles from './DataAnalyticsSection.module.css'

export const DataAnalyticsSection = () => {
  return (
    <section className={styles.dataAnalytics}>
      <div className={styles.analyticsGradient}></div>
      <div className={styles.analyticsContent}>
        <div className={styles.analyticsHeader}>
          <h2 className={styles.analyticsTitle}>From Raw Data to Clear Answers</h2>
          <div className={styles.analyticsDescription}>
            <div className={styles.analyticsDescriptionContent}>
              <Image src="/icons/arrow-long.svg" alt="arrow" width={120} height={27} className={styles.analyticsArrow} />
              <p className={styles.analyticsText}>
                Data without context is just noise. We help you cut through the complexity with analytics solutions that answer real business questions—delivered through dashboards your teams will actually use.
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.processNumber}>01</div>
            <div className={styles.processStepTitleWrapper}>
              <Image src="/icons/arrow.svg" alt="arrow" width={20} height={17} className={styles.processArrow} />
              <h3 className={styles.processStepTitle}>Discovery & Requirements</h3>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.processNumber}>02</div>
            <div className={styles.processStepTitleWrapper}>
              <Image src="/icons/arrow.svg" alt="arrow" width={20} height={17} className={styles.processArrow} />
              <h3 className={styles.processStepTitle}>Data Preparation & Modeling</h3>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.processNumber}>03</div>
            <div className={styles.processStepTitleWrapper}>
              <Image src="/icons/arrow.svg" alt="arrow" width={20} height={17} className={styles.processArrow} />
              <h3 className={styles.processStepTitle}>Analysis & Insights</h3>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.processNumber}>04</div>
            <div className={styles.processStepTitleWrapper}>
              <Image src="/icons/arrow.svg" alt="arrow" width={20} height={17} className={styles.processArrow} />
              <h3 className={styles.processStepTitle}>Visualization & Delivery</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

