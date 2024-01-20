import React, { Suspense, useContext, useEffect } from "react";
import styles from "./index.module.scss";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useAnimations,
  useProgress,
} from "@react-three/drei";
import { Model } from "../Scene";
import Flag from "../Scene/Flag";
import { SearchContext } from "../../context/SearchContext/SearchContext";

const Space = () => {
  const { progress } = useProgress();
  const { loadingScreen, setLoadingScreen } = useContext(SearchContext);

  useEffect(() => {
    if (progress == 100 && loadingScreen) {
      setLoadingScreen(false);
    }
  }, [progress]);

  return (
    <div className={styles.spaceWrapper}>
      <Canvas
        shadows
        camera={{
          position: [0, 0, 5],
          rotation: [0, 0, 0],
          near: 1,
          far: 40,
        }}
      >
        <ambientLight intensity={2} />
        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
        <Suspense fallback={null}>
          <group
            scale={[0.9, 0.9, 0.9]}
            position={[0, 0, 0]}
            rotation={[0.35, 0, 0]}
          >
            <Flag />
            <Model />
          </group>
          <ContactShadows
            opacity={0.5}
            position={[0, -1.3, 0]}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Space;
