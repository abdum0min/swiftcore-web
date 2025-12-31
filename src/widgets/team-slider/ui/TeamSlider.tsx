'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { Icon } from '@iconify/react'
import styles from './TeamSlider.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  email?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Smith',
    role: 'Lead Data Engineer',
    bio: '10+ years of experience in building scalable data infrastructure. Expert in cloud-native solutions and data pipeline optimization.',
    linkedin: '#',
    email: 'john@exanode.com'
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Data Analyst',
    bio: 'Specializes in transforming complex data into actionable business insights. Passionate about data visualization and analytics.',
    linkedin: '#',
    email: 'sarah@exanode.com'
  },
  {
    name: 'Michael Chen',
    role: 'Data Architect',
    bio: 'Designs enterprise-level data architectures. Expert in data modeling, warehousing, and ensuring data quality at scale.',
    linkedin: '#',
    email: 'michael@exanode.com'
  },
  {
    name: 'Emily Davis',
    role: 'Cloud Solutions Engineer',
    bio: 'Focuses on cloud-native data solutions and infrastructure automation. Expert in Azure, AWS, and modern data platforms.',
    linkedin: '#',
    email: 'emily@exanode.com'
  },
  {
    name: 'David Wilson',
    role: 'Data Security Specialist',
    bio: 'Ensures data security and compliance across all projects. Expert in implementing security best practices and regulatory compliance.',
    linkedin: '#',
    email: 'david@exanode.com'
  },
  {
    name: 'Lisa Anderson',
    role: 'Business Intelligence Lead',
    bio: 'Transforms data into strategic business insights. Expert in BI tools, reporting, and helping organizations make data-driven decisions.',
    linkedin: '#',
    email: 'lisa@exanode.com'
  }
]

export const TeamSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.teamSlider}>
      <div className={styles.teamContent}>
        <div className={styles.teamHeader}>
          <h2 className={styles.teamTitle}>Our Team</h2>
          <p className={styles.teamDescription}>
            Meet the talented professionals behind Exanode&apos;s success.
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <button 
            className={styles.sliderButton}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous member"
          >
            <Icon icon="mdi:chevron-left" width={24} height={24} />
          </button>

          <div className={styles.swiperWrapper}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={24}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 24
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 32
                }
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex)
              }}
              className={styles.swiper}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.memberCard}>
                    <div className={styles.memberImage}>
                      <div className={styles.memberImagePlaceholder}>
                        <Icon icon="mdi:account" width={64} height={64} style={{ color: '#6155F5' }} />
                      </div>
                    </div>
                    <div className={styles.memberInfo}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberRole}>{member.role}</p>
                      <p className={styles.memberBio}>{member.bio}</p>
                      <div className={styles.memberSocial}>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            className={styles.socialLink}
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Icon icon="mdi:linkedin" width={20} height={20} />
                          </a>
                        )}
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`} 
                            className={styles.socialLink}
                            aria-label={`Email ${member.name}`}
                          >
                            <Icon icon="mdi:email" width={20} height={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button 
            className={styles.sliderButton}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next member"
          >
            <Icon icon="mdi:chevron-right" width={24} height={24} />
          </button>
        </div>

        <div className={styles.sliderDots}>
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
