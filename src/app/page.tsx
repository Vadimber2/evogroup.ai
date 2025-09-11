import AIChatbotSection from '@/components/sections/AIChatbotSection'
import ModernHeader from "@/components/sections/ModernHeader";
import ModernHero from "@/components/sections/ModernHero";
import Solutions from "@/components/sections/Solutions";
import TechnologyShowcase from "@/components/sections/TechnologyShowcase";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AICalculatorSection from "@/components/sections/AICalculatorSection";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import SuccessStories from "@/components/sections/SuccessStories";
import Team from "@/components/sections/Team";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main>
            <ModernHeader />
            <ModernHero />
            <Solutions />
            <TechnologyShowcase />
            <TestimonialsSection />
            <AICalculatorSection />
            <PortfolioGallery />
            <AIChatbotSection />  {/* Добавить здесь */}
            <SuccessStories />
            <Team />
            <ContactForm />
            <Footer />
        </main>
    )
}