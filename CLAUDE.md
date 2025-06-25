# FiscalePro Landing Page - Claude Developer Guide

## 🎯 Project Overview

This is a modern, AI-centric landing page for FiscalePro - an AI-powered IT company specializing in enterprise solutions for banks, oil & gas companies, and government organizations in Kyrgyzstan.

### Key Features:
- **Mobile-first responsive design** with comprehensive breakpoints
- **SVG icon system** replacing emoji for professional appearance
- **Glassmorphism UI** with modern visual effects
- **Framer Motion animations** for smooth interactions
- **TypeScript** for type safety
- **Test-Driven Development** with Jest and Testing Library
- **Docker deployment** ready with port 4599

## 🏗️ Architecture & Tech Stack

### Frontend
- **Next.js 15.3.4** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion** - Animations and interactions

### UI Components
- Custom component library in `/src/components/ui/`
- SVG icon system in `/src/components/icons/`
- Section components in `/src/components/sections/`

### Testing
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **Test coverage** for critical components

### Deployment
- **Docker** & **Docker Compose** configured
- **GitHub Actions** ready
- **Production port**: 4599

## 📁 Project Structure

```
fiscalepro-landing/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page component
│   │   └── globals.css        # Global styles & Tailwind
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx     # Button with variants
│   │   │   ├── Card.tsx       # Card components
│   │   │   └── Icon.tsx       # Icon wrapper component
│   │   ├── icons/             # SVG icon components
│   │   │   └── icons.tsx      # All SVG icons
│   │   └── sections/          # Page sections
│   │       ├── Header.tsx     # Navigation header
│   │       ├── Hero.tsx       # Hero section
│   │       ├── TrustSignals.tsx
│   │       ├── Solutions.tsx
│   │       ├── TechnologyShowcase.tsx
│   │       ├── SuccessStories.tsx
│   │       ├── CompetitiveAdvantages.tsx
│   │       ├── Team.tsx
│   │       ├── ContactForm.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── types.ts           # TypeScript interfaces
│   │   └── data.ts            # Static data & content
│   └── utils/
│       └── cn.ts              # Class name utility
├── __tests__/                  # Test files
├── public/                     # Static assets
├── docker-compose.yml          # Docker configuration
├── Dockerfile                  # Container setup
└── package.json               # Dependencies & scripts
```

## 🎨 Design System

### Colors
```css
--brand-navy: #1B2951;      /* Primary dark */
--brand-blue: #00A8FF;      /* Primary accent */
--brand-purple: #6366f1;    /* Secondary accent */
--brand-gold: #FFD700;      /* Premium accent */
```

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (content)
- **Mobile-first sizes** with responsive scaling

### Breakpoints (Mobile-First)
```scss
- Default: < 640px (mobile)
- sm: >= 640px (tablet)
- md: >= 768px (small laptop)
- lg: >= 1024px (desktop)
- xl: >= 1280px (large desktop)
```

## 🚀 Development Commands

```bash
# Install dependencies (if needed)
npm install @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom

# Development
npm run dev                 # Start dev server
npm run build              # Build for production
npm run start              # Start production server

# Testing
npm test                   # Run tests
npm run test:watch         # Watch mode
npm run test:coverage      # Coverage report

# Linting
npm run lint               # Run ESLint

# Docker
docker-compose up --build  # Build and run
docker-compose down        # Stop containers
```

## 📋 Development Guidelines

### 1. Mobile-First Approach
Always start with mobile styles and add responsive classes:
```tsx
// ✅ Good - Mobile first
<div className="p-4 sm:p-6 lg:p-8">

// ❌ Bad - Desktop first
<div className="p-8 max-sm:p-4">
```

### 2. Icon Usage
Use SVG icons from the icon system:
```tsx
// ✅ Good
<Icon name="brain" size="lg" className="text-blue-600" />

// ❌ Bad - Don't use emoji
<span>🧠</span>
```

### 3. Component Testing
Write tests for all new components:
```tsx
// Component test example
describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />)
    expect(screen.getByRole('...')).toBeInTheDocument()
  })
})
```

