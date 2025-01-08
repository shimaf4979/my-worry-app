// components/CategorySelect.tsx

import { MainCategory, CATEGORY_LABELS } from "../types";

type CategorySelectProps = {
  onSelect: (category: MainCategory) => void;
};

export const CategorySelect: React.FC<CategorySelectProps> = ({ onSelect }) => {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold text-center'>大学生活の悩み診断</h1>
      <p className='text-center text-gray-600'>
        最も気になる分野を選択してください
      </p>
      <div className='grid grid-cols-2 gap-4'>
        {(Object.keys(CATEGORY_LABELS) as MainCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className='p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                     transition-colors duration-200 shadow-md hover:shadow-lg
                     flex items-center justify-center text-lg font-medium'
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>
      <p className='text-center text-gray-500 text-sm mt-4'>
        ※ 20個の質問であなたの悩みを分析します
      </p>
    </div>
  );
};
