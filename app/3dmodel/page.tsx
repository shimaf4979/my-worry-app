// src/app/page.tsx
import GLTFViewer from "@/components/GLTFViewer";

export default function Home() {
  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>3D Model Viewer</h1>
      <GLTFViewer
        modelPath='/models/mokuyoku1.gltf'
        className='border rounded-lg shadow-lg'
      />
    </main>
  );
}
