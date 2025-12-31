import React from 'react'
import { Icon } from '@iconify/react'
import styles from './ContactInfo.module.css'

interface ContactInfoItem {
  icon: string
  title: string
  content: string
  link?: string
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: 'mdi:email',
    title: 'Email',
    content: 'info@exanode.com',
    link: 'mailto:info@exanode.com'
  },
  {
    icon: 'mdi:phone',
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: 'mdi:map-marker',
    title: 'Address',
    content: '123 Data Street, Tech City, TC 12345'
  },
  {
    icon: 'mdi:clock-outline',
    title: 'Business Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM'
  }
]

export const ContactInfo = () => {
  return (
    <section className={styles.contactInfo}>
      <div className={styles.infoGrid}>
        {contactInfo.map((item, index) => (
          <div key={index} className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Icon icon={item.icon} width={32} height={32} style={{ color: '#6155F5' }} />
            </div>
            <h3 className={styles.infoTitle}>{item.title}</h3>
            {item.link ? (
              <a href={item.link} className={styles.infoContent}>
                {item.content}
              </a>
            ) : (
              <p className={styles.infoContent}>{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

