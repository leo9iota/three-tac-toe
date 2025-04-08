import React, { JSX } from 'react';

// Use the same props as a native <mesh> element from React Three Fiber for full type safety and autocompletion
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
