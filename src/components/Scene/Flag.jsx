import { useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const Flag = () => {
  const flag = useLoader(GLTFLoader, "/flag/scene.gltf");
  const groupRef = useRef(null);
  const { actions, mixer, ref } = useAnimations(flag.animations, groupRef);
  useEffect(() => {
    actions["KeyAction"].play();
  }, []);
  return (
    <>
      <primitive
        ref={groupRef}
        scale={[0.5, 0.5, 0.5]}
        object={flag.scene}
        position={[0.75, 2, 0]}
      />
      <mesh visible position={[0, 1.5, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.01, 2, 0.01]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
    </>
  );
};

export default Flag;
