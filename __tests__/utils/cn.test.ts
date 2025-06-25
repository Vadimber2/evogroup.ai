import { cn } from '@/utils/cn'

describe('cn utility', () => {
  it('should merge class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500')
    expect(result).toBe('text-red-500 bg-blue-500')
  })

  it('should handle conditional classes', () => {
    const result = cn('base-class', {
      'active': true,
      'disabled': false
    })
    expect(result).toBe('base-class active')
  })

  it('should override conflicting Tailwind classes', () => {
    const result = cn('text-red-500', 'text-blue-500')
    expect(result).toBe('text-blue-500')
  })

  it('should handle arrays of classes', () => {
    const result = cn(['text-sm', 'font-bold'], 'bg-gray-100')
    expect(result).toBe('text-sm font-bold bg-gray-100')
  })

  it('should filter out falsy values', () => {
    const result = cn('text-sm', null, undefined, false, '', 'bg-blue-500')
    expect(result).toBe('text-sm bg-blue-500')
  })

  it('should handle empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })
})