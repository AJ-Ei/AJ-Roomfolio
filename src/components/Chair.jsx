import React, { useRef, useState } from "react";
import { useSpring, a as animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";

export function Chair(props) {
  const { nodes, materials } = useGLTF("/models/cuteChair.glb");
  const [chairBodyRotateCount, setChairBodyRotateCount] = useState(0);
  const { rotation } = useSpring({
    rotation: [0, (chairBodyRotateCount * Math.PI) / 4, 0],
    config: { mass: 1, tension: 170, friction: 26 },
  });
  return (
    <group {...props} dispose={null}>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_body_interact.geometry}
        material={materials.room_static}
        position={[0.261, 0.535, -0.101]}
        rotation={rotation}
        onClick={(e) => {
          setChairBodyRotateCount((c) => c + 1);
          e.stopPropagation();
        }}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_base_interact.geometry}
        material={materials.room_static}
        position={[0.225, 0.497, -0.092]}
      />
    </group>
  );
}

useGLTF.preload("/cuteChair.glb");
