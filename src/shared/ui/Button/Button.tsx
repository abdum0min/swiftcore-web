import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'outline' | 'primary'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  const buttonClass = variant === 'outline' ? styles.btnOutline : styles.btnPrimary
  
  return (
    <button 
      type={type}
      className={`${buttonClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

