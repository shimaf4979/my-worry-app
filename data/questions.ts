// data/questions.ts

import { QuestionBank } from "../types";

export const questions: QuestionBank = {
  self: [
    {
      type: "choice",
      id: "self-1",
      category: "self",
      text: "最近の自分に足りないと感じるのは？",
      choices: [
        {
          text: "やる気",
          affects: [
            { itemId: "motivation", value: 1 },
            { itemId: "growth", value: 1 },
          ],
        },
        {
          text: "目標",
          affects: [{ itemId: "future", value: 1 }],
        },
        {
          text: "成長実感",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "自信",
          affects: [
            { itemId: "motivation", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "self-2",
      category: "self",
      text: "将来について最も不安なことは？",
      choices: [
        {
          text: "就職活動",
          affects: [
            { itemId: "future", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "能力不足",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "motivation", value: 1 },
          ],
        },
        {
          text: "経済的自立",
          affects: [
            { itemId: "future", value: 1 },
            { itemId: "livingCost", value: 1 },
          ],
        },
        {
          text: "人間関係",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "self-3",
      category: "self",
      text: "やる気が出ない時の対処は？",
      choices: [
        {
          text: "SNSで気を紛らわす",
          affects: [{ itemId: "comparison", value: 1 }],
        },
        {
          text: "友達と話す",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
        {
          text: "目標を見直す",
          affects: [
            { itemId: "motivation", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "休養を取る",
          affects: [
            { itemId: "health", value: 1 },
            { itemId: "sleep", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "self-4",
      category: "self",
      text: "自己成長のために取り組んでいることは？",
      choices: [
        {
          text: "資格勉強",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "studyBalance", value: 1 },
          ],
        },
        {
          text: "スキル習得",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "インターン",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "partTime", value: 1 },
          ],
        },
        {
          text: "読書・情報収集",
          affects: [{ itemId: "growth", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "self-5",
      category: "self",
      text: "自分の性格で直したいと思うのは？",
      choices: [
        {
          text: "計画性のなさ",
          affects: [
            { itemId: "efficiency", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
        {
          text: "先延ばし癖",
          affects: [{ itemId: "assignments", value: 1 }],
        },
        {
          text: "他人との比較癖",
          affects: [{ itemId: "comparison", value: 1 }],
        },
        {
          text: "消極性",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "growth", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "self-6",
      category: "self",
      text: "学生生活で最も成長したい部分は？",
      choices: [
        {
          text: "専門知識",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "grades", value: 1 },
          ],
        },
        {
          text: "社会性",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "growth", value: 1 },
          ],
        },
        {
          text: "課題解決力",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "自己管理能力",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "self-7",
      category: "self",
      text: "自分の中で最も強い感情は？",
      choices: [
        {
          text: "焦り",
          affects: [
            { itemId: "future", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "不安",
          affects: [
            { itemId: "motivation", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "劣等感",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "growth", value: 1 },
          ],
        },
        {
          text: "孤独感",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "labRelations", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "self-8",
      category: "self",
      text: "現在の自分に最も必要なものは？",
      choices: [
        {
          text: "資格・スキル",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "人脈",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "labRelations", value: 1 },
          ],
        },
        {
          text: "生活習慣",
          affects: [{ itemId: "health", value: 1 }],
        },
        {
          text: "経済力",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "self-9",
      category: "self",
      text: "自分の弱点だと感じるのは？",
      choices: [
        {
          text: "計画性のなさ",
          affects: [
            { itemId: "deadline", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "集中力不足",
          affects: [
            { itemId: "efficiency", value: 1 },
            { itemId: "studyBalance", value: 1 },
          ],
        },
        {
          text: "優柔不断",
          affects: [
            { itemId: "motivation", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
        {
          text: "完璧主義",
          affects: [
            { itemId: "efficiency", value: 1 },
            { itemId: "health", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "self-10",
      category: "self",
      text: "休日の過ごし方で悩むのは？",
      choices: [
        {
          text: "勉強と遊びのバランス",
          affects: [
            { itemId: "studyBalance", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
        {
          text: "有意義な時間の使い方",
          affects: [{ itemId: "growth", value: 1 }],
        },
        {
          text: "誘いの対応",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
        {
          text: "睡眠時間の確保",
          affects: [
            { itemId: "sleep", value: 1 },
            { itemId: "health", value: 1 },
          ],
        },
      ],
    },
  ],

  others: [
    {
      type: "choice",
      id: "others-1",
      category: "others",
      text: "友人との関係で気になることは？",
      choices: [
        {
          text: "時間がもったいない",
          affects: [{ itemId: "freeTime", value: 1 }],
        },
        {
          text: "価値観の違い",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "誘いの断り方",
          affects: [{ itemId: "labRelations", value: 1 }],
        },
        {
          text: "距離感",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "others-2",
      category: "others",
      text: "他人と話すときに気になるのは？",
      choices: [
        {
          text: "自分の話し方",
          affects: [{ itemId: "comparison", value: 1 }],
        },
        {
          text: "相手の反応",
          affects: [{ itemId: "labRelations", value: 1 }],
        },
        {
          text: "話題の豊富さ",
          affects: [{ itemId: "growth", value: 1 }],
        },
        {
          text: "自分の性格",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "motivation", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "others-3",
      category: "others",
      text: "同級生との関係で気になることは？",
      choices: [
        {
          text: "就活状況の差",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "成績の違い",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "grades", value: 1 },
          ],
        },
        {
          text: "バイトの状況",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "partTime", value: 1 },
          ],
        },
        {
          text: "交友関係の広さ",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "communication", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "others-4",
      category: "others",
      text: "グループワークで困ることは？",
      choices: [
        {
          text: "意見が言えない",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "labRelations", value: 1 },
          ],
        },
        {
          text: "作業の遅れ",
          affects: [
            { itemId: "deadline", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "メンバーとの関係",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "責任の重さ",
          affects: [{ itemId: "motivation", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "others-5",
      category: "others",
      text: "SNSでのつながりについて悩むことは？",
      choices: [
        {
          text: "投稿の内容",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "返信の頻度",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
        {
          text: "友人の充実ぶり",
          affects: [{ itemId: "comparison", value: 1 }],
        },
        {
          text: "オンラインでの距離感",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "labRelations", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "others-6",
      category: "others",
      text: "周りと比べて劣っていると感じるのは？",
      choices: [
        {
          text: "学力・成績",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "grades", value: 1 },
          ],
        },
        {
          text: "経済状況",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "livingCost", value: 1 },
          ],
        },
        {
          text: "性格・人柄",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "communication", value: 1 },
          ],
        },
        {
          text: "将来性",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "others-7",
      category: "others",
      text: "サークルやゼミでの人間関係は？",
      choices: [
        {
          text: "先輩との付き合い",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "communication", value: 1 },
          ],
        },
        {
          text: "後輩への接し方",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "growth", value: 1 },
          ],
        },
        {
          text: "同期との関係",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "参加頻度",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "others-8",
      category: "others",
      text: "人間関係でストレスを感じるのは？",
      choices: [
        {
          text: "気を遣いすぎる",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "health", value: 1 },
          ],
        },
        {
          text: "自分を出せない",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "motivation", value: 1 },
          ],
        },
        {
          text: "誤解される",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "期待に応えられない",
          affects: [
            { itemId: "labRelations", value: 1 },
            { itemId: "growth", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "others-9",
      category: "others",
      text: "授業やゼミでの発言について？",
      choices: [
        {
          text: "積極性の不足",
          affects: [{ itemId: "motivation", value: 1 }],
        },
        {
          text: "他人の反応が気になる",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "labRelations", value: 1 },
          ],
        },
        {
          text: "質問できない",
          affects: [{ itemId: "grades", value: 1 }],
        },
        {
          text: "考えがまとまらない",
          affects: [{ itemId: "efficiency", value: 1 }],
        },
      ],
    },
  ],
  money: [
    // お金関連の質問（10問）
    {
      type: "choice",
      id: "money-1",
      category: "money",
      text: "バイトに関する悩みは？",
      choices: [
        {
          text: "学業との両立",
          affects: [{ itemId: "studyBalance", value: 1 }],
        },
        {
          text: "シフトの調整",
          affects: [{ itemId: "deadline", value: 1 }],
        },
        {
          text: "時給の低さ",
          affects: [{ itemId: "livingCost", value: 1 }],
        },
        {
          text: "人間関係",
          affects: [{ itemId: "communication", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "money-2",
      category: "money",
      text: "生活費で最も困っているのは？",
      choices: [
        {
          text: "食費の管理",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "health", value: 1 },
          ],
        },
        {
          text: "交通費",
          affects: [{ itemId: "livingCost", value: 1 }],
        },
        {
          text: "交際費",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "communication", value: 1 },
          ],
        },
        {
          text: "住居費",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "environment", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "money-4",
      category: "money",
      text: "収入を増やすために考えていることは？",
      choices: [
        {
          text: "バイトを増やす",
          affects: [
            { itemId: "partTime", value: 1 },
            { itemId: "livingCost", value: 1 },
          ],
        },
        {
          text: "高時給の仕事を探す",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "資格取得して専門バイト",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "partTime", value: 1 },
          ],
        },
        {
          text: "実家暮らしを続ける",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "environment", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "money-5",
      category: "money",
      text: "支出で最も削りたいものは？",
      choices: [
        {
          text: "娯楽費",
          affects: [{ itemId: "freeTime", value: 1 }],
        },
        {
          text: "通学費",
          affects: [{ itemId: "livingCost", value: 1 }],
        },
        {
          text: "食費",
          affects: [{ itemId: "health", value: 1 }],
        },
        {
          text: "交際費",
          affects: [{ itemId: "communication", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "money-6",
      category: "money",
      text: "将来の金銭面での不安は？",
      choices: [
        {
          text: "就職後の給与",
          affects: [
            { itemId: "future", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "生活費の重み",
          affects: [{ itemId: "livingCost", value: 1 }],
        },
        {
          text: "貯金の少なさ",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "親からの自立",
          affects: [
            { itemId: "future", value: 1 },
            { itemId: "livingCost", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "money-7",
      category: "money",
      text: "お金の管理で困ることは？",
      choices: [
        {
          text: "計画的な使用",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "急な出費",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
        {
          text: "収支の把握",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "partTime", value: 1 },
          ],
        },
        {
          text: "節約の継続",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "money-8",
      category: "money",
      text: "バイトのシフトで悩むのは？",
      choices: [
        {
          text: "授業との両立",
          affects: [{ itemId: "studyBalance", value: 1 }],
        },
        {
          text: "生活費",
          affects: [{ itemId: "livingCost", value: 1 }],
        },
        {
          text: "課題との両立",
          affects: [{ itemId: "assignments", value: 1 }],
        },
        {
          text: "体調管理",
          affects: [{ itemId: "health", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "money-9",
      category: "money",
      text: "家計管理の課題は？",
      choices: [
        {
          text: "収支バランス",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "貯金目標",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "支出の記録",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
        {
          text: "臨時収入の使い方",
          affects: [{ itemId: "livingCost", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "money-10",
      category: "money",
      text: "金銭面で我慢していることは？",
      choices: [
        {
          text: "趣味・娯楽",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
        {
          text: "自己投資",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "growth", value: 1 },
          ],
        },
        {
          text: "交友関係",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "communication", value: 1 },
          ],
        },
        {
          text: "生活の質",
          affects: [
            { itemId: "livingCost", value: 1 },
            { itemId: "environment", value: 1 },
          ],
        },
      ],
    },
  ],
  time: [
    {
      type: "choice",
      id: "time-1",
      category: "time",
      text: "時間管理で最も困っているのは？",
      choices: [
        {
          text: "授業とバイトの両立",
          affects: [
            { itemId: "studyBalance", value: 1 },
            { itemId: "partTime", value: 1 },
          ],
        },
        {
          text: "課題の締切管理",
          affects: [
            { itemId: "deadline", value: 1 },
            { itemId: "assignments", value: 1 },
          ],
        },
        {
          text: "自由時間の確保",
          affects: [
            { itemId: "freeTime", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "生活リズムの維持",
          affects: [{ itemId: "sleep", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "time-2",
      category: "time",
      text: "課題や締切に追われる原因は？",
      choices: [
        {
          text: "計画性の不足",
          affects: [
            { itemId: "deadline", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "優先順位付けの難しさ",
          affects: [
            { itemId: "efficiency", value: 1 },
            { itemId: "studyBalance", value: 1 },
          ],
        },
        {
          text: "予期せぬ出来事",
          affects: [
            { itemId: "deadline", value: 1 },
            { itemId: "assignments", value: 1 },
          ],
        },
        {
          text: "やる気の維持",
          affects: [
            { itemId: "motivation", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "time-3",
      category: "time",
      text: "空き時間の使い方で悩むのは？",
      choices: [
        {
          text: "効率的な勉強",
          affects: [
            { itemId: "efficiency", value: 1 },
            { itemId: "studyBalance", value: 1 },
          ],
        },
        {
          text: "趣味や休息",
          affects: [
            { itemId: "freeTime", value: 1 },
            { itemId: "health", value: 1 },
          ],
        },
        {
          text: "バイトのシフト",
          affects: [{ itemId: "partTime", value: 1 }],
        },
        {
          text: "友人との付き合い",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "time-4",
      category: "time",
      text: "一日の中で最も時間を取られるのは？",
      choices: [
        {
          text: "SNSやスマホ",
          affects: [{ itemId: "freeTime", value: 1 }],
        },
        {
          text: "通学時間",
          affects: [{ itemId: "environment", value: 1 }],
        },
        {
          text: "課題・レポート",
          affects: [
            { itemId: "assignments", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
        {
          text: "アルバイト",
          affects: [
            { itemId: "partTime", value: 1 },
            { itemId: "studyBalance", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "time-5",
      category: "time",
      text: "効率的に時間を使うために必要なのは？",
      choices: [
        {
          text: "スケジュール管理",
          affects: [{ itemId: "deadline", value: 1 }],
        },
        {
          text: "集中力の維持",
          affects: [{ itemId: "motivation", value: 1 }],
        },
        {
          text: "優先順位の決定",
          affects: [{ itemId: "efficiency", value: 1 }],
        },
        {
          text: "休憩時間の確保",
          affects: [{ itemId: "health", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "time-6",
      category: "time",
      text: "予定が狂いやすい原因は？",
      choices: [
        {
          text: "想定外の用事",
          affects: [{ itemId: "environment", value: 1 }],
        },
        {
          text: "体調不良",
          affects: [{ itemId: "health", value: 1 }],
        },
        {
          text: "誘いを断れない",
          affects: [{ itemId: "communication", value: 1 }],
        },
        {
          text: "モチベーション低下",
          affects: [{ itemId: "motivation", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "time-7",
      category: "time",
      text: "休日の時間の使い方で悩むのは？",
      choices: [
        {
          text: "溜まった課題",
          affects: [
            { itemId: "assignments", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
        {
          text: "予習・復習",
          affects: [
            { itemId: "studyBalance", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "休息時間",
          affects: [
            { itemId: "health", value: 1 },
            { itemId: "sleep", value: 1 },
          ],
        },
        {
          text: "友人との予定",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
      ],
    },
  ],
  // 学業関連の質問（7問）
  academics: [
    {
      type: "choice",
      id: "academics-1",
      category: "academics",
      text: "授業で困ることは？",
      choices: [
        {
          text: "内容の理解",
          affects: [{ itemId: "grades", value: 1 }],
        },
        {
          text: "集中力の維持",
          affects: [{ itemId: "studyBalance", value: 1 }],
        },
        {
          text: "ノートテイク",
          affects: [{ itemId: "assignments", value: 1 }],
        },
        {
          text: "欠席の回数",
          affects: [
            { itemId: "grades", value: 1 },
            { itemId: "health", value: 1 },
          ],
        },
      ],
    },

    {
      type: "choice",
      id: "academics-3",
      category: "academics",
      text: "課題レポートで大変なのは？",
      choices: [
        {
          text: "締切の管理",
          affects: [{ itemId: "deadline", value: 1 }],
        },
        {
          text: "締め切り",
          affects: [{ itemId: "deadline", value: 1 }],
        },
        {
          text: "文章力",
          affects: [{ itemId: "growth", value: 1 }],
        },
        {
          text: "他の予定との両立",
          affects: [{ itemId: "studyBalance", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "academics-4",
      category: "academics",
      text: "成績に関する不安は？",
      choices: [
        {
          text: "単位取得",
          affects: [
            { itemId: "grades", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "GPA",
          affects: [
            { itemId: "grades", value: 1 },
            { itemId: "comparison", value: 1 },
          ],
        },
        {
          text: "奨学金との関係",
          affects: [
            { itemId: "grades", value: 1 },
            { itemId: "livingCost", value: 1 },
          ],
        },
        {
          text: "就活への影響",
          affects: [
            { itemId: "grades", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "academics-5",
      category: "academics",
      text: "予習・復習について？",
      choices: [
        {
          text: "時間が足りない",
          affects: [{ itemId: "studyBalance", value: 1 }],
        },
        {
          text: "方法がわからない",
          affects: [
            { itemId: "growth", value: 1 },
            { itemId: "grades", value: 1 },
          ],
        },
        {
          text: "モチベーション",
          affects: [{ itemId: "motivation", value: 1 }],
        },
        {
          text: "継続性",
          affects: [{ itemId: "grades", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "academics-6",
      category: "academics",
      text: "オンライン授業の課題は？",
      choices: [
        {
          text: "集中力の維持",
          affects: [{ itemId: "efficiency", value: 1 }],
        },
        {
          text: "環境整備",
          affects: [
            { itemId: "environment", value: 1 },
            { itemId: "studyBalance", value: 1 },
          ],
        },
        {
          text: "通信環境",
          affects: [
            { itemId: "environment", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "質問のしづらさ",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "grades", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "academics-7",
      category: "academics",
      text: "学業全般での悩みは？",
      choices: [
        {
          text: "学習意欲の維持",
          affects: [
            { itemId: "motivation", value: 1 },
            { itemId: "grades", value: 1 },
          ],
        },
        {
          text: "専門科目の難しさ",
          affects: [
            { itemId: "grades", value: 1 },
            { itemId: "future", value: 1 },
          ],
        },
        {
          text: "勉強方法",
          affects: [
            { itemId: "efficiency", value: 1 },
            { itemId: "growth", value: 1 },
          ],
        },
        {
          text: "進度の遅れ",
          affects: [
            { itemId: "comparison", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
      ],
    },
  ],
  // 生活関連の質問（6問）
  lifestyle: [
    {
      type: "choice",
      id: "lifestyle-1",
      category: "lifestyle",
      text: "生活リズムの乱れの原因は？",
      choices: [
        {
          text: "夜更かし",
          affects: [{ itemId: "sleep", value: 1 }],
        },
        {
          text: "不規則な食事",
          affects: [{ itemId: "health", value: 1 }],
        },
        {
          text: "運動不足",
          affects: [{ itemId: "health", value: 1 }],
        },
        {
          text: "課題の締め切り",
          affects: [
            { itemId: "assignments", value: 1 },
            { itemId: "studyBalance", value: 1 },
            { itemId: "deadline", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "lifestyle-2",
      category: "lifestyle",
      text: "健康管理で気になるのは？",
      choices: [
        {
          text: "睡眠の質",
          affects: [
            { itemId: "sleep", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "食生活",
          affects: [
            { itemId: "health", value: 1 },
            { itemId: "livingCost", value: 1 },
          ],
        },
        {
          text: "ストレス",
          affects: [{ itemId: "health", value: 1 }],
        },
        {
          text: "運動時間",
          affects: [
            { itemId: "health", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "lifestyle-3",
      category: "lifestyle",
      text: "住環境で困ることは？",
      choices: [
        {
          text: "通学時間",
          affects: [{ itemId: "efficiency", value: 1 }],
        },
        {
          text: "学習スペース",
          affects: [{ itemId: "studyBalance", value: 1 }],
        },
        {
          text: "家賃",
          affects: [{ itemId: "livingCost", value: 1 }],
        },
        {
          text: "周辺環境",
          affects: [{ itemId: "freeTime", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "lifestyle-4",
      category: "lifestyle",
      text: "一人暮らしで大変なことは？",
      choices: [
        {
          text: "家事全般",
          affects: [{ itemId: "environment", value: 1 }],
        },
        {
          text: "食事の準備",
          affects: [
            { itemId: "health", value: 1 },
            { itemId: "livingCost", value: 1 },
          ],
        },
        {
          text: "生活費管理",
          affects: [{ itemId: "livingCost", value: 1 }],
        },
        {
          text: "寂しさ",
          affects: [{ itemId: "communication", value: 1 }],
        },
      ],
    },
    {
      type: "choice",
      id: "lifestyle-5",
      category: "lifestyle",
      text: "日々の生活で不足していると感じるのは？",
      choices: [
        {
          text: "運動",
          affects: [
            { itemId: "health", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
        {
          text: "睡眠",
          affects: [{ itemId: "sleep", value: 1 }],
        },
        {
          text: "趣味の時間",
          affects: [{ itemId: "freeTime", value: 1 }],
        },
        {
          text: "人との交流",
          affects: [
            { itemId: "communication", value: 1 },
            { itemId: "health", value: 1 },
          ],
        },
      ],
    },
    {
      type: "choice",
      id: "lifestyle-6",
      category: "lifestyle",
      text: "心身の健康管理で難しいのは？",
      choices: [
        {
          text: "ストレス発散",
          affects: [{ itemId: "health", value: 1 }],
        },
        {
          text: "規則正しい生活",
          affects: [
            { itemId: "sleep", value: 1 },
            { itemId: "efficiency", value: 1 },
          ],
        },
        {
          text: "運動習慣",
          affects: [{ itemId: "health", value: 1 }],
        },
        {
          text: "休息時間の確保",
          affects: [
            { itemId: "health", value: 1 },
            { itemId: "freeTime", value: 1 },
          ],
        },
      ],
    },
  ],
};
