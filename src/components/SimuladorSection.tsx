import React from 'react';
import { Sparkles, CheckCircle2, MessageSquare, CreditCard } from 'lucide-react';
import { PLANS } from '../data/proposalData';

interface SimuladorSectionProps {
  selectedPlanId: 'estrategica' | 'performance';
  onSelectPlan: (planId: 'estrategica' | 'performance') => void;
  whatsappNumber: string;
}

export const SimuladorSection: React.FC<SimuladorSectionProps> = ({
  selectedPlanId,
  onSelectPlan,
  whatsappNumber,
}) => {
  const currentPlan = PLANS.find((p) => p.id === selectedPlanId) || PLANS[1];

  const formatMoney = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const handleContractWhatsApp = () => {
    const customText = `Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20os%20seus%20servi%C3%A7os.%20%28Plano%20selecionado%3A%20${encodeURIComponent(currentPlan.name)}%29`;
    window.open(`https://wa.me/558388791022?text=${customText}`, '_blank');
  };

  return (
    <section id="simulador" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>SIMULADOR & RESUMO INTERATIVO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Resumo do Plano Selecionado
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Alterne entre os dois pacotes abaixo e solicite a contratação diretamente com nossa equipe via WhatsApp.
          </p>
        </div>

        {/* Toggle Switch Pills */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 inline-flex items-center gap-1 shadow-inner max-w-md w-full sm:w-auto">
            <button
              onClick={() => onSelectPlan('estrategica')}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedPlanId === 'estrategica'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              id="tab-estrategica"
            >
              Presença Estratégica
            </button>

            <button
              onClick={() => onSelectPlan('performance')}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedPlanId === 'performance'
                  ? 'btn-gradient text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              id="tab-performance"
            >
              Alta Performance
            </button>
          </div>
        </div>

        {/* Detailed Summary Card (Screenshot 11) */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-blue-500 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Top Right Floating Badge */}
          <div className="absolute top-0 right-0 bg-blue-50 border-b border-l border-blue-200/80 text-blue-600 text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
            RESUMO PERSONALIZADO
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                  PLANO SELECIONADO
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {currentPlan.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {currentPlan.tagline}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                  SERVIÇOS INCLUÍDOS AUTOMÁTICOS:
                </span>

                <div className="space-y-3">
                  {currentPlan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 fill-cyan-50 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Price & WhatsApp CTA */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  VALOR À VISTA (PIX)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">
                  {formatMoney(currentPlan.pricePix)}
                </div>
              </div>

              <div className="h-px bg-slate-200 w-full" />

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  VALOR NO CARTÃO
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-800">
                  {formatMoney(currentPlan.priceCard)}
                </div>
              </div>

              <button
                onClick={handleContractWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all cursor-pointer shadow-md hover:shadow-lg text-sm sm:text-base"
                id="contratar-whatsapp-btn"
              >
                <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
                <span>Contratar pelo WhatsApp</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
