'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import styles from './HomePage.module.css'

const HomePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.pageGradient}></div>
            {/* Header */}
            <header className={styles.headerWrapper}>
                <div className={styles.header}>
                    <nav className={styles.nav}>
                        <a href="#home" className={styles.logo}>Logo</a>
                        <div className={styles.navLinks}>
                            <a href="#home" className={styles.navLink}>Home</a>
                            <a href="#about" className={styles.navLink}>About us</a>
                            <a href="#services" className={styles.navLink}>Services</a>
                        </div>
                        <div className={styles.headerButtons}>
                            <button className={styles.btnOutline}>Get free consultation</button>
                            <button className={styles.btnPrimary}>Contact us</button>
                        </div>
                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <Icon icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"} width={24} height={24} />
                        </button>
                    </nav>
                    <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                        <div className={styles.mobileMenuLinks}>
                            <a href="#home" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
                            <a href="#about" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About us</a>
                            <a href="#services" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Services</a>
                            <div className={styles.mobileMenuButtons}>
                                <button className={styles.btnOutline}>Get free consultation</button>
                                <button className={styles.btnPrimary}>Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className={`${styles.hero} ${styles.section}`}>
                <h1 className={styles.heroTitle}>
                    Data Engineering & Analytics for Reliable, Secure, and Scalable Data Systems
                </h1>
                <p className={styles.heroDescription}>
                    We build automated and incremental data pipelines that continuously transform raw data from multiple sources.
                </p>
                <div className={styles.heroButtons}>
                    <button className={styles.btnOutline}>Get free consultation</button>
                    <button className={styles.btnPrimary}>Contact us</button>
                </div>
            </section>

            {/* Data Engineering Section */}
            <section id="services" className={`${styles.dataEngineering} ${styles.section}`}>
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
                    <button className={styles.btnOutline}>Get free consultation</button>
                    <button className={styles.btnPrimary}>Contact us</button>
                </div>
            </section>

            {/* Data Analytics Section */}
            <section className={`${styles.dataAnalytics} ${styles.section}`}>
                <div className={styles.analyticsGradient}></div>
                <div className={styles.analyticsContent}>
                    <div className={styles.analyticsHeader}>
                        <h2 className={styles.analyticsTitle}>Data Analytics</h2>
                        <div className={styles.analyticsDescription}>
                            <div className={styles.analyticsDescriptionContent}>
                                <Image src="/icons/arrow-long.svg" alt="arrow" width={120} height={27} className={styles.analyticsArrow} />
                                <p className={styles.analyticsText}>
                                    We transform raw data into actionable insights through a structured analytics process.
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
                                <h3 className={styles.processStepTitle}>Data Discovery & Requirements</h3>
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
                                <h3 className={styles.processStepTitle}>Analytics & Insights</h3>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>04</div>
                            <div className={styles.processStepTitleWrapper}>
                                <Image src="/icons/arrow.svg" alt="arrow" width={20} height={17} className={styles.processArrow} />
                                <h3 className={styles.processStepTitle}>Visualization & Reporting</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className={`${styles.technology} ${styles.section}`}>
                <h2 className={styles.technologyTitle}>The technology at our disposal</h2>
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

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerColumnTitle}>Contact</h3>
                        <a href="mailto:email@gmail.com" className={styles.footerLink}>email@gmail.com</a>
                        <a href="mailto:email@gmail.com" className={styles.footerLink}>email@gmail.com</a>
                        <a href="mailto:email@gmail.com" className={styles.footerLink}>email@gmail.com</a>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerColumnTitle}>Address</h3>
                        <p className={styles.footerText}>Address 21 something</p>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerColumnTitle}>Social</h3>
                        <a href="#" className={styles.socialLink}>
                            <Icon icon="mdi:linkedin" width={20} height={20} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p className={styles.footerCopyright}>© 2023. All rights reserved.</p>
                    <div className={styles.footerLogo}>Logo</div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage
