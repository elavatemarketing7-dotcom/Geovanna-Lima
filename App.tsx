
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppState, QuizResponse } from './types';
import { EXPERT_DATA } from './constants';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import MainLanding from './components/MainLanding';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.CHOICE);
  const [quizResponses, setQuizResponses] = useState<QuizResponse[]>([]);

  const handleQuizComplete = (responses: QuizResponse[]) => {
    setQuizResponses(responses);
    setState(AppState.ANALYZING);
  };

  useEffect(() => {
    if (state === AppState.ANALYZING) {
      const timer = setTimeout(() => {
        setState(AppState.RESULT);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const renderFunnel = () => {
    switch (state) {
      case AppState.CHOICE:
        return (
          <div className="min-h-screen relative flex items-center justify-center p-4 md:p-6 bg-stone-900 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 grayscale blur-sm scale-110"
              style={{ backgroundImage: `url(${EXPERT_DATA.mainHero})` }}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl border border-white/20"
            >
              <div className="flex flex-col items-center text-center">
                 <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-[#b49b71] to-[#d4c5ae] rounded-full opacity-30 blur-md animate-pulse"></div>
                    <div className="relative w-28 h-28 rounded-full border-[3px] border-[#b49b71] p-1 shadow-2xl bg-white overflow-hidden">
                      <img 
                        src={EXPERT_DATA.mainHero} 
                        alt={EXPERT_DATA.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-stone-100 text-[#b49b71]">
                        <Sparkles size={18} fill="currentColor" />
                    </div>
                 </div>

                 <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#b49b71] mb-2">Seja bem-vinda</h2>
                 <h1 className="text-3xl font-bold serif mb-4 text-stone-900 leading-tight">Como podemos <br/>ajudar você hoje?</h1>
                 
                 <div className="space-y-3 w-full">
                    <button 
                        onClick={() => setState(AppState.QUIZ)}
                        className="w-full py-5 bg-[#b49b71] text-white font-bold rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                    >
                        INICIAR AVALIAÇÃO PERSONALIZADA
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={() => setState(AppState.MAIN_SITE)}
                        className="w-full py-4 bg-stone-100 text-stone-700 font-bold rounded-2xl hover:bg-stone-200 active:scale-95 transition-all"
                    >
                        IR PARA O SITE DIRETO
                    </button>
                    <button 
                        onClick={() => window.open(EXPERT_DATA.whatsapp, '_blank')}
                        className="w-full py-4 border-2 border-stone-100 text-stone-500 font-bold rounded-2xl flex items-center justify-center gap-2 hover:border-[#b49b71]/30 transition-all text-sm"
                    >
                        <MessageCircle size={18} />
                        CHAMAR NO WHATSAPP
                    </button>
                 </div>
              </div>
            </motion.div>
          </div>
        );

      case AppState.QUIZ:
        return (
          <Quiz 
            onComplete={handleQuizComplete} 
            onExit={() => setState(AppState.MAIN_SITE)} 
          />
        );

      case AppState.ANALYZING:
        return (
          <div className="fixed inset-0 z-[100] bg-stone-900/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
             <div className="w-full max-w-sm bg-white p-8 rounded-[40px] shadow-2xl">
                <div className="mb-6">
                    <div className="w-20 h-20 rounded-full border-4 border-[#b49b71] p-1 mx-auto animate-pulse">
                        <img src={EXPERT_DATA.mainHero} className="w-full h-full object-cover rounded-full" alt="Analyzing" />
                    </div>
                </div>
                <h2 className="text-xl font-bold serif mb-6 text-stone-900">Analisando suas respostas...</h2>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3 }}
                        className="h-full bg-[#b49b71]"
                    />
                </div>
                <p className="mt-4 text-stone-400 text-xs italic font-medium">Buscando o melhor protocolo para você...</p>
             </div>
          </div>
        );

      case AppState.RESULT:
        return (
          <ResultPage 
            responses={quizResponses} 
            onContinue={() => setState(AppState.MAIN_SITE)} 
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden">
      {/* Background Main Site for Context if needed */}
      {(state === AppState.QUIZ || state === AppState.ANALYZING || state === AppState.RESULT) && (
        <div className="fixed inset-0 z-0 opacity-40 grayscale blur-sm pointer-events-none">
          <MainLanding />
        </div>
      )}
      
      <AnimatePresence mode="wait">
        {state === AppState.MAIN_SITE ? (
          <motion.div key="site" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <MainLanding />
          </motion.div>
        ) : (
          <motion.div key="funnel" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {renderFunnel()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
