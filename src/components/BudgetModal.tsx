import React, { useState } from 'react';
import { X, Send, CheckCircle, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSubmission } from '../types';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export default function BudgetModal({ isOpen, onClose, presetService = '' }: BudgetModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: presetService || 'Criação de Sites Comerciais',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [latestSubmission, setLatestSubmission] = useState<ContactSubmission | null>(null);

  // WhatsApp Link Builder
  const getWhatsAppLink = (submission?: ContactSubmission | null) => {
    const sub = submission || latestSubmission;
    if (!sub) return 'https://api.whatsapp.com/send?phone=5538999406432&text=' + encodeURIComponent('Olá KA Tech Solutions! Gostaria de falar com um especialista sobre soluções de tecnologia e faturamento para minha empresa.');
    const text = `Olá KA Tech Solutions! Solicitei um Orçamento Rápido no site. Aqui estão os dados enviados:\n\n` +
                 `👤 Nome: ${sub.name}\n` +
                 `📧 E-mail: ${sub.email}\n` +
                 `📞 Telefone: ${sub.phone}\n` +
                 `🏢 Empresa: ${sub.company || 'Não informada'}\n\n` +
                 `💬 Detalhes/Desejos:\n${sub.message}`;
    return `https://api.whatsapp.com/send?phone=5538999406432&text=${encodeURIComponent(text)}`;
  };

  const servicesList = [
    'Criação de Sites Comerciais',
    'Automações de Processos',
    'Landing Pages de Alta Conversão',
    'Sistema ERP + Painel de Vendas'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Por favor, preencha os campos obrigatórios (*).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: `sub-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Não informada',
        message: `[Orçamento Rápido - ${formData.service}] ${formData.message || 'Sem mensagem adicional.'}`,
        timestamp: new Date().toLocaleString('pt-BR'),
        status: 'pending'
      };

      try {
        const existingRaw = localStorage.getItem('ka_tech_submissions');
        const submissions: ContactSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
        submissions.unshift(newSubmission);
        localStorage.setItem('ka_tech_submissions', JSON.stringify(submissions));
        
        // Dispatch custom event to trigger instant listing reload in submission monitors
        window.dispatchEvent(new Event('new-submission'));
      } catch (err) {
        console.error('Falha ao gravar no localstorage:', err);
      }

      setIsSubmitting(false);
      setLatestSubmission(newSubmission);
      setIsSuccess(true);

      // Auto-redirect to WhatsApp with formatted details
      const whatsappUrl = getWhatsAppLink(newSubmission);
      if (whatsappUrl) {
        window.open(whatsappUrl, '_blank');
      }
      
      // Reset
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Criação de Sites Comerciais',
        message: ''
      });
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-[#141414] border border-neutral-800 rounded-xl max-w-lg w-full overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-10 p-6 sm:p-8"
            id="budget-modal-container"
          >
            
            {/* Top purple header brand bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#7C3AED]" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-neutral-800 p-1.5 rounded transition-colors cursor-pointer"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X size={18} />
            </button>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4" id="budget-modal-form">
                  <div className="text-left">
                    <h3 className="font-display font-black text-xl text-white uppercase">
                      Solicitar Orçamento Rápido
                    </h3>
                    <p className="text-xs text-gray-400 font-sans">
                      Dê o primeiro passo para elevar o patamar tecnológico da sua empresa.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-950/40 border border-red-500/50 rounded p-2 text-red-400 text-xs text-left font-sans">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-3.5 text-left font-sans text-xs sm:text-sm">
                    
                    {/* Name input */}
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs font-bold text-gray-300 font-mono">Seu Nome *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ex: Geraldo Fonseca"
                        className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Email */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs font-bold text-gray-300 font-mono">E-mail de Contato *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="geraldo@saofrancisco.com"
                          className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs font-bold text-gray-300 font-mono">WhatsApp *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(38) 99999-9999"
                          className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Company */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs font-bold text-gray-300 font-mono">Sua Empresa (Opcional)</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Distribuidora S. Francisco"
                          className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]"
                        />
                      </div>

                      {/* Service Selector */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs font-bold text-gray-300 font-mono">Serviço de Interesse</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]"
                        >
                          {servicesList.map((srv) => (
                            <option key={srv} value={srv} className="bg-[#141414]">
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs font-bold text-gray-300 font-mono">Detalhes Adicionais (Opcional)</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Ex: Gostaria de integrar com emissão fiscal ou suporte prioritário..."
                        className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] resize-none"
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group mt-4 flex items-center justify-center space-x-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3 px-4 rounded font-display font-extrabold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer disabled:opacity-50 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                    id="modal-submit-btn"
                  >
                    <span>{isSubmitting ? 'Armazenando dados...' : 'Enviar Pedido de Orçamento'}</span>
                    <Send size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-6 space-y-5 text-center font-sans"
                  id="modal-success-screen"
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500">
                    <CheckCircle size={28} />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-display font-black text-lg text-white uppercase">
                      Solicitação Recebida!
                    </h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Obrigado pelo seu interesse. Nós salvamos seus dados de contato localmente. Nossa equipe técnica entrará em contato em breve.
                    </p>
                  </div>

                  <div className="flex flex-col space-y-2.5 w-full pt-2">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs font-display font-extrabold uppercase tracking-wider py-2.5 rounded transition-all flex items-center justify-center space-x-2"
                      id="modal-success-whatsapp-btn"
                    >
                      <Smartphone size={14} />
                      <span>Chamar no WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        onClose();
                      }}
                      className="bg-[#7C3AED]/20 hover:bg-[#7C3AED]/30 border border-[#7C3AED]/40 text-[#a78bfa] text-xs font-display font-bold uppercase tracking-wider py-2.5 rounded transition-all cursor-pointer"
                    >
                      Voltar ao Site
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
