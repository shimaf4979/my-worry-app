// app/page.tsx
"use client";

import { useState } from "react";
import { MainCategory, Question, WorryItems, Choice } from "../types";
import { questions } from "../data/questions";
import { initialWorryItems } from "../data/initialState";
import {
  selectRandomQuestions,
  calculateResults,
} from "../utils/questionUtils";
import { CategorySelect } from "../components/CategorySelect";
import { QuestionCard } from "../components/QuestionCard";
import { Results } from "../components/Results";

export default function WorrySurvey() {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(
    null
  );
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [worryItems, setWorryItems] = useState<WorryItems>(initialWorryItems);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // カテゴリー選択時の処理
  const handleCategorySelect = (category: MainCategory) => {
    setSelectedCategory(category);
    const selectedQuestions = selectRandomQuestions(category, questions, 20);
    setCurrentQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
  };

  // 選択肢選択時の処理
  const handleAnswer = (choice: Choice) => {
    setWorryItems((prev) => {
      const updated = { ...prev };
      // 選択された項目のスコアと質問回数を更新
      choice.affects.forEach(({ itemId, value }) => {
        updated[itemId] = {
          ...updated[itemId],
          score: updated[itemId].score + value,
          questionCount: updated[itemId].questionCount + 1,
        };
      });
      // 選択されなかった項目の質問回数のみを更新
      currentQuestions[currentQuestionIndex].choices.forEach((otherChoice) => {
        if (otherChoice !== choice) {
          otherChoice.affects.forEach(({ itemId }) => {
            if (!choice.affects.find((ca) => ca.itemId === itemId)) {
              updated[itemId] = {
                ...updated[itemId],
                questionCount: updated[itemId].questionCount + 1,
              };
            }
          });
        }
      });
      return updated;
    });

    // 次の質問へ進む
    if (currentQuestionIndex + 1 < currentQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  // 診断をリスタート
  const handleRestart = () => {
    setSelectedCategory(null);
    setCurrentQuestions([]);
    setWorryItems(initialWorryItems);
    setCurrentQuestionIndex(0);
    setIsComplete(false);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-2xl mx-auto px-4'>
        {!selectedCategory && (
          <CategorySelect onSelect={handleCategorySelect} />
        )}

        {selectedCategory &&
          !isComplete &&
          currentQuestions[currentQuestionIndex] && (
            <QuestionCard
              question={currentQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={currentQuestions.length}
            />
          )}

        {isComplete && (
          <Results
            results={calculateResults(worryItems)}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
