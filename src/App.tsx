import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei'; // Import orbital controls from drei
import space from './assets/space.hdr'; // Import background image

const App = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          position: [-10, -5, -15],
          rotation: [Math.PI, 0, 0],
        }}
      >
        <OrbitControls maxDistance={40} enableDamping />

        {/* add lighting */}
        <ambientLight />
        <pointLight position={[-150, 300, -300]} intensity={0.9} />

        <Environment background={true} files={space} />
      </Canvas>
    </>
  );
};

export default React.memo(App);
