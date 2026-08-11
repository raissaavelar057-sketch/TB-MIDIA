import React from 'react';
import { Play, MessageSquare, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  whatsappNumber: string;
  customLogoUrl?: string;
  companyName?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ whatsappNumber, customLogoUrl, companyName = 'TB Mídia' }) => {
  const openWhatsapp = () => {
    window.open("https://wa.me/558388791022?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20seus%20servi%C3%A7os.", '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-100 text-center relative overflow-hidden bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Brand Logo Icon */}
        {customLogoUrl ? (
          <div className="flex justify-center mb-8">
            <img src={customLogoUrl} alt={companyName} className="h-16 max-w-[220px] object-contain" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mx-auto mb-8">
            <Play className="w-7 h-7 fill-white ml-0.5 text-white" />
          </div>
        )}

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Vamos transformar a presença digital da sua empresa?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Conte com uma equipe preparada para planejar, produzir e divulgar conteúdos que valorizam sua marca e aproximam sua empresa dos clientes certos.
        </p>

        {/* Action Button */}
        <button
          onClick={openWhatsapp}
          className="btn-gradient text-white text-base sm:text-lg font-bold px-9 py-4 rounded-2xl inline-flex items-center gap-3 shadow-lg hover:shadow-xl cursor-pointer"
          id="falar-tb-midia-cta-btn"
        >
          <MessageSquare className="w-5 h-5 fill-white text-blue-600" />
          <span>Falar com a {companyName}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};
