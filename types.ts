
export enum AppState {
  CHOICE = 'CHOICE',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  MAIN_SITE = 'MAIN_SITE'
}

export interface QuizResponse {
  question: string;
  answer: string;
}

export interface GalleryImage {
  url: string;
  category: string;
  title?: string;
}
