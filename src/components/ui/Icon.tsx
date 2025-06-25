import React from 'react'
import { cn } from '@/utils/cn'

interface IconProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const iconMap: Record<string, string> = {
  // API and Integration
  'api': '🔗',
  'database': '🗄️',
  'cloud': '☁️',
  
  // Business and Finance
  'bank': '🏦',
  'building': '🏢',
  'chart': '📊',
  'money': '💰',
  
  // Technology and AI
  'brain': '🧠',
  'cog': '⚙️',
  'robot': '🤖',
  'cpu': '💻',
  
  // Actions and Features
  'shield': '🛡️',
  'puzzle': '🧩',
  'rocket': '🚀',
  'lightning': '⚡',
  
  // Government and Legal
  'government': '🏛️',
  'document': '📄',
  'certificate': '📜',
  
  // Communication
  'phone': '📞',
  'email': '📧',
  'location': '📍',
  
  // Social
  'linkedin': '💼',
  'github': '👨‍💻',
  
  // UI Elements
  'arrow-right': '→',
  'arrow-left': '←',
  'arrow-up': '↑',
  'arrow-down': '↓',
  'check': '✓',
  'close': '✕',
  'menu': '☰',
  'search': '🔍',
  'star': '⭐',
  'heart': '❤️',
  'eye': '👁️',
  'download': '⬇️',
  'upload': '⬆️',
  'edit': '✏️',
  'delete': '🗑️',
  'settings': '⚙️',
  'info': 'ℹ️',
  'warning': '⚠️',
  'error': '❌',
  'success': '✅'
}

const Icon: React.FC<IconProps> = ({ name, className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  return (
    <span 
      className={cn(
        'inline-block leading-none',
        sizeClasses[size],
        className
      )}
      role="img"
      aria-label={name}
    >
      {iconMap[name] || '❓'}
    </span>
  )
}

export { Icon }