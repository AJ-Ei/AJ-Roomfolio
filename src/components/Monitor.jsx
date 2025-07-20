import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";
import { useVideoTexture, useGLTF, useHelper } from "@react-three/drei";
import { useState, useRef } from "react";

const DEFAULT_VIDEO = "/videos/mambo.webm";

function VideoPlane({ src, width, height, position, rotation }) {
  const texture = useVideoTexture(src, {
    loop: true,
    autoplay: true,
    muted: true,
    crossOrigin: "Anonymous",
  });
  useFrame(() => (texture.needsUpdate = true));

  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, 1);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        map={texture}
        toneMapped={false}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

export default function Monitor(props) {
  const { nodes, materials } = useGLTF("/models/monitor.glb");
  const [stream, setStream] = useState("/videos/train.webm");
  const [stream2, setStream2] = useState("/videos/wind_chime.webm"); //for using external video link i.e Movies
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor_interact.geometry}
        material={materials.room_static}
      ></mesh>
      <VideoPlane
        src={stream2 || DEFAULT_VIDEO}
        width={0.512}
        height={0.8401464223861694}
        position={[0.605, 1.762, -1.26]}
        rotation={[0, -0.1397, 0]}
      />
      <VideoPlane
        src={stream || DEFAULT_VIDEO}
        width={0.893}
        height={0.51}
        position={[-0.195, 1.783, -1.292]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/monitor.glb");
