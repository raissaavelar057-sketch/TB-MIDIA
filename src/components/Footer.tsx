import React from 'react';
import { Play, Settings } from 'lucide-react';

interface FooterProps {
  customLogoUrl?: string;
  companyName?: string;
  onOpenSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ customLogoUrl, companyName = 'TB Mídia', onOpenSettings }) => {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          {customLogoUrl ? (
            <img src={customLogoUrl} alt={companyName} className="h-8 max-w-[140px] object-contain" />
          ) : (
            <>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 flex items-center justify-center text-white shadow-sm">
                <Play className="w-4 h-4 fill-white ml-0.5 text-white" />
              </div>
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">
                {companyName}
              </span>
            </>
          )}
        </div>

        {/* Text and Action Buttons */}
        <div className="flex items-center gap-3">
          <p className="text-xs sm:text-sm text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} {companyName}. Todos os direitos reservados. Proposta Comercial Exclusiva.
          </p>

          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="opacity-30 hover:opacity-100 text-slate-500 hover:text-slate-800 p-1.5 rounded transition-opacity cursor-pointer"
              title="Configurações da Proposta"
              id="hidden-footer-settings-button"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </footer>
  );
};

