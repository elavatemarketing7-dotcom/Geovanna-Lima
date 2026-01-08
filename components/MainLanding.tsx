
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERT_DATA, GALLERY_DATA, HEART_METHOD_DATA, TESTIMONIALS } from '../constants.tsx';
import { Check, ArrowRight, Instagram, MapPin, MessageCircle, Heart } from 'lucide-react';

const MainLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Todas');
  const categories = ['Todas', ...Array.from(new Set(GALLERY_DATA.map(img => img.category)))];

  const filteredGallery = activeTab === 'Todas' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(img => img.category === activeTab);

  const handleCTA = () => {
    window.open(EXPERT_DATA.whatsapp, '_blank');
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center bg-stone-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#b49b71]/5 hidden md:block" />
        
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
          >
            <span className="text-[#b49b71] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Especialista em Naturalidade</span>
            <h1 className="text-4xl md:text-6xl font-bold serif mb-6 leading-tight text-stone-900">
              Eu sou Geovanna Lima, transformando sua beleza com propósito.
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
              Minha missão é realçar o que você já tem de melhor, mantendo sua essência e garantindo resultados elegantes e seguros.
            </p>
            <div className="space-y-4">
                <button 
                    onClick={handleCTA}
                    className="w-full md:w-auto px-10 py-5 bg-[#b49b71] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
                >
                    AGENDAR CONSULTA NO WHATSAPP
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center relative"
          >
             <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-[#b49b71]/10 rounded-3xl blur-2xl rotate-3" />
                <img 
                    src={EXPERT_DATA.mainHero} 
                    alt={EXPERT_DATA.name}
                    className="relative z-10 rounded-3xl shadow-2xl w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-800 relative group bg-black">
                    <video 
                        src={EXPERT_DATA.videoUrl} 
                        className="w-full h-auto max-h-[720px] object-contain block mx-auto" 
                        controls 
                        autoPlay 
                        muted 
                        loop
                        playsInline
                    />
                </div>
                <div className="w-full md:w-2/5 space-y-6">
                    <h2 className="text-3xl serif leading-tight">A arte da transformação natural</h2>
                    <p className="text-stone-400 leading-relaxed italic">
                        "Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial."
                    </p>
                    <div className="h-0.5 w-20 bg-[#b49b71]" />
                </div>
            </div>
        </div>
      </section>

      {/* QUEM SOU EU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                        <img src={EXPERT_DATA.expertAlt1} className="rounded-2xl shadow-lg mt-8" alt="Dra Geovanna" />
                        <img src={EXPERT_DATA.expertAlt2} className="rounded-2xl shadow-lg mb-8" alt="Bastidores" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                    <h2 className="text-4xl serif text-stone-900">Expertise, técnica e humanidade.</h2>
                    <p className="text-stone-600 leading-relaxed text-lg">
                        Sou apaixonada por realçar a beleza única de cada mulher. No meu consultório, você não é apenas um procedimento, mas sim uma história que merece ser cuidada com respeito e perfeccionismo.
                    </p>
                    <div className="space-y-4">
                        {[
                            'Atendimento Personalizado e Exclusivo',
                            'Técnicas Modernas de Harmonização Facial',
                            'Foco em Resultados Naturais (Sem exagero)',
                            'Segurança em primeiro lugar em cada etapa'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="bg-[#b49b71]/10 p-1 rounded-full">
                                    <Check size={16} className="text-[#b49b71]" />
                                </div>
                                <span className="font-medium text-stone-700">{item}</span>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleCTA} className="text-[#b49b71] font-bold border-b-2 border-[#b49b71] pb-1 hover:text-[#9a8461] hover:border-[#9a8461] transition-all">
                        Clique aqui para saber mais sobre meu método
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* RESULTADOS REAIS (TÉCNICOS) */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl serif mb-4">Portfólio Clínico</h2>
            <p className="text-stone-500">Transformações específicas por área de atuação.</p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all ${activeTab === cat ? 'bg-[#b49b71] text-white' : 'bg-white text-stone-400 border border-stone-100 hover:border-stone-200'}`}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>

        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredGallery.map((img, idx) => (
                    <motion.div 
                        layout
                        key={img.url}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="group relative aspect-square overflow-hidden rounded-3xl bg-white shadow-sm border border-stone-100"
                    >
                        <img 
                            src={img.url} 
                            alt={img.category} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <span className="text-white font-medium text-sm">{img.category}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            <p className="mt-12 text-center text-xs text-stone-400 italic">
                * Os resultados podem variar de pessoa para pessoa. A avaliação clínica é indispensável.
            </p>
        </div>
      </section>

      {/* ESTRATÉGICO: HARMONIZAÇÃO DE CORAÇÃO 💚 */}
      <section className="py-24 bg-stone-100 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#b49b71]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-4">
                    <Heart className="text-[#b49b71] fill-[#b49b71]/20" size={32} />
                </div>
                <h2 className="text-4xl serif mb-4 text-stone-900">Harmonização Facial de 💚</h2>
                <p className="text-stone-500 max-w-2xl mx-auto italic">
                    "O meu método exclusivo que une a precisão técnica ao olhar humano. Porque harmonizar não é apenas mudar rostos, é resgatar sorrisos e bem-estar."
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {HEART_METHOD_DATA.map((img, idx) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white"
                    >
                        <img src={img.url} className="w-full h-full object-cover" alt="Metodo Heart" />
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* WHY TRUST ME */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl serif mb-4 text-stone-900">Por que confiar em mim?</h2>
                <div className="w-20 h-1 bg-[#b49b71] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: 'Avaliação Honesta', desc: 'Indico apenas o que você realmente precisa para um resultado harmônico.' },
                    { title: 'Atendimento Próprio', desc: 'Você será cuidada diretamente por mim do início ao fim.' },
                    { title: 'Clareza Total', desc: 'Explicação detalhada de cada procedimento e expectativa de resultado.' },
                    { title: 'Técnica de 💚', desc: 'Harmonização humanizada focada no seu bem-estar emocional.' }
                ].map((card, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-stone-100 hover:border-[#b49b71] transition-all group bg-stone-50/50">
                        <div className="w-12 h-12 bg-[#b49b71]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#b49b71] transition-all">
                            <div className="w-5 h-5 bg-[#b49b71] group-hover:bg-white rounded-full transition-all" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 serif">{card.title}</h3>
                        <p className="text-stone-500 leading-relaxed text-sm">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-[#b49b71] text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl serif mb-6">Ainda com dúvidas?</h2>
            <button 
                onClick={handleCTA}
                className="px-10 py-5 bg-white text-[#b49b71] font-bold rounded-full shadow-xl hover:scale-105 transition-all"
            >
                CHAMAR AGORA NO WHATSAPP
            </button>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl serif mb-4">Sua Jornada até a Transformação</h2>
                <p className="text-stone-500">Um processo simples, exclusivo e seguro.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                {[
                    { step: '01', title: 'Contato Inicial', desc: 'Clica no botão do WhatsApp e tira suas dúvidas iniciais.' },
                    { step: '02', title: 'Agendamento', desc: 'Marcamos sua consulta de avaliação no meu consultório.' },
                    { step: '03', title: 'Avaliação & Plano', desc: 'Analisamos sua face e definimos juntas os seus objetivos.' }
                ].map((item, idx) => (
                    <div key={idx} className="relative text-center group">
                        <div className="text-6xl font-bold text-stone-100 mb-4 group-hover:text-[#b49b71]/10 transition-all">{item.step}</div>
                        <h3 className="text-xl font-bold mb-4 serif relative z-10">{item.title}</h3>
                        <p className="text-stone-500 text-sm">{item.desc}</p>
                        {idx < 2 && <ArrowRight className="hidden md:block absolute top-10 -right-6 text-stone-200" />}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* MAIS PROVAS */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
             <div className="text-center mb-16">
                <h2 className="text-4xl serif mb-4">O que dizem as minhas pacientes</h2>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
                {TESTIMONIALS.map((url, i) => (
                    <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center rounded-3xl overflow-hidden shadow-lg border border-stone-100 bg-white">
                        <img src={url} alt={`Depoimento ${i}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl serif mb-6">Onde nos encontrar</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-[#b49b71] mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-stone-900">Endereço</h4>
                                <p className="text-stone-500">{EXPERT_DATA.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 rounded-3xl overflow-hidden h-[400px] shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116560.8409054796!2d-46.46733224095116!3d-24.012563725586617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce19904944d673%3A0x8e83f3e18a09e05e!2sPraia%20Grande%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1707921829314!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <footer className="py-24 bg-stone-900 text-white text-center">
        <div className="container mx-auto px-6">
            <div className="signature text-5xl text-[#b49b71] mb-6">{EXPERT_DATA.name}</div>
            <h2 className="text-3xl serif mb-12">Pronta para sua melhor versão?</h2>
            <button 
                onClick={handleCTA}
                className="px-12 py-6 bg-[#b49b71] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-3 mx-auto"
            >
                <MessageCircle size={24} />
                AGENDAR CONSULTA AGORA
            </button>
            <div className="mt-16 flex justify-center gap-6">
                <a href={EXPERT_DATA.instagram} className="text-stone-500 hover:text-white transition-colors">Instagram</a>
                <a href={EXPERT_DATA.whatsapp} className="text-stone-500 hover:text-white transition-colors">WhatsApp</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLanding;
