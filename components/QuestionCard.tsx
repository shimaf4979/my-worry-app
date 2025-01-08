// components/QuestionCard.tsx

import { Question, Choice } from "../types";

type QuestionCardProps = {
  question: Question;
  onAnswer: (choice: Choice) => void;
  currentQuestion: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className='space-y-6'>
      {/* Progress bar */}
      <div className='space-y-1'>
        <div className='w-full bg-gray-200 rounded-full h-2.5'>
          <div
            className='bg-blue-600 h-2.5 rounded-full transition-all duration-300'
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          ></div>
        </div>
        <p className='text-right text-sm text-gray-600'>
          質問 {currentQuestion} / {totalQuestions}
        </p>
      </div>

      {/* Question */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-xl font-medium mb-6'>{question.text}</h2>

        <div className='grid grid-cols-2 gap-4'>
          {question.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => onAnswer(choice)}
              className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600
                       transition-colors duration-200 text-center min-h-[80px]
                       flex items-center justify-center text-lg'
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
