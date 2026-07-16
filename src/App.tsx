import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import FounderShowcase from './components/FounderShowcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BudgetModal from './components/BudgetModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPresetService, setModalPresetService] = useState('');

  const handleOpenBudgetWithPreset = (serviceName: string) => {
    setModalPresetService(serviceName);
    setIsModalOpen(true);
  };

  const handleOpenBudgetModal = () => {
    setModalPresetService('');
    setIsModalOpen(true);
  };

  // Scroll smoothly to the contact container
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white relative">
      <Header onOpenBudgetModal={handleOpenBudgetModal} />
      
      <main>
        {/* Hero Section */}
        <Hero onCtaClick={handleScrollToContact} />

        {/* Services List Grid */}
        <Services onSelectService={handleOpenBudgetWithPreset} />

        {/* Business Differentials */}
        <Differentials />

        {/* Founder Showcase */}
        <FounderShowcase />

        {/* Lead and Contact Form + Local database inspector */}
        <ContactForm initialSubject={modalPresetService} />
      </main>

      <Footer />

      {/* Quick Budget request Modal Overlay */}
      <BudgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        presetService={modalPresetService}
      />
    </div>
  );
}
