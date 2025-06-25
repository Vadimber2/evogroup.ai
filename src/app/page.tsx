import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import TrustSignals from '@/components/sections/TrustSignals'
import Solutions from '@/components/sections/Solutions'
import TechnologyShowcase from '@/components/sections/TechnologyShowcase'
import SuccessStories from '@/components/sections/SuccessStories'
import CompetitiveAdvantages from '@/components/sections/CompetitiveAdvantages'
import Team from '@/components/sections/Team'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Solutions />
        <TechnologyShowcase />
        <SuccessStories />
        <CompetitiveAdvantages />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}