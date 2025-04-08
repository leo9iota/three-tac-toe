import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh } from 'three';
import SphereTexture from '../assets/images/sphere-texture.jpeg';

interface SphereMeshProps {
  position: [number, number, number];
  winner: string | null;
}

function SphereMesh({ position, winner }: SphereMeshProps) {
  const [sphereTexture] = useLoader(TextureLoader, [SphereTexture]);
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (winner === null || winner === 'Sphere') {
      if (ref.current) {
        ref.current.rotation.y += 0.03;
      }
    }
  });

  return (
    <>
      <mesh position={position} ref={ref}>
        <sphereGeometry args={[0.6, 100, 100]} />
        <meshStandardMaterial metalness={0.85} roughness={0.1} map={sphereTexture} />
      </mesh>
    </>
  );
}

export default React.memo(SphereMesh);
