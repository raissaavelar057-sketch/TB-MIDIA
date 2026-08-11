import React from 'react';
import { TrendingUp, Target, Settings, Zap, BarChart2, ShieldCheck } from 'lucide-react';
import { TRAFEGO_CARDS } from '../data/proposalData';

export const TrafegoPagoSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-purple-600" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-purple-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-purple-600" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-purple-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-purple-600" />;
      default:
        return <Target className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider uppercase">
            <TrendingUp className="w-3.5 h-3.5 text-purple-500" />
            <span>ACELERAÇÃO COMERCIAL • TRÁFEGO PAGO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Gestão de Tráfego Pago de Alta Performance
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Colocamos sua marca em frente aos clientes certos, gerando leads qualificados e solicitações de orçamento diárias.
          </p>
        </div>

        {/* 5 Cards Grid Layout (Screenshot 8) */}
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRAFEGO_CARDS.slice(0, 3).map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-purple-300 transition-all card-hover-glow"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4">
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TRAFEGO_CARDS.slice(3, 5).map((card, idx) => (
              <div
                key={idx + 3}
                className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-purple-300 transition-all card-hover-glow"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4">
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
