import React from 'react'
import { cn } from '@/utils/cn'
import * as Icons from '@/components/icons/icons'

interface IconProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
}

const Icon: React.FC<IconProps> = ({ name, className, size = 'md', color }) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  }

  const iconSize = sizeMap[size]

  const iconComponents: Record<string, React.FC<Icons.IconProps>> = {
    // API and Integration
    'api': Icons.ApiIcon,
    'database': Icons.DatabaseIcon,
    'cloud': Icons.CloudIcon,
    
    // Business and Finance
    'bank': Icons.BankIcon,
    'building': Icons.BuildingIcon,
    'chart': Icons.ChartIcon,
    'money': Icons.MoneyIcon,
    
    // Technology and AI
    'brain': Icons.BrainIcon,
    'cog': Icons.CogIcon,
    'robot': Icons.RobotIcon,
    'cpu': Icons.CpuIcon,
    
    // Actions and Features
    'shield': Icons.ShieldIcon,
    'puzzle': Icons.PuzzleIcon,
    'rocket': Icons.RocketIcon,
    'lightning': Icons.LightningIcon,
    
    // Government and Legal
    'government': Icons.GovernmentIcon,
    'document': Icons.DocumentIcon,
    'certificate': Icons.CertificateIcon,
    
    // Communication
    'phone': Icons.PhoneIcon,
    'email': Icons.EmailIcon,
    'location': Icons.LocationIcon,
    
    // Social
    'linkedin': Icons.LinkedinIcon,
    'github': Icons.GithubIcon,
    
    // UI Elements
    'arrow-right': Icons.ArrowRightIcon,
    'arrow-left': Icons.ArrowLeftIcon,
    'arrow-up': Icons.ArrowUpIcon,
    'arrow-down': Icons.ArrowDownIcon,
    'check': Icons.CheckIcon,
    'close': Icons.CloseIcon,
    'menu': Icons.MenuIcon,
    'search': Icons.SearchIcon,
    'star': Icons.StarIcon,
    'heart': Icons.HeartIcon,
    'eye': Icons.EyeIcon,
    
    // Industry specific
    'oil': Icons.OilIcon,
    'factory': Icons.FactoryIcon,
  }

  const IconComponent = iconComponents[name]

  if (!IconComponent) {
    // Fallback to a question mark icon if not found
    return (
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 24 24" 
        fill="none" 
        className={cn('inline-block', className)}
        aria-label={name}
      >
        <circle cx="12" cy="12" r="10" stroke={color || 'currentColor'} strokeWidth="2"/>
        <path d="M9 9a3 3 0 116 0c0 2-3 3-3 3M12 17h.01" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }

  return (
    <span 
      className={cn('inline-flex items-center justify-center', className)}
      role="img"
      aria-label={name}
    >
      <IconComponent size={iconSize} color={color} />
    </span>
  )
}

export { Icon }