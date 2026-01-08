
import React from 'react';
import { EXPERT_DATA } from '../constants';

const FloatingExpert: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full border-[3px] border-[#b49b71] p-0.5 shadow-lg bg-white overflow-hidden">
        <img 
          src={EXPERT_DATA.mainHero} 
          alt={EXPERT_DATA.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="mt-2 text-[#b49b71] font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
        {EXPERT_DATA.name}
      </h3>
    </div>
  );
};

export default FloatingExpert;
