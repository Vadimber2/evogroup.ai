import ModernHeader from '@/components/sections/ModernHeader'
import ModernHero from '@/components/sections/ModernHero'
import Solutions from '@/components/sections/Solutions'
import TechnologyShowcase from '@/components/sections/TechnologyShowcase'
import SuccessStories from '@/components/sections/SuccessStories'
import Team from '@/components/sections/Team'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/sections/Footer'

export default function Home() {
    return (
        <main>
            <ModernHeader />
            <ModernHero />
            <Solutions />
            <TechnologyShowcase />
            <SuccessStories />
            <Team />
            <ContactForm />
            <Footer />
        </main>
    )
}
