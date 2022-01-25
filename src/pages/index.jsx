import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: overlaps (https://sketchfab.com/overlaps)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/91964c1ce1a34c3985b6257441efa500
title: Space exploration [WLP series #8]
*/
function Model({ url }) {
  const { nodes } = useGLTF(url)
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material} />
        <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material} />
      </group>
    </group>
  )
}

export default function App() {
  return (
    <>
      <div className="bg" />
      <h1>
        <span className="text-4xl lg:text-6xl">PixeDUCK </span>
        <span className="text-2xl lg:text-4xl">just</span>
        <br />
        <span className="text-2xl lg:text-4xl">Land to </span> 
        <span className="text-4xl lg:text-6xl">Metaverse</span>
      </h1>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={['#272730', 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight castShadow intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Model url="/scene.glb" />
        </Suspense>
        <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>
      <div className="layer" />
      <Loader />
      <a href="https://opensea.io/pixeduck" className="top-left">
        Opensea
      </a>
      <a href="https://twitter.com/PixeDUCK" className="top-right">
      Twitter
      </a>
      <p href="#" className="bottom-left">
      copyright 2022 &copy; Pixeduck &amp; pmndrs
      </p>
    </>
  )
}