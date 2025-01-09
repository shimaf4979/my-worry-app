import Link from "next/link";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("../../components/Modelviewer"), {
  ssr: false,
});

export default function ModelViewerPage() {
  const modelUrl = "/models/mokuyoku1.gltf";

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold my-4'>3Dモデルビューア</h1>
      <ModelViewer modelPath={modelUrl} />
      <div className='mt-4'>
        <Link href='/' className='text-blue-500 hover:underline'>
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
