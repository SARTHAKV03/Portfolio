import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useReducedMotion } from '../../hooks';
import * as THREE from 'three';

interface StarFieldProps {
  count?: number;
  radius?: number;
  depth?: number;
  color?: string;
  opacity?: number;
}

function StarField({ count = 800, radius = 100, depth = 50, color = '#ffffff', opacity = 0.6 }: StarFieldProps) {
  const reducedMotion = useReducedMotion();
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.6 + Math.random() * 0.4);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - depth / 2;
      sz[i] = Math.random() * 1.5 + 0.5;
    }
    return [pos, sz];
  }, [count, radius, depth]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, sizes]);

  useFrame((state) => {
    if (pointsRef.current && !reducedMotion) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.008;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.03;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        attach="material"
        size={0.12}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        vertexColors={false}
        toneMapped={false}
      />
    </points>
  );
}

export default StarField;
