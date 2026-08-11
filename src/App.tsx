import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ApresentacaoSection } from './components/ApresentacaoSection';
import { AudiovisualSection } from './components/AudiovisualSection';
import { RedesSociaisSection } from './components/RedesSociaisSection';
import { TrafegoPagoSection } from './components/TrafegoPagoSection';
import { PlanosSection } from './components/PlanosSection';
import { SimuladorSection } from './components/SimuladorSection';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { SettingsModal } from './components/SettingsModal';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';
import { ProposalSettings } from './types';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<'estrategica' | 'performance'>('performance');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [settings, setSettings] = useState<ProposalSettings>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('tb_midia_proposal_settings');
        if (saved) {
          return JSON.parse(saved);
        }
      }
    } catch (e) {
      console.warn('localStorage is restricted or unavailable:', e);
    }
    return {
      clientName: '',
      whatsappNumber: '558388791022',
      discountPix: 10,
      companyName: 'TB Mídia',
    };
  });

  const handleSaveSettings = (newSettings: ProposalSettings) => {
    setSettings(newSettings);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('tb_midia_proposal_settings', JSON.stringify(newSettings));
      }
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 selection:text-cyan-900 antialiased font-sans">
      
      {/* Top Header Navigation */}
      <Header
        onSelectPlan={(planId) => setSelectedPlanId(planId)}
        customLogoUrl={settings.customLogoUrl}
        companyName={settings.companyName}
      />

      {/* Hero Section */}
      <Hero whatsappNumber={settings.whatsappNumber} />

      {/* Apresentação Section */}
      <ApresentacaoSection />

      {/* Produção Audiovisual Section */}
      <AudiovisualSection onOpenVideoModal={() => setIsVideoModalOpen(true)} />

      {/* Gestão de Redes Sociais Section */}
      <RedesSociaisSection />

      {/* Gestão de Tráfego Pago Section */}
      <TrafegoPagoSection />

      {/* Planos Completos de Proposta */}
      <PlanosSection onSelectPlan={(planId) => setSelectedPlanId(planId)} />

      {/* Simulador & Resumo Interativo */}
      <SimuladorSection
        selectedPlanId={selectedPlanId}
        onSelectPlan={(planId) => setSelectedPlanId(planId)}
        whatsappNumber={settings.whatsappNumber}
      />

      {/* CTA Section */}
      <CTASection
        whatsappNumber={settings.whatsappNumber}
        customLogoUrl={settings.customLogoUrl}
        companyName={settings.companyName}
      />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer
        customLogoUrl={settings.customLogoUrl}
        companyName={settings.companyName}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={handleSaveSettings}
      />

      {/* Video Demo Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

    </div>
  );
}
