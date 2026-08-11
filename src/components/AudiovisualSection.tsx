import React from 'react';
import { Camera, Play, Video, Sliders, Sparkles, Compass, FileText, Film, ShieldCheck } from 'lucide-react';
import { AUDIOVISUAL_SERVICES } from '../data/proposalData';

interface AudiovisualSectionProps {
  onOpenVideoModal: () => void;
}

export const AudiovisualSection: React.FC<AudiovisualSectionProps> = ({ onOpenVideoModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      default:
        return <Camera className="w-5 h-5" />;
    }
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold tracking-wider uppercase">
            <Camera className="w-3.5 h-3.5 text-cyan-500" />
            <span>SERVIÇO PREMIUM • PRODUÇÃO AUDIOVISUAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Cinema e narrativa visual para a sua empresa
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Capturamos a essência do seu negócio com padrão profissional de áudio, imagem e narrativa para se destacar imediatamente nas redes.
          </p>
        </div>

        {/* Feature Showcase Box (Screenshot 4) */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Interactive Video Container */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-slate-950 aspect-video group cursor-pointer shadow-lg" onClick={onOpenVideoModal}>
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
                alt="Produção Audiovisual e Drone"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              />

              {/* Drone Badge Top Left */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-cyan-400 text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gravação em Drone 4K</span>
              </div>

              {/* Color Grading Badge Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-purple-300 text-xs font-semibold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-purple-400" />
                <span>Color Grading & Audio FX</span>
              </div>

              {/* Big Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-cyan-500/90 transition-all shadow-xl">
                  <Play className="w-7 h-7 fill-white ml-1 text-white" />
                </div>
              </div>
            </div>

            {/* Right Text Details */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Produção Completa de Ponta a Ponta
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Nenhum detalhe é deixado ao acaso. Desde a reunião inicial de briefing e elaboração de roteiro até a gravação presencial e edição fina, garantimos entregas ágeis e estética de altíssimo valor percebido.
              </p>

              {/* 3 Video Formats Cards */}
              <div className="pt-2 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                  Os vídeos podem ser produzidos em diferentes formatos, conforme o canal:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex flex-col gap-1">
                    <span className="text-xs font-bold text-cyan-600 flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5" />
                      Vertical (9:16)
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Stories e Reels
                    </span>
                  </div>

                  <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex flex-col gap-1">
                    <span className="text-xs font-bold text-blue-600 flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5" />
                      Quadrado (1:1)
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Feed Instagram & Linkedin
                    </span>
                  </div>

                  <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex flex-col gap-1">
                    <span className="text-xs font-bold text-purple-600 flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5" />
                      Horizontal (16:9)
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      YouTube, apresentações e institucionais
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 6 Included Services Cards Grid (Screenshot 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIOVISUAL_SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-cyan-300 transition-all card-hover-glow"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-5">
                  {getIcon(service.icon)}
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h4>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>{service.included}</span>
                <ShieldCheck className="w-4 h-4 text-blue-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
