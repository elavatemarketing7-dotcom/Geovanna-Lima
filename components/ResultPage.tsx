
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERT_DATA } from '../constants';
import { QuizResponse } from '../types';

interface ResultPageProps {
  responses: QuizResponse[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ responses, onContinue }) => {
  const formatQuizMessage = () => {
    let msg = `Olá Dra. Geovanna, acabei de realizar o quiz no site e sou um Perfil Compatível!\n\nMinhas respostas:\n`;
    responses.forEach(r => {
      msg += `• ${r.question}: ${r.answer}\n`;
    });
    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = () => {
    window.open(`${EXPERT_DATA.whatsapp}&text=${formatQuizMessage()}`, '_blank');
  };

  const handleSimpleWhatsApp = () => {
    window.open(EXPERT_DATA.whatsapp, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-stone-900/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[40px] p-6 md:p-10 shadow-2xl text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#b49b71]/5 to-transparent"></div>

        <div className="mb-6 flex justify-center relative z-10">
           <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[4px] border-[#b49b71] p-1.5 shadow-2xl overflow-hidden relative bg-white">
              <img 
                src={EXPERT_DATA.mainHero} 
                className="w-full h-full object-cover rounded-full" 
                alt="Expert" 
              />
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
           </div>
        </div>

        <div className="space-y-2 mb-8 relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-[#b49b71] text-white text-[10px] font-black tracking-[0.2em] uppercase mb-2 shadow-lg shadow-[#b49b71]/30">
                Perfil Compatível
            </span>
            <h1 className="text-2xl md:text-3xl font-bold serif leading-tight text-stone-900">
                Você é a Paciente ideal.
            </h1>
            <p className="text-stone-500 text-sm md:text-base leading-relaxed mt-4">
                Com base nas suas respostas, o Método da <span className="text-[#b49b71] font-bold">Dra. Geovanna Lima</span> consegue entregar exatamente a naturalidade e segurança que você procura.
            </p>
        </div>

        <div className="space-y-3 w-full relative z-10">
            <button 
                onClick={handleSendWhatsApp}
                className="w-full py-4.5 bg-[#b49b71] text-white font-bold rounded-2xl shadow-xl shadow-[#b49b71]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
            >
                1- ENVIAR MINHA AVALIAÇÃO À DRA.
            </button>

            <button 
                onClick={handleSimpleWhatsApp}
                className="w-full py-4 border-2 border-stone-100 text-stone-600 font-bold rounded-2xl hover:bg-stone-50 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
            >
                2- CHAMAR NO WHATSAPP SEM COMPROMISSO
            </button>

            <button 
                onClick={onContinue}
                className="w-full py-2 text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-stone-900 transition-colors"
            >
                3- NÃO ENVIAR E CONTINUAR NO SITE
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultPage;
