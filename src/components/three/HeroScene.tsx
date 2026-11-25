import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Text } from '@react-three/drei';
import { useReducedMotion } from '../../hooks';
import * as THREE from 'three';
import StarField from './StarField';
import { isWebGLSupported } from '../../utils/webgl';

function MouseParallax({ children }: { children: React.ReactNode }) {
  const { camera } = useThree();
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (reducedMotion) return;
    const { pointer } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.3, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.15 + 0.3, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return <>{children}</>;
}

const techIcons: { name: string; color: number; position: [number, number, number] }[] = [
  { name: 'React', color: 0x61dbfb, position: [-2.5, 0.5, 0] },
  { name: 'TS', color: 0x3178c6, position: [2.5, 0.5, 0] },
  { name: 'Node', color: 0x68a063, position: [-2.5, -0.8, -1] },
  { name: 'Py', color: 0xffd43b, position: [2.5, -0.8, -1] },
  { name: 'PostgreSQL', color: 0x336791, position: [0, 1.5, -0.5] },
  { name: 'Git', color: 0xf05032, position: [0, -1.5, -1.5] },
  { name: 'Sol', color: 0x627eec, position: [3.5, -0.2, -0.5] },
  { name: 'IPFS', color: 0x7065ff, position: [-3.5, -0.2, -0.5] },
];

function FloatingIcons() {
  const groupRef = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {techIcons.map((tech) => (
        <Float key={tech.name} speed={2 + Math.random()} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh position={tech.position} scale={0.5}>
            <icosahedronGeometry args={[1, 2]} />
            <MeshDistortMaterial
              color={tech.color}
              distort={0.2}
              speed={1.5}
              roughness={0.3}
              metalness={0.8}
              transparent
              opacity={0.8}
            />
          </mesh>
          <Text
            position={[tech.position[0], tech.position[1] - 0.8, tech.position[2]]}
            fontSize={0.18}
            color={tech.color}
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff"
          >
            {tech.name}
          </Text>
        </Float>
      ))}
    </group>
  );
}

function GlowingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={[0, -0.5, -1]}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.6, 2]} />
          <meshStandardMaterial
            color={0xb8783a}
            emissive={0xb8783a}
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>
        <pointLight position={[0, 0, 0.1]} intensity={0.8} color="#b8783a" distance={2} decay={2} />
      </group>
    </Float>
  );
}

function Scene() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#c9a962" />
      <pointLight position={[-5, -3, -3]} intensity={0.4} color="#b8783a" />
      <spotLight position={[0, 8, 5]} angle={0.5} penumbra={1} intensity={0.5} color="#b87333" />

      <StarField count={600} radius={80} depth={50} color="#888888" opacity={0.5} />

      {!reducedMotion && <MouseParallax><FloatingIcons /><GlowingOrb /></MouseParallax>}

      {!reducedMotion && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.1}
        />
      )}
    </>
  );
}

function CssBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 dot-grid" />
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-accent/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.1,
            animation: `pulse-slow ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroScene() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());
  }, []);

  if (!webglSupported) {
    return (
      <div className="absolute inset-0 -z-10">
        <CssBackground />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#121212']} />
        <Scene />
      </Canvas>
    </div>
  );
}
