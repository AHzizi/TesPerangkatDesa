export interface Question {
  id: number;
  question: string;
  options: string[] | { [key: string]: string };
  correctAnswer: number | string;
  explanation: string;
}

export interface UserInfo {
  firstName: string;
  lastName?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: { [key: number]: number | string };
  score: number;
  showResults: boolean;
  userInfo: UserInfo | null;
}