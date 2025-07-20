import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Base(props) {
  const { nodes, materials } = useGLTF('/models/island_base.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.room_static_shadow002.geometry}
        material={materials.Island_base}
      />
    </group>
  )
}

useGLTF.preload('/models/island_base.glb')