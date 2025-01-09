// utils/questionUtils.ts

import {
  MainCategory,
  Question,
  QuestionBank,
  WorryItems,
  WorryResult,
  //   ItemEffect,
} from "../types";

// 各項目の出現回数をカウントする関数
const countItemAppearances = (
  questions: Question[]
): Record<string, number> => {
  const counts: Record<string, number> = {
    motivation: 0,
    future: 0,
    growth: 0,
    labRelations: 0,
    comparison: 0,
    communication: 0,
    partTime: 0,
    livingCost: 0,
    // tuition: 0,
    studyBalance: 0,
    deadline: 0,
    efficiency: 0,
    freeTime: 0,
    // exams: 0,
    assignments: 0,
    // research: 0,
    grades: 0,
    sleep: 0,
    health: 0,
    environment: 0,
  };

  questions.forEach((question) => {
    question.choices.forEach((choice) => {
      choice.affects.forEach(({ itemId }) => {
        counts[itemId]++;
      });
    });
  });

  return counts;
};

// 質問がどの項目に影響するかをチェックする関数
const getAffectedItems = (question: Question): Set<string> => {
  const items = new Set<string>();
  question.choices.forEach((choice) => {
    choice.affects.forEach(({ itemId }) => {
      items.add(itemId);
    });
  });
  return items;
};

// 質問を追加した場合の出現回数をシミュレート
// const simulateAddQuestion = (
//   currentCounts: Record<string, number>,
//   question: Question
// ): Record<string, number> => {
//   const newCounts = { ...currentCounts };
//   question.choices.forEach((choice) => {
//     choice.affects.forEach(({ itemId }) => {
//       newCounts[itemId]++;
//     });
//   });
//   return newCounts;
// };

// 質問セットが条件を満たすか検証する関数
const validateQuestionSet = (
  questions: Question[],
  minAppearances: number = 4
): boolean => {
  const counts = countItemAppearances(questions);
  return Object.values(counts).every((count) => count >= minAppearances);
};

// 最も出現回数の少ない項目を取得
const getLeastFrequentItems = (counts: Record<string, number>): string[] => {
  const minCount = Math.min(...Object.values(counts));
  return Object.entries(counts)
    .filter(([, count]) => count === minCount)
    .map(([item]) => item);
};

// 質問をランダムに選択する関数
export const selectRandomQuestions = (
  mainCategory: MainCategory,
  questionBank: QuestionBank,
  totalQuestions: number = 15,
  minAppearances: number = 3
): Question[] => {
  let selectedQuestions: Question[] = [];
  let attempts = 0;
  const maxAttempts = 10000;

  while (attempts < maxAttempts) {
    selectedQuestions = [];
    const allQuestions = [...Object.values(questionBank).flat()];
    // const counts = countItemAppearances(selectedQuestions);

    // 質問を1つずつ追加
    while (
      selectedQuestions.length < totalQuestions &&
      allQuestions.length > 0
    ) {
      // 現在の出現回数をチェック
      const currentCounts = countItemAppearances(selectedQuestions);
      //   const remainingQuestions = totalQuestions - selectedQuestions.length;

      // 最も出現回数の少ない項目を取得
      const leastFrequentItems = getLeastFrequentItems(currentCounts);

      // 最も出現回数の少ない項目をカバーする質問を探す
      const potentialQuestions = allQuestions.filter((q) => {
        const affectedItems = getAffectedItems(q);
        return leastFrequentItems.some((item) => affectedItems.has(item));
      });

      if (potentialQuestions.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * potentialQuestions.length
        );
        const selectedQuestion = potentialQuestions[randomIndex];
        selectedQuestions.push(selectedQuestion);
        const questionIndex = allQuestions.indexOf(selectedQuestion);
        allQuestions.splice(questionIndex, 1);
      } else {
        // 適切な質問が見つからない場合、ランダムに選択
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        selectedQuestions.push(allQuestions.splice(randomIndex, 1)[0]);
      }
    }

    // 最終的な検証
    if (validateQuestionSet(selectedQuestions, minAppearances)) {
      return shuffleArray(selectedQuestions);
    }

    attempts++;
  }

  console.warn("Could not find optimal question set after maximum attempts");
  return shuffleArray(selectedQuestions);
};

// 配列をシャッフルする関数
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 結果を計算する関数
export const calculateResults = (worryItems: WorryItems): WorryResult[] => {
  return Object.entries(worryItems)
    .map(([key, item]) => ({
      id: key as keyof WorryItems,
      ratio: item.questionCount > 0 ? item.score / item.questionCount : 0,
      category: item.category,
      label: item.label,
      questionCount: item.questionCount,
    }))
    .sort((a, b) => b.ratio - a.ratio);
};
