import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Loader,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { AnimatePresence } from "framer-motion";
import * as THREE from "three";
import "./App.css";

//3D models
import Scene from "./Scene";
import Signage from "./components/Signage";
import LoadingScreen from "./components/LoadingScreen";

//modals
import ModalWork from "./components/ModalWork";
import ModalAbout from "./components/ModalAbout";
import ModalContact from "./components/ModalContact";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // state of modal
  const [whoIsCaller, setWhoIsCaller] = useState(null); // the component who called the modal
  const soundRef = useRef();
  const [start, setStart] = useState(false);
  const [soundPlay, setSoundPlay] = useState(true);

  useEffect(() => {
    soundRef.current = new Audio("/sounds/omaewa.mp3");
    soundRef.current.volume = 0.3;
    soundRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (start && soundRef.current) {
      soundRef.current.play().catch(() => {
        console.warn("autoplay blocked");
      });
    }
  }, [start]);

  useEffect(() => {
    if (soundRef.current) soundRef.current.muted = !soundPlay;
    console.log("sound is muted");
  }, [soundPlay]);

  function modalClickHandler(modalCaller) {
    setIsModalOpen(isModalOpen === true ? false : true);
    setWhoIsCaller(modalCaller);
  }

  function modalClose() {
    setIsModalOpen(isModalOpen === true ? false : true);
  }

  function renderModal(modalCaller) {
    switch (modalCaller) {
      case "work":
        return <ModalWork closeModal={modalClose} />;
      case "about":
        return <ModalAbout closeModal={modalClose} />;
      case "contact":
        return <ModalContact closeModal={modalClose} />;
      default:
        return;
    }
  }

  return (
    <>
      <div id="canvas-container">
        <Canvas
          shadows
          gl={{
            physicallyCorrectLights: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding,
            toneMappingExposure: 0.35,
          }}
        >
          <ambientLight intensity={1.4} />
          <directionalLight
            castShadow
            position={[5, 10, 3]}
            intensity={1.2}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={1}
            shadow-camera-far={20}
            shadow-camera-left={-4}
            shadow-camera-right={4}
            shadow-camera-top={4}
            shadow-camera-bottom={-4}
            shadow-bias={-0.0005}
            shadow-radius={2}
          />

          <PerspectiveCamera
            makeDefault
            position={[-9, 4, 10]}
            fov={60}
            near={0.5}
            far={1000}
            zoom={1.2}
          />

          <OrbitControls
            enableDamping
            dampingFactor={0.1}
            minDistance={2}
            maxDistance={50}
            zoomSpeed={0.5}
            nablePan={true}
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2} 
            minAzimuthAngle={-Math.PI / 2} 
            maxAzimuthAngle={Math.PI / 4} 
          />
          <Environment files={"/models/night.hdr"} background />
          <ambientLight intensity={0.05} />
          <Suspense>
            <group position={[0, -2, 0]}>
              <Scene />
              <Signage modalClick={modalClickHandler} />
              <pointLight
                intensity={3}
                color={"#DF73FF"}
                position={[-0.1, 1.9, -1.44]}
                distance={3.5}
                decay={0.05}
              />
            </group>
          </Suspense>
        </Canvas>
        <LoadingScreen started={start} onStarted={() => setStart(true)} />
      </div>
      <AnimatePresence>
        {isModalOpen && renderModal(whoIsCaller)}
      </AnimatePresence>
      <button
        className="mute-button"
        onClick={() => setSoundPlay((prev) => !prev)}
      >
        {soundPlay ? "🔈" : "🔇"}
      </button>
    </>
  );
}

export default App;
