// components/Results.tsx
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

const ModelViewer = dynamic(() => import("./Modelviewer"), {
  ssr: false,
});

import { WorryResult, CATEGORY_LABELS } from "../types";

type ResultsProps = {
  results: WorryResult[];
  onRestart: () => void;
};

export const Results: React.FC<ResultsProps> = ({ results, onRestart }) => {
  const topResult = results[0];
  const modelUrl = "/models/mokuyoku2draco.gltf";
  const [isLoading, setIsLoading] = useState(true);

  const handleModelLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='space-y-8'>
      <h2 className='text-2xl font-bold text-center'>診断結果</h2>

      {/* Top Result */}
      <div className='bg-blue-50 p-6 rounded-lg shadow-md'>
        <h3 className='text-xl font-semibold mb-2'>最も気になっている悩み</h3>
        <div className='space-y-2'>
          <p className='text-lg'>
            カテゴリー：{CATEGORY_LABELS[topResult.category]}
          </p>
          <p className='text-lg'>項目：{topResult.label}</p>
          <p className='text-lg'>
            強さ：{(topResult.ratio * 100).toFixed(1)}% (
            {topResult.questionCount}回の質問中)
          </p>
        </div>
      </div>
      <h1 className='text-3xl text-center font-bold my-4'>
        そんなあなたにおすすめの沐浴施設
      </h1>
      {isLoading && <p className='text-center'>ロード中...</p>}
      <ModelViewer modelPath={modelUrl} onLoad={handleModelLoad} />

      {/* All Results */}
      <div className='space-y-4'>
        <h3 className='text-xl font-semibold'>詳細結果</h3>
        <div className='grid gap-3'>
          {results.map((result) => (
            <div key={result.id} className='space-y-1'>
              <div className='flex items-center justify-between text-sm'>
                <span className='font-medium'>
                  {CATEGORY_LABELS[result.category]} - {result.label}
                </span>
                <span>
                  {(result.ratio * 100).toFixed(1)}% ({result.questionCount}回)
                </span>
              </div>
              <div className='w-full h-4 bg-gray-200 rounded-full'>
                <div
                  className='h-full bg-blue-600 rounded-full transition-all duration-500'
                  style={{ width: `${result.ratio * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis */}
      <div className='bg-gray-50 p-6 rounded-lg'>
        <h3 className='text-lg font-semibold mb-3'>分析</h3>
        <div className='space-y-2 text-gray-700'>
          <p>
            {CATEGORY_LABELS[topResult.category]}カテゴリーの 「
            {topResult.label}」に関する悩みが最も強く表れています。
          </p>
          <p>
            全15問の質問を通じて、各項目が最低2回以上評価されており、
            信頼性の高い結果となっています。
          </p>
        </div>
      </div>

      {/* Restart Button */}
      <div className='text-center pt-4'>
        <button
          onClick={onRestart}
          className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600
                   transition-colors duration-200 font-medium'
        >
          もう一度診断する
        </button>
      </div>
      {/* <div className='text-center pt-4'>
        <Link
          href='/3dmodel2'
          className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600
                   transition-colors duration-200 font-medium'
        >
          3Dモデルを見る
        </Link>
      </div> */}
    </div>
  );
};

// export default function ModelViewerPage() {
//   return (
//     <div className='container mx-auto px-4'>
//       <div className='mt-4'>
//         <Link href='/' className='text-blue-500 hover:underline'>
//           ホームに戻る
//         </Link>
//       </div>
//     </div>
//   );
// }
