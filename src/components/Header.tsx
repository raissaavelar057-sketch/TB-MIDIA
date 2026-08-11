import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeaderProps {
  onSelectPlan: (planId: 'estrategica' | 'performance') => void;
  customLogoUrl?: string;
  companyName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onSelectPlan,
  customLogoUrl,
  companyName = 'TB Mídia',
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-slate-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          {customLogoUrl ? (
            <img
              src={customLogoUrl}
              alt={companyName}
              className="h-10 max-w-[180px] object-contain group-hover:scale-105 transition-transform"
            />
          ) : (
            <>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <div className="relative flex items-center justify-center">
                  <Play className="w-5 h-5 fill-white ml-0.5 text-white" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  {companyName.split(' ')[0] || 'TB'}
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                  {companyName.split(' ').slice(1).join(' ') || 'mídia'}
                </span>
              </div>
            </>
          )}
        </a>

        {/* Center Navigation Pills */}
        <nav className="hidden md:flex items-center bg-slate-100/90 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
          <button
            onClick={() => scrollTo('apresentacao')}
            className="px-5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-full transition-colors cursor-pointer"
          >
            Apresentação
          </button>
          <button
            onClick={() => scrollTo('servicos')}
            className="px-5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-full transition-colors cursor-pointer"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollTo('planos')}
            className="px-5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-full transition-colors cursor-pointer"
          >
            Planos
          </button>
        </nav>

        {/* Action Controls Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              scrollTo('simulador');
              onSelectPlan('performance');
            }}
            className="btn-gradient text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm cursor-pointer"
            id="solicitar-contratacao-button"
          >
            <span>Solicitar contratação</span>
            <ArrowRight className="w-4 h-4 hidden sm:inline" />
          </button>
        </div>

      </div>
    </header>
  );
};