### 4. Type Safety
Always define proper TypeScript types:
```tsx
// ✅ Good
interface Props {
  title: string
  variant?: 'primary' | 'secondary'
}

// ❌ Bad
const Component = (props: any) => ...
```

### 5. Accessibility
- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers

### 6. Performance
- Use Next.js Image component for images
- Implement lazy loading for heavy components
- Optimize bundle size with dynamic imports
- Use proper caching strategies

## 🐛 Common Issues & Solutions

### 1. Hydration Errors
**Problem**: React hydration mismatch
**Solution**: Avoid using Math.random() or Date.now() in render. Use deterministic values or useEffect.

### 2. TypeScript Errors
**Problem**: Framer Motion type errors
**Solution**: Use `as const` for animation variants

### 3. Mobile Layout Issues
**Problem**: Content overflow on mobile
**Solution**: Use proper padding and responsive classes

### 4. Docker Build Failures
**Problem**: ESLint errors during build
**Solution**: Fix all linting errors or update ESLint config

## 📝 Content Management

### Adding New Icons
1. Create SVG component in `/src/components/icons/icons.tsx`
2. Add to iconComponents map in `/src/components/ui/Icon.tsx`
3. Use with `<Icon name="your-icon" />`

### Adding New Sections
1. Create component in `/src/components/sections/`
2. Import in `/src/app/page.tsx`
3. Add to page layout
4. Write tests in `__tests__/components/`

### Updating Company Data
Edit `/src/lib/data.ts` for:
- Solutions
- Case studies
- Team members
- Statistics
- Client logos

## 🔧 Environment Variables

Create `.env.local` for local development:
```env
# API endpoints (when needed)
NEXT_PUBLIC_API_URL=https://api.fiscalepro.kg

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🚢 Deployment

### Docker Deployment
```bash
# Build and run
docker-compose up -d --build

# Check logs
docker-compose logs -f

# Access at http://localhost:4599
```

### Production Checklist
- [ ] Run `npm run build` locally
- [ ] Run `npm test` - all tests pass
- [ ] Check mobile responsiveness
- [ ] Optimize images and assets
- [ ] Update meta tags and SEO
- [ ] Configure proper environment variables
- [ ] Set up monitoring and analytics
- [ ] Configure CDN for static assets

## 🤝 Contribution Guidelines

1. **Branch naming**: `feature/description` or `fix/description`
2. **Commit messages**: Use conventional commits
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation
   - `style:` formatting
   - `refactor:` code restructuring
   - `test:` adding tests
   - `chore:` maintenance

3. **PR process**:
   - Write descriptive PR titles
   - Include screenshots for UI changes
   - Ensure all tests pass
   - Request review from team lead

## 📊 Performance Targets

- **Lighthouse Score**: > 90 for all metrics
- **First Contentful Paint**: < 1.2s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: < 200KB (gzipped)

## 🔐 Security Considerations

- Never commit sensitive data
- Use environment variables for API keys
- Implement proper CORS policies
- Sanitize user inputs
- Keep dependencies updated
- Use HTTPS in production

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Testing Library](https://testing-library.com/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Future Enhancements

1. **Internationalization (i18n)**
   - Add support for Kyrgyz and English
   - Use next-i18next

2. **CMS Integration**
   - Integrate Contentful or Sanity
   - Dynamic content management

3. **Advanced Analytics**
   - User behavior tracking
   - Conversion funnel optimization
   - A/B testing framework

4. **Performance Optimizations**
   - Implement service worker
   - Add offline support
   - Image optimization pipeline

5. **Accessibility Improvements**
   - Full WCAG 2.1 AA compliance
   - Screen reader optimization
   - Keyboard navigation enhancements

## 🆘 Support

For questions or issues:
1. Check this documentation
2. Review existing GitHub issues
3. Contact the development team
4. Email: dev@fiscalepro.kg

---

*Last updated: June 2024*
*Version: 1.0.0*