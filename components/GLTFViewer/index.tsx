// src/components/GLTFViewer/index.tsx
"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { Group } from "three";
import LoadingProgress from "./LoadingProgress";
import LoadingSpinner from "./LoadingSpinner";
interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);
  const { progress } = useProgress();

  return (
    <group ref={group}>
      <primitive object={scene} />
      {progress < 100 && <LoadingProgress progress={progress} />}
    </group>
  );
}

interface GLTFViewerProps {
  modelPath: string;
  className?: string;
}

export default function GLTFViewer({
  modelPath,
  className = "",
}: GLTFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`w-full h-96 relative ${className}`}>
      <Canvas onCreated={() => setIsLoading(false)}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Model modelPath={modelPath} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
      {isLoading && <LoadingSpinner />}
    </div>
  );
}
