// data/initialState.ts

import { WorryItems, ItemId, ITEM_LABELS } from "../types";

// 初期状態の生成関数
const createInitialWorryItem = (id: ItemId): WorryItems[ItemId] => ({
  id,
  score: 0,
  questionCount: 0,
  category: getCategory(id),
  label: ITEM_LABELS[id],
});

// カテゴリーの判定
const getCategory = (id: ItemId) => {
  if (["motivation", "future", "growth"].includes(id)) return "self";
  if (["labRelations", "comparison", "communication"].includes(id))
    return "others";
  if (["partTime", "livingCost", "tuition"].includes(id)) return "money";
  if (["studyBalance", "deadline", "efficiency", "freeTime"].includes(id))
    return "time";
  if (["exams", "assignments", "research", "grades"].includes(id))
    return "academics";
  return "lifestyle";
};

// 初期状態
export const initialWorryItems: WorryItems = {
  // 自分
  motivation: createInitialWorryItem("motivation"),
  future: createInitialWorryItem("future"),
  growth: createInitialWorryItem("growth"),

  // 他人
  labRelations: createInitialWorryItem("labRelations"),
  comparison: createInitialWorryItem("comparison"),
  communication: createInitialWorryItem("communication"),

  // お金
  partTime: createInitialWorryItem("partTime"),
  livingCost: createInitialWorryItem("livingCost"),
  // tuition: createInitialWorryItem("tuition"),

  // 時間
  studyBalance: createInitialWorryItem("studyBalance"),
  deadline: createInitialWorryItem("deadline"),
  efficiency: createInitialWorryItem("efficiency"),
  freeTime: createInitialWorryItem("freeTime"),

  // 学業
  // exams: createInitialWorryItem("exams"),
  assignments: createInitialWorryItem("assignments"),
  // research: createInitialWorryItem("research"),
  grades: createInitialWorryItem("grades"),

  // 生活
  sleep: createInitialWorryItem("sleep"),
  health: createInitialWorryItem("health"),
  environment: createInitialWorryItem("environment"),
};
