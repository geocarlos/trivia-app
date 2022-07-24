export type Difficulty = 'easy' | 'medium' | 'hard';

export interface QuizItem {
    category: string;
    type: string;
    difficulty: Difficulty;
    question: string;
    correctAnswer: boolean;
    incorrectAnswers: boolean[];
    userAnswer?: boolean;
}

export default QuizItem;