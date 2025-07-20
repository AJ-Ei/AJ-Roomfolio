import React, { useRef, useState } from "react";
import { useSpring, a as animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";

export default function Switch(props) {
  const { nodes, materials } = useGLTF("/models/switchConsole.glb");
  const [switchConsoleActive, setSwitchConsoleActive] = useState(false);
  const { position } = useSpring({
    position: switchConsoleActive ? [0, 0.5, 0] : [0, 0, 0],
    config: { mass: 1, tension: 70, friction: 18 },
  });
  const switchConsoleClickHandler = () => {
    setSwitchConsoleActive(switchConsoleActive === false ? true : false);
  };

  return (
    <group {...props} dispose={null}>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.switch_console.geometry}
        material={materials.gadgets_color}
        position={position}
        onClick={switchConsoleClickHandler}
      />
    </group>
  );
}

useGLTF.preload("/models/switchConsole.glb");
