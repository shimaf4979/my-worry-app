// src/components/GLTFViewer/LoadingProgress.tsx
interface LoadingProgressProps {
  progress: number;
}

export default function LoadingProgress({ progress }: LoadingProgressProps) {
  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-50'>
      <div className='w-48 h-2 bg-gray-200 rounded-full mb-2'>
        <div
          className='h-full bg-blue-600 rounded-full transition-all duration-300'
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className='text-sm font-medium text-gray-700'>
        {Math.round(progress)}% loaded
      </div>
    </div>
  );
}
