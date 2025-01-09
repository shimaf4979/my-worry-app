// src/components/GLTFViewer/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900'></div>
    </div>
  );
}
