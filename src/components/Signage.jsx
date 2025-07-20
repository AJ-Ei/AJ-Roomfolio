import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, a as animated } from "@react-spring/three";

function SignWork(props) {
  const { nodes, materials } = useGLTF("/models/signWork.glb");
  const [hovered, setHovered] = useState(false);
  const modalCaller = "work";
  const { rotation, scale } = useSpring({
    scale: hovered ? [1.25, 1.25, 1] : [1, 1, 1],
    rotation: hovered ? [0, 0, -Math.PI / 16] : [0, 0, 0],
    config: { mass: 1, tension: 300, friction: 20 },
  });

  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={nodes.signage_work.geometry}
      material={materials.signage}
      position={[-2.315, 2.536, -1.567]}
      //animation
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMissed={() => {
        setHovered(false);
      }}
      onClick={() => props.sWork(modalCaller)}
    />
  );
}
useGLTF.preload("/models/signWork.glb");

function SignAbout(props) {
  const { nodes, materials } = useGLTF("/models/signAbout.glb");
  const [hovered, setHovered] = useState(false);
  const modalCaller = "about";
  const { rotation, scale } = useSpring({
    scale: hovered ? [1.25, 1.25, 1] : [1, 1, 1],
    rotation: hovered ? [0, 0, Math.PI / 16] : [0, 0, 0],
    config: { mass: 1, tension: 300, friction: 20 },
  });

  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={nodes.signage_about.geometry}
      material={materials.signage}
      position={[-2.315, 2.115, -1.567]}
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMissed={() => setHovered(false)}
      onClick={() => props.sAbout(modalCaller)}
    />
  );
}
useGLTF.preload("/models/signAbout.glb");

function SignContact(props) {
  const { nodes, materials } = useGLTF("/models/signContact.glb");
  const [hovered, setHovered] = useState(false);
  const modalCaller = "contact";
  const { rotation, scale } = useSpring({
    scale: hovered ? [1.25, 1.25, 1] : [1, 1, 1],
    rotation: hovered ? [0, 0, -Math.PI / 16] : [0, 0, 0], 
    config: { mass: 1, tension: 300, friction: 20 },
  });

  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={nodes.signage_contact.geometry}
      material={materials.signage}
      position={[-2.315, 1.685, -1.567]}
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMissed={() => setHovered(false)}
      onClick={() => {
        props.sContact(modalCaller);
      }}
    />
  );
}
useGLTF.preload("/models/signContact.glb");

export default function Signage(props) {
  return (
    <group>
      <SignWork sWork={props.modalClick} />
      <SignAbout sAbout={props.modalClick} />
      <SignContact sContact={props.modalClick} />
    </group>
  );
}
