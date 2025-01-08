// types/index.ts

export const CATEGORIES = {
  SELF: "self",
  OTHERS: "others",
  MONEY: "money",
  TIME: "time",
  ACADEMICS: "academics",
  LIFESTYLE: "lifestyle",
} as const;

export type MainCategory = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export const ITEM_LABELS = {
  // 自分
  motivation: "モチベーション維持",
  future: "将来への不安",
  growth: "自己成長",

  // 他人
  labRelations: "人間関係",
  comparison: "他人との比較",
  communication: "コミュニケーション",

  // お金
  partTime: "バイト",
  livingCost: "生活費",
  // tuition: "学費",

  // 時間
  studyBalance: "学習バランス",
  deadline: "締切管理",
  efficiency: "効率",
  freeTime: "自由時間",

  // 学業
  // exams: "試験",
  assignments: "課題",
  // research: "研究",
  grades: "成績",

  // 生活
  sleep: "睡眠",
  health: "健康",
  environment: "環境",
} as const;

export type ItemId = keyof typeof ITEM_LABELS;

export type WorryItem = {
  id: ItemId;
  score: number;
  questionCount: number;
  category: MainCategory;
  label: string;
};

export type WorryItems = Record<ItemId, WorryItem>;

export type ItemEffect = {
  itemId: ItemId;
  value: number;
};

export type Choice = {
  text: string;
  affects: ItemEffect[];
};

export type Question = {
  id: string;
  type: "choice";
  category: MainCategory;
  text: string;
  choices: Choice[];
};

export type QuestionBank = {
  [key in MainCategory]: Question[];
};

export const CATEGORY_LABELS: Record<MainCategory, string> = {
  self: "自分",
  others: "他人",
  money: "お金",
  time: "時間",
  academics: "学業",
  lifestyle: "生活",
};

export type WorryResult = {
  id: ItemId;
  ratio: number;
  category: MainCategory;
  label: string;
  questionCount: number;
};
