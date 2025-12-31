'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Button } from '@/shared/ui/Button'
import styles from './Header.module.css'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>Logo</Link>
          <div className={styles.navLinks}>
            <Link 
              href="/" 
              className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
            >
              About us
            </Link>
            <Link 
              href="/#services" 
              className={styles.navLink}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
            >
              Contact
            </Link>
          </div>
          <div className={styles.headerButtons}>
            <Button variant="outline">Get free consultation</Button>
            <Button variant="primary">Contact us</Button>
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
            <Link 
              href="/" 
              className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              About us
            </Link>
            <Link 
              href="/#services" 
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <div className={styles.mobileMenuButtons}>
              <Button variant="outline">Get free consultation</Button>
              <Button variant="primary">Contact us</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

