"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function FoamBubbles({ count = 48 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const data = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        Math.random() * 6 - 1,
        (Math.random() - 0.5) * 6,
      ),
      speed: 0.15 + Math.random() * 0.35,
      drift: (Math.random() - 0.5) * 0.2,
      scale: 0.04 + Math.random() * 0.12,
      phase: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    data.forEach((d, i) => {
      const y = ((d.position.y + t * d.speed) % 7) - 1.5;
      const x = d.position.x + Math.sin(t * 0.6 + d.phase) * d.drift;
      dummy.position.set(x, y, d.position.z);
      const s = d.scale * (0.85 + Math.sin(t * 2 + d.phase) * 0.15);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color="#f5f7fa"
        transparent
        opacity={0.45}
        roughness={0.15}
        metalness={0.05}
        emissive="#ffffff"
        emissiveIntensity={0.08}
      />
    </instancedMesh>
  );
}

function Droplets({ count = 36 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const data = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 5,
      speed: 0.8 + Math.random() * 1.4,
      delay: Math.random() * 4,
      scale: 0.02 + Math.random() * 0.04,
    }));
  }, [count]);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    data.forEach((d, i) => {
      const cycle = ((t * d.speed + d.delay) % 5);
      const y = 3.5 - cycle * 1.4;
      dummy.position.set(d.x, y, d.z);
      dummy.scale.set(d.scale, d.scale * 1.8, d.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#7ec8ff"
        transparent
        opacity={0.55}
        roughness={0.1}
        metalness={0.3}
        emissive="#3a9fff"
        emissiveIntensity={0.2}
      />
    </instancedMesh>
  );
}

function TurbineMark() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.35;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={group} position={[2.8, 0.6, -1]} scale={1.15}>
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <group key={i} rotation={[0, 0, angle]}>
              <mesh position={[0, 0.42, 0]}>
                <boxGeometry args={[0.14, 0.72, 0.05]} />
                <meshStandardMaterial
                  color="#c8ccd2"
                  metalness={0.85}
                  roughness={0.25}
                  emissive="#f0d000"
                  emissiveIntensity={0.06}
                />
              </mesh>
            </group>
          );
        })}
        <mesh>
          <torusGeometry args={[0.55, 0.03, 12, 48]} />
          <meshStandardMaterial color="#f0d000" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 2]} intensity={1.2} color="#f0d000" />
      <pointLight position={[-3, 2, 3]} intensity={0.6} color="#7ec8ff" />
      <FoamBubbles />
      <Droplets />
      <TurbineMark />
      <Sparkles
        count={40}
        scale={[10, 6, 6]}
        size={2}
        speed={0.3}
        opacity={0.35}
        color="#f0d000"
      />
    </>
  );
}

type Props = {
  className?: string;
  density?: "low" | "high";
};

export function WashScene3D({ className = "", density = "high" }: Props) {
  const isLow = density === "low";

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
          {isLow ? null : null}
        </Suspense>
      </Canvas>
    </div>
  );
}
