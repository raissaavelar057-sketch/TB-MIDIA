import React from 'react';
import { Sparkles, ArrowDownRight, MessageSquare, Video, TrendingUp, ShieldCheck } from 'lucide-react';

interface HeroProps {
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ whatsappNumber }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsapp = () => {
    window.open("https://wa.me/558388791022?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20seus%20servi%C3%A7os.", '_blank');
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-grid-pattern overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-200/40 via-blue-200/30 to-purple-200/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 shadow-xs">
          <Sparkles className="w-4 h-4 text-cyan-500" />
          <span>PROPOSTA COMERCIAL TB MIDIA E Bella Torre Acqua Park</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Sua marca com mais <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            presença, estratégia
          </span>{' '}
          e <br className="hidden sm:inline" />
          resultados
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-10">
          Uma solução completa em produção audiovisual, gestão de redes sociais e tráfego pago para fortalecer sua comunicação e alcançar novos clientes.
        </p>

        {/* Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
          <button
            onClick={() => scrollTo('apresentacao')}
            className="w-full sm:w-auto btn-gradient text-white text-base font-semibold px-7 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            id="conhecer-proposta-btn"
          >
            <span>Conhecer a proposta</span>
            <ArrowDownRight className="w-5 h-5" />
          </button>

          <button
            onClick={openWhatsapp}
            className="w-full sm:w-auto bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/80 text-slate-800 text-base font-semibold px-6 py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            id="falar-tb-midia-hero-btn"
          >
            <MessageSquare className="w-5 h-5 text-emerald-600" />
            <span>Falar com a TB Mídia</span>
          </button>
        </div>

        {/* 3 Main Highlight Cards Below Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto text-left">
          
          {/* Card 1: Audiovisual Premium */}
          <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-slate-200/70 shadow-xs hover:border-cyan-300 transition-all card-hover-glow">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">
              Audiovisual Premium
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Vídeos em diferentes formatos + captação de drone.
            </p>
          </div>

          {/* Card 2: Gestão de Redes */}
          <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-slate-200/70 shadow-xs hover:border-blue-300 transition-all card-hover-glow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">
              Gestão de Redes
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Frequência contínua, roteiros alinhados e postagens planejadas.
            </p>
          </div>

          {/* Card 3: Tráfego Pago */}
          <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-slate-200/70 shadow-xs hover:border-purple-300 transition-all card-hover-glow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">
              Tráfego Pago
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Anúncios otimizados direcionados para o seu público ideal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
