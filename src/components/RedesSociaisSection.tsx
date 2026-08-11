import React from 'react';
import { Share2, Calendar, Video, Image as ImageIcon, CheckCircle2, Flame } from 'lucide-react';

export const RedesSociaisSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase">
            <Share2 className="w-3.5 h-3.5 text-blue-500" />
            <span>GESTÃO DE REDES SOCIAIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Escolha o ritmo ideal para o crescimento da sua marca
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Gerenciamos seu feed e stories com rotina profissional, legendas persuasivas e acompanhamento constante.
          </p>
        </div>

        {/* 2 Comparison Cards (Screenshot 7) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Presença Estratégica */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all card-hover-glow">
            <div className="space-y-6">
              
              {/* Title & Badge */}
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Presença Estratégica
                </h3>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 text-xs font-bold">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>3 publicações por semana</span>
                </div>
              </div>

              {/* Sub-Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-700">
                    2 vídeos por semana
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-2.5">
                  <ImageIcon className="w-4 h-4 text-purple-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-700">
                    1 post estático ou carrossel por semana
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3.5 pt-4">
                {[
                  '3 publicações por semana',
                  '2 vídeos dinâmicos',
                  '1 post estático ou carrossel',
                  'Planejamento dos conteúdos',
                  'Criação das legendas estratégicas',
                  'Organização e acompanhamento das publicações',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 fill-cyan-50" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                INCLUSO NO PLANO CORRESPONDENTE
              </span>
            </div>
          </div>

          {/* Card 2: Alta Performance (Highlighted) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-blue-500 shadow-lg relative flex flex-col justify-between hover:border-blue-600 transition-all card-hover-glow">
            
            {/* Badge Top Floating */}
            <div className="absolute -top-4 right-6 bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <Flame className="w-3.5 h-3.5 fill-white text-white" />
              <span>MAIOR FREQUÊNCIA</span>
            </div>

            <div className="space-y-6">
              
              {/* Title & Badge */}
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Alta Performance
                </h3>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 text-xs font-bold">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>5 publicações por semana</span>
                </div>
              </div>

              {/* Sub-Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-700">
                    3 vídeos por semana
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-2.5">
                  <ImageIcon className="w-4 h-4 text-purple-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-700">
                    2 posts estáticos ou carrosséis por semana
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3.5 pt-4">
                {[
                  '5 publicações por semana',
                  '3 vídeos dinâmicos',
                  '2 posts estáticos ou carrosséis',
                  'Planejamento dos conteúdos',
                  'Criação das legendas estratégicas',
                  'Organização e acompanhamento das publicações',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 fill-cyan-50" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                INCLUSO NO PLANO CORRESPONDENTE
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
