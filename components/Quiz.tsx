
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS, EXPERT_DATA } from '../constants.tsx';
import FloatingExpert from './FloatingExpert.tsx';
import { QuizResponse } from '../types.ts';

interface QuizProps {
  onComplete: (responses: QuizResponse[]) => void;
  onExit: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onExit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);

  const handleSelect = (option: string) => {
    const newResponses = [
      ...responses,
      { question: QUIZ_QUESTIONS[currentStep].question, answer: option }
    ];
    setResponses(newResponses);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newResponses);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-stone-900/60 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-md bg-white rounded-[32px] p-5 md:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.02]">
          <span className="text-6xl md:text-8xl font-bold uppercase rotate-45 text-stone-900">{EXPERT_DATA.name}</span>
        </div>

        <div className="flex-shrink-0">
          <FloatingExpert />
        </div>

        <div className="mb-4 md:mb-6 flex-shrink-0">
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Avaliação</span>
            <span className="text-[10px] font-black text-[#b49b71]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#b49b71]"
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto no-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg md:text-2xl font-bold text-stone-900 mb-4 md:mb-6 leading-tight pr-4">
                {QUIZ_QUESTIONS[currentStep].question}
              </h2>

              <div className="space-y-2 md:space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option)}
                    className="w-full py-3.5 md:py-4 px-5 text-left rounded-xl md:rounded-2xl border border-stone-100 hover:border-[#b49b71] hover:bg-stone-50 transition-all duration-200 text-stone-700 text-sm md:text-base font-semibold active:scale-[0.98] group flex justify-between items-center bg-white shadow-sm"
                  >
                    <span className="pr-2">{option}</span>
                    <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-stone-200 group-hover:border-[#b49b71] group-hover:bg-[#b49b71]/10 flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#b49b71] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 pt-4 border-t border-stone-50 flex justify-center flex-shrink-0">
            <button 
                onClick={onExit}
                className="text-stone-300 text-[10px] uppercase font-bold tracking-widest hover:text-[#b49b71] transition-colors"
            >
                Ir para o site sem avaliar
            </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;
