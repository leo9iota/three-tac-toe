import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei'; // Import orbital controls from drei
import GridLine from './components/GridLine';
import space from './assets/hdri/space.hdr'; // Import background image

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

        {/* create grid */}
        <GridLine position={[2.5, 0, 0]} />
        <GridLine position={[0, 0, 0]} />
        <GridLine position={[1.2, -1.2, 0]} rotation={[0, 0, Math.PI / 2]} />
        <GridLine position={[1.2, 1.2, 0]} rotation={[0, 0, Math.PI / 2]} />
      </Canvas>
    </>
  );
};

export default React.memo(App);
