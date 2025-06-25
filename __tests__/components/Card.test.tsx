import React from 'react'
import { render, screen } from '@testing-library/react'
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/Card'

describe('Card Components', () => {
  describe('Card', () => {
    it('renders with default variant', () => {
      render(<Card>Card content</Card>)
      const card = screen.getByText('Card content')
      expect(card).toHaveClass('bg-white', 'border', 'border-gray-200', 'shadow-sm')
    })

    it('renders different variants correctly', () => {
      const { rerender } = render(<Card variant="default">Default</Card>)
      expect(screen.getByText('Default')).toHaveClass('bg-white')

      rerender(<Card variant="glass">Glass</Card>)
      expect(screen.getByText('Glass')).toHaveClass('bg-white/10', 'backdrop-blur-md')

      rerender(<Card variant="gradient">Gradient</Card>)
      expect(screen.getByText('Gradient')).toHaveClass('bg-gradient-to-br')

      rerender(<Card variant="hover">Hover</Card>)
      expect(screen.getByText('Hover')).toHaveClass('hover:shadow-xl', 'hover:-translate-y-1')
    })

    it('applies custom className', () => {
      render(<Card className="custom-class">Custom card</Card>)
      const card = screen.getByText('Custom card')
      expect(card).toHaveClass('custom-class')
    })

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>()
      render(<Card ref={ref}>Ref card</Card>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('CardHeader', () => {
    it('renders with proper spacing', () => {
      render(
        <Card>
          <CardHeader>Header content</CardHeader>
        </Card>
      )
      const header = screen.getByText('Header content')
      expect(header).toHaveClass('p-6', 'pb-4')
    })
  })

  describe('CardContent', () => {
    it('renders with proper spacing', () => {
      render(
        <Card>
          <CardContent>Content here</CardContent>
        </Card>
      )
      const content = screen.getByText('Content here')
      expect(content).toHaveClass('p-6', 'pt-0')
    })
  })

  describe('CardTitle', () => {
    it('renders as h3 element', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title text</CardTitle>
          </CardHeader>
        </Card>
      )
      const title = screen.getByText('Title text')
      expect(title.tagName).toBe('H3')
      expect(title).toHaveClass('text-lg', 'font-semibold')
    })
  })

  describe('CardDescription', () => {
    it('renders as paragraph element', () => {
      render(
        <Card>
          <CardHeader>
            <CardDescription>Description text</CardDescription>
          </CardHeader>
        </Card>
      )
      const description = screen.getByText('Description text')
      expect(description.tagName).toBe('P')
      expect(description).toHaveClass('text-sm', 'text-gray-600', 'mt-2')
    })
  })

  it('renders complete card structure', () => {
    render(
      <Card variant="hover">
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
          <CardDescription>This is a test card description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here</p>
        </CardContent>
      </Card>
    )

    expect(screen.getByText('Test Card')).toBeInTheDocument()
    expect(screen.getByText('This is a test card description')).toBeInTheDocument()
    expect(screen.getByText('Card content goes here')).toBeInTheDocument()
  })
})