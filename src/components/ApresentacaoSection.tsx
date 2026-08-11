import React from 'react';
import { Zap, CheckCircle2, Target, Lightbulb, Camera, Award } from 'lucide-react';

export const ApresentacaoSection: React.FC = () => {
  return (
    <section id="apresentacao" className="py-16 md:py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text & Bullets */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 text-cyan-500" />
              <span>APRESENTAÇÃO • TB MÍDIA</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Muito além de <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                publicar conteúdos
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A TB Mídia une estratégia, criatividade e produção profissional para transformar a presença digital da sua empresa. Cada conteúdo é planejado para fortalecer o posicionamento da marca, aumentar sua visibilidade e gerar novas oportunidades de negócio.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-cyan-500 shrink-0">
                  <CheckCircle2 className="w-5 h-5 fill-cyan-100" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  Equipe multidisciplinar especializada em áudio, vídeo e mídia.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-cyan-500 shrink-0">
                  <CheckCircle2 className="w-5 h-5 fill-cyan-100" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  Processo fluido desde o roteiro até o tráfego de alta conversão.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-cyan-500 shrink-0">
                  <CheckCircle2 className="w-5 h-5 fill-cyan-100" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  Compromisso com prazos, qualidade técnica e identidade da marca.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column Grid 2x2 */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-cyan-300 transition-all card-hover-glow">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Estratégia sob Medida
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Planejamento editorial minucioso voltado para as metas comerciais e perfil de público da sua empresa.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all card-hover-glow">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Criatividade Relevante
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Roteiros inteligentes que retêm a atenção, comunicam valor e constroem autoridade no seu nicho.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all card-hover-glow">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Produção de Alto Nível
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Captação 4K com câmeras profissionais, lentes dedicadas, iluminação de estúdio e take de drone.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-purple-300 transition-all card-hover-glow">
              <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Foco em Vendas
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Transformação de seguidores e visualizações em clientes reais com funis e anúncios direcionados.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
