import React, { useState, useRef, useEffect } from 'react';
import { X, Save, MessageSquare, Building2, User, Image, Upload, Trash2, CheckCircle2 } from 'lucide-react';
import { ProposalSettings } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ProposalSettings;
  onSave: (newSettings: ProposalSettings) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProposalSettings>(settings);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFormData(settings);
  }, [settings, isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData((prev) => ({ ...prev, customLogoUrl: event.target?.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>Configurações da Proposta</span>
          </h3>
          <p className="text-xs text-slate-500">
            Adicione a logo da sua empresa/agência e altere os dados de atendimento.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Logo Upload Section - Highly Visible */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-3">
            <label className="block text-xs font-bold text-slate-800 uppercase flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Image className="w-4 h-4 text-cyan-600" />
                Logo da Empresa / Agência
              </span>
              <span className="text-[10px] text-slate-500 font-normal lowercase">(PNG, JPG, WEBP, SVG)</span>
            </label>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            {formData.customLogoUrl ? (
              <div className="flex items-center gap-4 p-3.5 border border-cyan-200 bg-cyan-50/50 rounded-xl">
                <img
                  src={formData.customLogoUrl}
                  alt="Logo preview"
                  className="w-14 h-14 object-contain rounded-lg bg-white p-1.5 border border-slate-200 shadow-xs shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Logo Carregada!
                  </span>
                  <span className="text-[11px] text-slate-500 block truncate">
                    Substitui o ícone padrão no cabeçalho e rodapé.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, customLogoUrl: undefined }))}
                  className="p-2 text-rose-600 hover:text-rose-700 hover:bg-rose-100 rounded-lg transition-colors cursor-pointer shrink-0"
                  title="Remover logo e voltar ao padrão"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full border-2 border-dashed border-cyan-300 hover:border-cyan-500 rounded-xl p-5 flex flex-col items-center justify-center gap-2 bg-white hover:bg-cyan-50/30 transition-all cursor-pointer group shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-slate-800 block">
                    Carregar Logo do Seu Computador
                  </span>
                  <span className="text-xs text-slate-500">
                    Clique aqui para escolher a imagem da sua marca
                  </span>
                </div>
              </button>
            )}
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-500" />
              Nome do Cliente / Empresa Destinatária
            </label>
            <input
              type="text"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              placeholder="Ex: Minha Empresa Ltda"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm font-medium"
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              Número do WhatsApp de Contato (DDI + DDD + Número)
            </label>
            <input
              type="text"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              placeholder="Ex: 5511999999999"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm font-medium"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-purple-500" />
              Nome da Agência / Empresa Remetente
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Ex: TB Mídia"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm font-medium"
            />
          </div>

          {/* Buttons */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-gradient text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Alterações</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
