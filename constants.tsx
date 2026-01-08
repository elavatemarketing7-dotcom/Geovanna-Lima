
import { GalleryImage } from './types';

export const EXPERT_DATA = {
  name: 'Geovanna Lima',
  profession: 'Harmonização Facial',
  address: 'Praia Grande, SP',
  whatsapp: 'https://api.whatsapp.com/send/?phone=5513982302224&text&type=phone_number&app_absent=0&utm_source=ig',
  instagram: 'https://www.instagram.com/dra_geovannalima?igsh=aHQ2cDk5NGxzZWcw',
  mainHero: 'https://i.imgur.com/lFMVUds.png',
  expertAlt1: 'https://i.imgur.com/1aJDJ1h.png',
  expertAlt2: 'https://i.imgur.com/IenZAjw.png',
  videoUrl: 'https://i.imgur.com/7AK2ILr.mp4'
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "O que você busca melhorar hoje?",
    options: ["Rugas e Linhas de Expressão", "Volume Labial", "Contorno Facial", "Qualidade da Pele", "Harmonia Geral"]
  },
  {
    id: 2,
    question: "Você já realizou algum procedimento estético?",
    options: ["Sim, já realizo sempre", "Sim, há muito tempo", "Nunca realizei", "Tenho receio de ficar artificial"]
  },
  {
    id: 3,
    question: "Qual o seu principal objetivo?",
    options: ["Rejuvenescimento Natural", "Correção de Assimetrias", "Prevenção", "Melhorar a Autoestima"]
  }
];

// Galeria de Procedimentos (Resultados Técnicos)
export const GALLERY_DATA: GalleryImage[] = [
  // Full Face
  { url: 'https://i.imgur.com/vD07BJj.png', category: 'Full Face' },
  { url: 'https://i.imgur.com/5qkgXv8.png', category: 'Full Face' },
  { url: 'https://i.imgur.com/y6TieTX.png', category: 'Full Face' },
  // Lipo
  { url: 'https://i.imgur.com/OZvoxe8.png', category: 'Lipo de Papada' },
  { url: 'https://i.imgur.com/IgTAlrh.png', category: 'Lipo de Papada' },
  { url: 'https://i.imgur.com/BYFzHPc.png', category: 'Lipo de Papada' },
  // Labial
  { url: 'https://i.imgur.com/g2mA4Jd.png', category: 'P. Labial' },
  { url: 'https://i.imgur.com/ILRRUtb.png', category: 'P. Labial' },
  { url: 'https://i.imgur.com/9ki8puv.png', category: 'P. Labial' },
  // Botox
  { url: 'https://i.imgur.com/fTm5HLK.png', category: 'Botox' },
  { url: 'https://i.imgur.com/L6Djisi.png', category: 'Botox' },
  { url: 'https://i.imgur.com/jXip5jd.png', category: 'Botox' },
  // Rino
  { url: 'https://i.imgur.com/oDjpG5N.png', category: 'Rinomodelação' },
  { url: 'https://i.imgur.com/xMOngyo.png', category: 'Rinomodelação' },
  { url: 'https://i.imgur.com/LAGgXEB.png', category: 'Rinomodelação' },
  // Mento
  { url: 'https://i.imgur.com/ePjTYNZ.png', category: 'P. Mento' },
  { url: 'https://i.imgur.com/fQvoxqz.png', category: 'P. Mento' },
  // Bigode Chinês
  { url: 'https://i.imgur.com/obIf9jK.png', category: 'P. Bigode Chinês' },
  { url: 'https://i.imgur.com/MookfzE.png', category: 'P. Bigode Chinês' },
  { url: 'https://i.imgur.com/9va3SwJ.png', category: 'P. Bigode Chinês' },
];

// Categoria Especial: Harmonização de Coração (O Diferencial)
export const HEART_METHOD_DATA: GalleryImage[] = [
  { url: 'https://i.imgur.com/DXSQC1O.png', category: 'Harmonização de 💚' },
  { url: 'https://i.imgur.com/il1jGvf.png', category: 'Harmonização de 💚' },
  { url: 'https://i.imgur.com/ZL5x2ef.png', category: 'Harmonização de 💚' },
  { url: 'https://i.imgur.com/BzUQ4dz.png', category: 'Harmonização de 💚' },
  { url: 'https://i.imgur.com/E37Xr1a.png', category: 'Harmonização de 💚' },
  { url: 'https://i.imgur.com/WtekqPF.png', category: 'Harmonização de 💚' },
];

export const TESTIMONIALS = [
  'https://i.imgur.com/ONeyAMW.png',
  'https://i.imgur.com/eEP0nP6.png',
  'https://i.imgur.com/ZwvHsoH.png',
  'https://i.imgur.com/mpRIDAo.png'
];
