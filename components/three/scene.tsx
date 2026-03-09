"use client"

import { Canvas } from '@react-three/fiber'
import { Environment, Float, Stars, PerspectiveCamera, Html } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Dumbbell({ position, rotation, scale = 1 }: { position: [number, number, number], rotation?: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {/* Handle */}
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 1.5, 16]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Left Weight Inner */}
        <mesh position={[-0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.25, 0.25, 0.15, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Left Weight Outer */}
        <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 32]} />
          <meshStandardMaterial color="#b8860b" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Right Weight Inner */}
        <mesh position={[0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.25, 0.25, 0.15, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Right Weight Outer */}
        <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 32]} />
          <meshStandardMaterial color="#b8860b" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

function Barbell({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {/* Long Bar */}
        <mesh>
          <cylinderGeometry args={[0.04, 0.04, 4, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Left Plates */}
        <mesh position={[-1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.5, 0.5, 0.08, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.15} />
        </mesh>
        <mesh position={[-1.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.08, 32]} />
          <meshStandardMaterial color="#c4a030" metalness={0.85} roughness={0.15} />
        </mesh>
        <mesh position={[-1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.08, 32]} />
          <meshStandardMaterial color="#b8860b" metalness={0.85} roughness={0.15} />
        </mesh>
        {/* Right Plates */}
        <mesh position={[1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.5, 0.5, 0.08, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.15} />
        </mesh>
        <mesh position={[1.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.08, 32]} />
          <meshStandardMaterial color="#c4a030" metalness={0.85} roughness={0.15} />
        </mesh>
        <mesh position={[1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.08, 32]} />
          <meshStandardMaterial color="#b8860b" metalness={0.85} roughness={0.15} />
        </mesh>
      </group>
    </Float>
  )
}

function Kettlebell({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Body */}
        <mesh position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.2} />
        </mesh>
        {/* Flat Bottom */}
        <mesh position={[0, -0.55, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} />
          <meshStandardMaterial color="#b8860b" metalness={0.85} roughness={0.2} />
        </mesh>
        {/* Handle */}
        <mesh position={[0, 0.3, 0]}>
          <torusGeometry args={[0.2, 0.06, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

function WeightPlate({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.4}>
      <mesh position={position} scale={scale}>
        <torusGeometry args={[0.5, 0.15, 16, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.15} />
      </mesh>
    </Float>
  )
}

function GoldParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 100
  
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#d4af37" transparent opacity={0.6} />
    </points>
  )
}

function SceneContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.8} color="#d4af37" />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <GoldParticles />
      
      {/* Floating Equipment */}
      <Dumbbell position={[-3, 1.5, -2]} rotation={[0.3, 0.5, 0.2]} scale={0.8} />
      <Dumbbell position={[3.5, -1, -1]} rotation={[-0.2, -0.3, 0.1]} scale={0.6} />
      <Barbell position={[0, 2.5, -4]} />
      <Kettlebell position={[-4, -1.5, -1]} scale={0.7} />
      <Kettlebell position={[4, 1, -2]} scale={0.5} />
      <WeightPlate position={[-2, -2, -2]} scale={0.6} />
      <WeightPlate position={[2.5, 2, -3]} scale={0.4} />
      
      <Environment preset="night" />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}

export function FloatingEquipmentScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#d4af37" />
          <Stars radius={50} depth={30} count={500} factor={3} saturation={0} fade speed={0.5} />
          <Dumbbell position={[2, 0, 0]} scale={0.5} />
          <WeightPlate position={[-2, 0, 0]} scale={0.4} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}
