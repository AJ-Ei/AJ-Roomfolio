import React, { useEffect, useState } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Tablet(props) {
  const { nodes, materials } = useGLTF("/models/tablet.glb");
  const videoSrc = "/videos/miku_tablet.webm";
  const texture = useVideoTexture(videoSrc, {
    loop: true,
    autoplay: false,
    muted: false,
    crossOrigin: "Anonymous",
  });
  useFrame(() => (texture.needsUpdate = true));
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);

  const videoEle = texture?.source?.data;
  const [unMuted, setUnmuted] = useState(false);

  useEffect(() => {
    if (unMuted && videoEle) {
      videoEle.muted = false;
      videoEle.play().catch(() => {
        console.warn("autoplay blocked");
      });
    } else {
      videoEle.muted = false;
      videoEle.pause();
    }
  }, [unMuted, videoEle]);

  function tabletclick() {
    setUnmuted(unMuted === false ? true : false);
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tablet_interact.geometry}
        material={materials.pictures_combined}
        position={[1.295, 1.304, 0.374]}
        rotation={[0, 0, -0.6]}
        onClick={tabletclick}
      >
        <mesh rotation={[0, [-Math.PI / 2], 0]}>
          <planeGeometry args={[0.489, 0.36]} />
          <meshStandardMaterial map={texture} toneMapped={false} />
        </mesh>
      </mesh>
    </group>
  );
}
useGLTF.preload("/models/tablet.glb");
