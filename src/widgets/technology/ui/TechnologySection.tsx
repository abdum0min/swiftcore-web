import React from 'react'
import Image from 'next/image'
import styles from './TechnologySection.module.css'

export const TechnologySection = () => {
  return (
    <section className={styles.technology}>
      <h2 className={styles.technologyTitle}>Built on Platforms You Can Trust</h2>
      <p className={styles.technologyDescription}>
        We work with industry-leading technologies to build solutions that are reliable, scalable, and supported for the long term.
      </p>
      <div className={styles.technologyGrid}>
        {/* Microsoft */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/mircosoft.svg" alt="Microsoft" width={48} height={48} />
          </div>
          <span className={styles.techName}>Microsoft</span>
        </div>

        {/* Microsoft Azure */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/azure.svg" alt="Microsoft Azure" width={48} height={48} />
          </div>
          <span className={styles.techName}>Microsoft Azure</span>
        </div>

        {/* OpenAI */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/gpt.svg" alt="Open AI" width={48} height={48} />
          </div>
          <span className={styles.techName}>Open AI</span>
        </div>

        {/* Databricks */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/databse.svg" alt="Databricks" width={48} height={48} />
          </div>
          <span className={styles.techName}>Databricks</span>
        </div>

        {/* Fivetran */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/profisee.svg" alt="Fivetran" width={48} height={48} />
          </div>
          <span className={styles.techName}>Fivetran</span>
        </div>

        {/* Power Apps */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/powerapss.svg" alt="Power Apps" width={48} height={48} />
          </div>
          <span className={styles.techName}>Power Apps</span>
        </div>

        {/* Azure Data Factory */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/poweraoutomate.svg" alt="Azure Data Factory" width={48} height={48} />
          </div>
          <span className={styles.techName}>Azure Data Factory</span>
        </div>

        {/* Power BI */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/powerbi.svg" alt="Power BI" width={48} height={48} />
          </div>
          <span className={styles.techName}>Power BI</span>
        </div>

        {/* Microsoft Digital Twins */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/copilot.svg" alt="Microsoft Digital Twins" width={48} height={48} />
          </div>
          <span className={styles.techName}>Microsoft Digital Twins</span>
        </div>

        {/* Microsoft Fabric */}
        <div className={styles.techItem}>
          <div className={styles.techIcon}>
            <Image src="/icons/fabric.svg" alt="Microsoft Fabric" width={48} height={48} />
          </div>
          <span className={styles.techName}>Microsoft Fabric</span>
        </div>
      </div>
    </section>
  )
}

