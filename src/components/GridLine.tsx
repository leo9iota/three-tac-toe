import React, { JSX } from 'react';

type GridLineProps = JSX.IntrinsicElements['mesh'];

function GridLine(props: GridLineProps) {
  return (
    <mesh {...props}>
      <boxGeometry args={[0.05, 7, 0.15]} />
      <meshStandardMaterial metalness={1} roughness={0.1} color={0x75aec4} />
    </mesh>
  );
}

export default React.memo(GridLine);
