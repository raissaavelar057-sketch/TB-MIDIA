import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Flame, CreditCard } from 'lucide-react';
import { PLANS } from '../data/proposalData';

interface PlanosSectionProps {
  onSelectPlan: (planId: 'estrategica' | 'performance') => void;
}

export const PlanosSection: React.FC<PlanosSectionProps> = ({ onSelectPlan }) => {
  const scrollToSimulador = (planId: 'estrategica' | 'performance') => {
    onSelectPlan(planId);
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatMoney = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  return (
    <section id="planos" className="py-16 md:py-24 bg-slate-50/60 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>INVESTIMENTO INTEGRADO • SEM CUSTOS OCULTOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Planos Completos de Proposta
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Pacotes estratégicos unificando produção audiovisual, redes sociais e tráfego pago em uma única mensalidade transparente.
          </p>
        </div>

        {/* 2 Main Pricing Cards (Screenshot 10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan) => {
            const isHighlight = plan.highlight;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all relative card-hover-glow ${
                  isHighlight
                    ? 'border-2 border-blue-500 shadow-xl'
                    : 'border border-slate-200/90 shadow-xs'
                }`}
              >
                {/* Floating Top Badge for Highlight */}
                {plan.badge && (
                  <div className="absolute -top-4 right-6 bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Flame className="w-3.5 h-3.5 fill-white text-white" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="h-px bg-slate-100 w-full my-4" />

                  {/* Included Services List */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                      SERVIÇOS INCLUSOS:
                    </span>

                    <div className="space-y-3 pt-1">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 fill-cyan-50 mt-0.5" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Display Box */}
                  <div className="bg-slate-50/90 border border-slate-100 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        À VISTA VIA PIX
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-emerald-600">
                        {formatMoney(plan.pricePix)}
                      </span>
                    </div>

                    <div className="h-px bg-slate-200/60 w-full" />

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                        NO CARTÃO
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-800">
                        {formatMoney(plan.priceCard)}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Selection Button */}
                <div className="pt-8">
                  <button
                    onClick={() => scrollToSimulador(plan.id)}
                    className={`w-full text-sm sm:text-base font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                      isHighlight
                        ? 'bg-[#0f172a] hover:bg-slate-800 text-white'
                        : 'btn-gradient text-white'
                    }`}
                  >
                    <span>Escolher {plan.name.replace('Plano ', '')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
