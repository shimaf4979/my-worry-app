"use client";

import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useProgress,
  Html,
  PerspectiveCamera,
  Environment,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

// 初期サイズをここで設定します
const INITIAL_SCALE = 2;

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef<THREE.Group>();

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center);
    }

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.side = THREE.DoubleSide;
        if (child.material.map) child.material.map.flipY = false;

        child.material.roughness = 0.5;
        child.material.metalness = 0.5;

        child.geometry.computeVertexNormals();
      }
    });
  }, [scene]);

  return <primitive ref={modelRef} object={scene} scale={INITIAL_SCALE} />;
}

function LoadingProgress() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% 読み込み中</Html>;
}

function Scene({
  modelPath,
  isRotating,
}: {
  modelPath: string;
  isRotating: boolean;
}) {
  const controlsRef = useRef<any>();
  const { camera } = useThree();

  useFrame(() => {
    if (isRotating && controlsRef.current) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.update();
    }
  });

  useEffect(() => {
    camera.position.set(0, 0, 10);
    camera.updateProjectionMatrix();
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <Suspense fallback={<LoadingProgress />}>
        <Model path={modelPath} />
      </Suspense>
      <OrbitControls
        ref={controlsRef}
        autoRotate={isRotating}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={1}
        maxDistance={100}
      />
      <Environment preset='sunset' background />
    </>
  );
}

export default function ModelViewer({ modelPath }: { modelPath: string }) {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className='w-full h-[80vh] relative'>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Scene modelPath={modelPath} isRotating={isRotating} />
      </Canvas>
      <button
        className='absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded'
        onClick={() => setIsRotating(!isRotating)}
      >
        {isRotating ? "回転を停止" : "回転を開始"}
      </button>
    </div>
  );
}
