import React from 'react'
import { Icon } from '@iconify/react'
import { Button } from '@/shared/ui/Button'
import styles from './DataEngineeringSection.module.css'

export const DataEngineeringSection = () => {
  return (
    <section id="services" className={styles.dataEngineering}>
      <div className={styles.sectionGradient}></div>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Data Engineering That Scales With Your Business</h2>
        <p className={styles.sectionDescription}>
          Raw data is only valuable when it flows reliably to the people who need it. We build modern data infrastructure that handles the complexity—so your teams can focus on what the data means, not how to access it.
        </p>
        <div className={styles.cardsGrid}>
          {/* Lakehouse & Warehouse Platforms Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(97, 85, 245, 0.3)' }}>
              <Icon icon="mdi:database" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Lakehouse & Warehouse Platforms</h3>
            <p className={styles.cardDescription}>
              Delta Lake on Databricks, Synapse, Snowflake, Redshift—we design the storage layer, compute strategy, and table structures that match your query patterns and budget.
            </p>
          </div>

          {/* Ingestion at Scale Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(59, 130, 246, 0.3)' }}>
              <Icon icon="mdi:cloud-upload" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Ingestion at Scale</h3>
            <p className={styles.cardDescription}>
              CDC from production databases without killing your OLTP. REST API pagination that doesn&apos;t break at 10M records. File drops from SFTP and S3 that handle schema drift.
            </p>
          </div>

          {/* Orchestration & Monitoring Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(239, 68, 68, 0.3)' }}>
              <Icon icon="mdi:chart-timeline-variant" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Orchestration & Monitoring</h3>
            <p className={styles.cardDescription}>
              Airflow, Databricks Workflows, Azure Data Factory, Prefect—pick your orchestrator. We set up DAGs with proper dependency management, SLA tracking, and alerting.
            </p>
          </div>

          {/* Transformation Layers Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(219, 39, 119, 0.3)' }}>
              <Icon icon="mdi:code-braces" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Transformation Layers</h3>
            <p className={styles.cardDescription}>
              dbt, Spark, or plain SQL—depending on what fits. We build staging, intermediate, and mart layers with tests, documentation, and lineage.
            </p>
          </div>

          {/* Data Contracts & Quality Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(20, 184, 166, 0.3)' }}>
              <Icon icon="mdi:shield-check" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Data Contracts & Quality</h3>
            <p className={styles.cardDescription}>
              Great Expectations, dbt tests, custom validation. Schema enforcement at ingestion. Data quality dashboards that show freshness, completeness, and anomaly detection.
            </p>
          </div>

          {/* Access Control & Compliance Card */}
          <div className={`${styles.card} ${styles.cardShadow1}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(34, 197, 94, 0.3)' }}>
              <Icon icon="mdi:lock" width={24} height={24} style={{ color: '#ffffff' }} />
            </div>
            <h3 className={styles.cardTitle}>Access Control & Compliance</h3>
            <p className={styles.cardDescription}>
              Unity Catalog, Lake Formation, Purview—row-level security, column masking, audit logs. We&apos;ve done GDPR, SOC 2, HIPAA.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.dataEngineeringButtons}>
        <Button variant="outline">Let&apos;s Talk Architecture</Button>
        <Button variant="primary">Schedule a Free Consultation</Button>
      </div>
    </section>
  )
}

