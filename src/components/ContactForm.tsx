import React, { useState, useEffect } from 'react';
import { Send, Phone, CheckCircle, ArrowUpRight, MessageSquareCode, Database, Trash2, Calendar, FileSpreadsheet } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSubmission } from '../types';

interface ContactFormProps {
  initialSubject?: string;
}

export default function ContactForm({ initialSubject = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: initialSubject ? `Olá! Gostaria de um orçamento para o serviço de ${initialSubject}.` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [latestSubmission, setLatestSubmission] = useState<ContactSubmission | null>(null);

  // States for Local database viewer
  const [submissionsList, setSubmissionsList] = useState<ContactSubmission[]>([]);
  const [showMonitor, setShowMonitor] = useState(false);

  // Auto-fill subject when initialSubject changes
  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({
        ...prev,
        message: `Olá! Gostaria de um orçamento para o serviço de ${initialSubject}.`
      }));
    }
  }, [initialSubject]);

  // Load and subscribe to submissions list from localstorage
  const loadSubmissions = () => {
    try {
      const raw = localStorage.getItem('ka_tech_submissions');
      if (raw) {
        setSubmissionsList(JSON.parse(raw));
      } else {
        setSubmissionsList([]);
      }
    } catch (err) {
      console.error('Falha ao processar dados:', err);
    }
  };

  useEffect(() => {
    loadSubmissions();
    window.addEventListener('new-submission', loadSubmissions);
    return () => window.removeEventListener('new-submission', loadSubmissions);
  }, []);

  const clearAllSubmissions = () => {
    if (window.confirm('Deseja realmente limpar todos os contatos salvos localmente?')) {
      localStorage.removeItem('ka_tech_submissions');
      setSubmissionsList([]);
      window.dispatchEvent(new Event('new-submission'));
    }
  };

  const deleteSubmissionItem = (id: string) => {
    try {
      const raw = localStorage.getItem('ka_tech_submissions');
      if (raw) {
        const list: ContactSubmission[] = JSON.parse(raw);
        const filtered = list.filter(item => item.id !== id);
        localStorage.setItem('ka_tech_submissions', JSON.stringify(filtered));
        loadSubmissions();
        window.dispatchEvent(new Event('new-submission'));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick client-side validations
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate database insertion and submission processing
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: `sub-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Não especificada',
        message: formData.message,
        timestamp: new Date().toLocaleString('pt-BR'),
        status: 'pending'
      };

      try {
        const existingRaw = localStorage.getItem('ka_tech_submissions');
        const submissions: ContactSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
        submissions.unshift(newSubmission);
        localStorage.setItem('ka_tech_submissions', JSON.stringify(submissions));
        
        // Dispatch custom event so other components (like index monitors) can instantly refresh
        window.dispatchEvent(new Event('new-submission'));
      } catch (err) {
        console.error('Falha ao salvar no armazenamento local:', err);
      }

      setLatestSubmission(newSubmission);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto-redirect to WhatsApp with formatted details
      const whatsappUrl = getWhatsAppLink(newSubmission);
      if (whatsappUrl) {
        window.open(whatsappUrl, '_blank');
      }

      // Reset form but keep the successfully stored submission handy
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 1200);
  };

  // Pre-formatted Brazilian WhatsApp api link generator for double-conversion opportunity
  const getWhatsAppLink = (submission?: ContactSubmission) => {
    const sub = submission || latestSubmission;
    if (!sub) return 'https://api.whatsapp.com/send?phone=5538999406432&text=' + encodeURIComponent('Olá KA Tech Solutions! Gostaria de falar com um especialista sobre soluções de tecnologia e faturamento para minha empresa.');
    const text = `Olá KA Tech Solutions! Solicitei um Diagnóstico no site. Aqui estão os dados enviados:\n\n` +
                 `👤 Nome: ${sub.name}\n` +
                 `📧 E-mail: ${sub.email}\n` +
                 `📞 Telefone: ${sub.phone}\n` +
                 `🏢 Empresa: ${sub.company || 'Não informada'}\n\n` +
                 `💬 Mensagem/Desafios:\n${sub.message}`;
    return `https://api.whatsapp.com/send?phone=5538999406432&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className="py-24 bg-[#0A0A0A] border-t border-neutral-900 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Text panel info (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 text-left" id="contact-info-block">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1 bg-[#7C3AED]/10 border border-[#7C3AED]/25 px-3 py-1 rounded text-xs font-mono font-bold text-[#7C3AED] uppercase tracking-wider">
                Orçamento Sem Compromisso
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
                Vamos Acelerar <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-purple-500">Seu Faturamento?</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
                Preencha o formulário institucional ao lado para receber um diagnóstico e orçamento detalhado da sua empresa em até 24 horas úteis.
              </p>
            </div>

            {/* Quick Contact Specs */}
            <div className="space-y-4 font-sans text-sm" id="contact-quick-specs">
              <div className="flex items-center space-x-4 bg-neutral-900/40 p-4 rounded-lg border border-neutral-900">
                <div className="w-10 h-10 rounded bg-[#7C3AED]/5 flex items-center justify-center border border-[#7C3AED]/20 text-[#7C3AED]">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold">Atendimento WhatsApp</span>
                  <a href="https://api.whatsapp.com/send?phone=5538999406432" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7C3AED] font-bold font-mono transition-colors">(38) 99940-6432</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-neutral-900/40 p-4 rounded-lg border border-neutral-900">
                <div className="w-10 h-10 rounded bg-[#7C3AED]/5 flex items-center justify-center border border-[#7C3AED]/20 text-[#7C3AED]">
                  <MessageSquareCode size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">E-mail Corporativo</span>
                  <span className="text-white hover:text-[#7C3AED] font-bold font-mono transition-colors">contato@katech.com.br</span>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-neutral-900 rounded-lg p-5">
              <span className="text-xs uppercase font-mono tracking-widest text-[#7C3AED] font-bold">Presença Presencial</span>
              <p className="text-xs text-gray-400 mt-2 font-sans leading-relaxed">
                Pirapora, MG — Agende um encontro em nosso escritório ou em sua própria empresa e descubra soluções customizadas para seu modelo de vendas.
              </p>
            </div>
          </div>

          {/* Form container (7 columns) */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-[#141414] border border-neutral-900 rounded-xl p-6 sm:p-8 relative shadow-2xl">
              
              {/* Purple outline accent top border */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#7C3AED]" />

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    id="tech-leads-form"
                  >
                    <div className="text-left font-sans">
                      <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
                        Diagnóstico Comercial Rápido
                      </h3>
                      <p className="text-xs text-gray-400">
                        Preencha suas informações originais e descreva suas pretensões.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="bg-red-950/40 border border-red-500/50 rounded-lg p-3 text-red-400 text-xs text-left">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="flex flex-col text-left space-y-1.5">
                        <label className="text-xs font-bold text-gray-300 font-mono" htmlFor="form-name">Nome Completo *</label>
                        <input
                          type="text"
                          id="form-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Geraldo Fonseca"
                          className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all hover:border-neutral-700"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col text-left space-y-1.5">
                        <label className="text-xs font-bold text-gray-300 font-mono" htmlFor="form-email">E-mail Corporativo *</label>
                        <input
                          type="email"
                          id="form-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: geraldo@empresa.com"
                          className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all hover:border-neutral-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone/WhatsApp input */}
                      <div className="flex flex-col text-left space-y-1.5">
                        <label className="text-xs font-bold text-gray-300 font-mono" htmlFor="form-phone">WhatsApp/Telefone *</label>
                        <input
                          type="tel"
                          id="form-phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ex: (38) 99999-9999"
                          className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all hover:border-neutral-700"
                        />
                      </div>

                      {/* Company input */}
                      <div className="flex flex-col text-left space-y-1.5">
                        <label className="text-xs font-bold text-gray-300 font-mono" htmlFor="form-company">Nome da Empresa (Opcional)</label>
                        <input
                          type="text"
                          id="form-company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Ex: Distribuidora São Francisco"
                          className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all hover:border-neutral-700"
                        />
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col text-left space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 font-mono" htmlFor="form-message">Sua Mensagem / Desafios do Negócio *</label>
                      <textarea
                        id="form-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva o que sua empresa necessita (Ex: site institucional, chatbot de WhatsApp, ERP integrado)..."
                        className="w-full bg-[#0A0A0A] border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all hover:border-neutral-700 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group mt-2 flex items-center justify-center space-x-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3.5 px-4 rounded font-display font-extrabold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer border border-[#a78bfa]/20 hover:border-[#a78bfa]/40 disabled:opacity-50 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-[1.01]"
                      id="form-submit-btn"
                    >
                      <span>{isSubmitting ? 'Processando dados...' : 'Enviar Solicitação de Orçamento'}</span>
                      <Send size={13} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="flex flex-col items-center justify-center py-10 space-y-6 text-center"
                    id="form-success-wrapper"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                      <CheckCircle size={36} />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-green-500 font-bold bg-green-500/5 px-2.5 py-1 rounded">
                        SOLICITAÇÃO REGISTRADA COM SUCESSO
                      </span>
                      <h3 className="font-display font-black text-2xl text-white uppercase">
                        Obrigado, {latestSubmission?.name}!
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-sm mx-auto leading-relaxed">
                        Seus dados foram salvos localmente de forma segura. Nosso time de especialistas técnicos entrará em contato em breve.
                      </p>
                    </div>

                    {/* Dual strategy box: WhatsApp instant acceleration button */}
                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-lg p-5 max-w-md w-full space-y-3.5">
                      <div className="text-left font-sans">
                        <span className="text-[10px] text-[#7C3AED] uppercase font-mono font-bold">Contato Express</span>
                        <h4 className="text-xs sm:text-sm text-white font-bold">Quer agilizar o atendimento presencial?</h4>
                        <p className="text-xs text-gray-400 mt-1">
                          Clique no link abaixo para iniciar uma conversa instantânea pré-formatada via WhatsApp em Pirapora.
                        </p>
                      </div>

                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2.5 bg-green-600 hover:bg-green-700 text-white font-display font-extrabold text-xs uppercase tracking-wider w-full py-3 rounded transition-colors duration-200"
                        id="whatsapp-express-cta"
                      >
                        <Phone size={14} />
                        <span>Chamar KA Tech no WhatsApp</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-xs font-mono text-gray-500 hover:text-white underline cursor-pointer"
                    >
                      Enviar novo formulário
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Local database lead log Section (Interactive CRM Module) */}
        <div className="mt-16 border-t border-neutral-900 pt-10 text-left" id="submissions-monitor-section">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center space-x-2.5">
              <Database size={18} className="text-[#7C3AED]" />
              <div>
                <h4 className="text-sm font-display font-black text-white uppercase tracking-wider">
                  Simulador de Banco de Dados de Contatos
                </h4>
                <p className="text-xs text-gray-500 font-sans">
                  Sendo um site institucional estático para demonstração comercial, todas as solicitações enviadas permanecem salvas localmente no localStorage do seu navegador de forma segura.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowMonitor(!showMonitor)}
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-gray-400 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-900 px-3 py-1.5 rounded transition-all cursor-pointer"
              >
                <span>{showMonitor ? 'Ocultar Banco' : `Visualizar Leads (${submissionsList.length})`}</span>
              </button>

              {submissionsList.length > 0 && showMonitor && (
                <button
                  onClick={clearAllSubmissions}
                  className="inline-flex items-center space-x-1 text-xs font-mono font-bold uppercase text-red-500 hover:text-red-400 border border-red-950 bg-red-950/10 hover:bg-red-950/20 px-2.5 py-1.5 rounded transition-all cursor-pointer"
                >
                  <Trash2 size={12} />
                  <span>Limpar Tudo</span>
                </button>
              )}
            </div>
          </div>

          <AnimatePresence>
            {showMonitor && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden bg-[#121212]/50 border border-neutral-900 rounded-lg mt-2"
                id="leads-database-terminal"
              >
                {submissionsList.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 text-xs font-mono">
                    Nenhum e-mail ou lead registrado no banco local neste momento. Faça um teste preenchendo o formulário de diagnóstico acima ou solicitando um "Orçamento Rápido" no topo.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-neutral-900 text-gray-500 text-[10px] uppercase tracking-wider bg-[#141414]">
                          <th className="p-3">Data/Hora</th>
                          <th className="p-3">Remetente / Empresa</th>
                          <th className="p-3">Contatos</th>
                          <th className="p-3">Mensagem / Escopo</th>
                          <th className="p-3 text-right">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-900">
                        {submissionsList.map((sub) => (
                          <tr key={sub.id} className="hover:bg-white/[0.01] transition-colors">
                            <td className="p-3 text-gray-400 whitespace-nowrap min-w-[140px]">
                              <div className="flex items-center space-x-1.5">
                                <Calendar size={12} className="text-neutral-600 shrink-0" />
                                <span>{sub.timestamp}</span>
                              </div>
                            </td>
                            <td className="p-3 font-semibold text-white min-w-[150px]">
                              <div className="flex flex-col">
                                <span>{sub.name}</span>
                                {sub.company && (
                                  <span className="text-[10px] text-gray-500 font-normal">
                                    {sub.company}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="p-3 text-gray-300">
                              <div className="flex flex-col text-[11px]">
                                <span>{sub.email}</span>
                                <span className="text-[#7C3AED] font-semibold">{sub.phone}</span>
                              </div>
                            </td>
                            <td className="p-3 text-gray-400 max-w-sm font-sans text-xs">
                              <div className="line-clamp-2" title={sub.message}>
                                {sub.message}
                              </div>
                            </td>
                            <td className="p-3 text-right whitespace-nowrap">
                              <button
                                onClick={() => deleteSubmissionItem(sub.id)}
                                className="p-1 px-2 text-gray-500 hover:text-red-500 hover:bg-red-500/5 rounded transition-colors cursor-pointer"
                                title="Deletar este registro"
                              >
                                <Trash2 size={13} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
