import React, { useRef, useState, useEffect } from "react";
import { useSpring, a as animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";

function GlassMaterial() {
  return (
    <meshBasicMaterial
      transparent
      opacity={0.1}
      depthTest={true}
      depthWrite={false}
      side={THREE.DoubleSide}
      alphaTest={0.1}
      toneMapped={false}
    />
  );
}

function InteractChillerDoor(props) {
  const [doorOpen, setDoorOpen] = useState(false);
  const soundA = useRef();
  const soundB = useRef();
  const [toggle, setToggle] = useState(0);

  const soundOpen = "/sounds/door_open.mp3";
  const soundClose = "/sounds/door_close.mp3";

  const { rotation } = useSpring({
    rotation: !doorOpen ? [0, 0, 0] : [0, -Math.PI / 2, 0],
    config: { mass: 1, tension: 130, friction: 30 },
  });
  const doorClickHanlder = (e) => {
    setDoorOpen(doorOpen === false ? true : false);
    let ref = toggle === 0 ? soundA : soundB;
    if (ref.current) {
      ref.current.stop();
      ref.current.play();
    }
    setToggle((t) => 1 - t);
  };
  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={props.geomParent}
      material={props.material}
      position={[1.058, 0.681, 0.813]}
      rotation={rotation}
      onClick={(e) => {
        doorClickHanlder();
        e.stopPropagation();
      }}
    >
      <mesh castShadow receiveShadow geometry={props.geomChild}>
        <PositionalAudio
          ref={soundA}
          url={soundOpen}
          autoplay={false}
          loop={false}
          distance={3}
        />
        <PositionalAudio
          ref={soundB}
          url={soundClose}
          autoplay={false}
          loop={false}
          distance={3}
        />
        <GlassMaterial />
      </mesh>
    </animated.mesh>
  );
}

function InteractWindow(props) {
  const [windowUp, setWindowUp] = useState(false);
  const soundRef = useRef();
  const soundUrl = "/sounds/chest2.mp3";
  const { position } = useSpring({
    position: !windowUp ? [-0.005, 0.016, 0] : [-0.005, 0.5, 0],
    config: { mass: 1, tension: 70, friction: 15 },
  });
  const windowClickHandler = () => {
    setWindowUp(windowUp === false ? true : false);
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.play();
    }
  };

  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={props.geomParent}
      material={props.material}
      position={position}
      onClick={windowClickHandler}
    >
      <mesh castShadow receiveShadow geometry={props.geomChild}>
        <PositionalAudio
          ref={soundRef}
          url={soundUrl}
          autoplay={false}
          loop={false}
          distance={0.2}
        />
        <GlassMaterial />
      </mesh>
    </animated.mesh>
  );
}

function InteractDrawer(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const soundRef = useRef();
  const soundUrl = "/sounds/drawer_open.mp3";
  const { position } = useSpring({
    position: drawerOpen ? [0, 0, 0.5] : [0, 0, 0],
    config: { mass: 1, tension: 70, friction: 24 },
  });
  const drawerClickHanlder = () => {
    setDrawerOpen(drawerOpen === false ? true : false);
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.play();
    }
  };
  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={props.geomParent}
      material={props.material}
      onClick={drawerClickHanlder}
      position={position}
    >
      <PositionalAudio
        ref={soundRef}
        url={soundUrl}
        autoplay={false}
        loop={false}
        distance={3}
      />
    </animated.mesh>
  );
}

function InteractKeeb(props) {
  const soundRef = useRef();
  const soundUrl = "/sounds/keeb_typing.mp3";
  const keebHandleClick = () => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.play();
    }
  };
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={props.geomParent}
      material={props.material}
      onClick={keebHandleClick}
    >
      <PositionalAudio
        ref={soundRef}
        url={soundUrl}
        autoplay={false}
        loop={false}
        distance={2.5}
      />
    </mesh>
  );
}

function InteractHeadset(props) {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={props.geomParent}
      material={props.material}
    />
  );
}

function InteractPenRed(props) {
  <mesh
    castShadow
    receiveShadow
    geometry={props.geomParent}
    material={props.material}
  />;
}

function InteractPenCyan() {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.pen_cyan_interact.geometry}
      material={materials.stationary_set_color}
    />
  );
}

function InteractTablet(props) {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={props.geomParent}
      material={props.material}
    />
  );
}

export default function Room(props) {
  const { nodes, materials } = useGLTF("/models/isoRoom.glb");
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cute_speaker.geometry}
          material={materials.gadgets_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.table_glossy.geometry}
          material={materials.white_gloss}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.room_static_shadow.geometry}
          material={materials.room_static}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle155.geometry}
          material={materials.pc_combinedv2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_static_shadow.geometry}
          material={materials.ash_wood_simple}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.soda_blue.geometry}
          material={materials.soda_blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle165.geometry}
          material={materials.pictures_combined}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plant_shadow.geometry}
          material={materials.pictures_combined}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder195.geometry}
          material={materials.stationary_set_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_glass_up.geometry}
          //material={materials.alpha_glass}
        >
          <GlassMaterial />
        </mesh>
      </group>

      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boxes_interact.geometry}
          material={materials.stationary_set_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.soda_pink_single.geometry}
          material={materials.soda_pink}
        />

        <InteractPenRed
          geomParent={nodes.pen_red_interact.geometry}
          material={materials.stationary_set_color}
        />
        <InteractHeadset
          geomParent={nodes.headset_interact.geometry}
          material={materials.gadgets_color}
        />
        <InteractKeeb
          geomParent={nodes.keeb_interact.geometry}
          material={materials.gadgets_color}
        />
        <InteractDrawer
          geomParent={nodes.drawer_interact.geometry}
          material={materials.room_static}
        />
        <InteractWindow
          geomParent={nodes.window_frame_interact002.geometry}
          geomChild={nodes.window_glass_interact002.geometry}
          material={materials.ash_wood_simple}
        />
        <InteractChillerDoor
          geomParent={nodes.chiller_door_interact002.geometry}
          geomChild={nodes.chiller_glass003.geometry}
          material={materials.room_static}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane359.geometry}
          material={materials.Desk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane359_1.geometry}
          material={materials.wood_dark}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/isoRoom.glb");
