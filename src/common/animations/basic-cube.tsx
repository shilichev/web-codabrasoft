import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { IBasicCobeProps, IBoxProps, IForMesh } from "../../data/animations";
import React from "react";
import { Box } from "./box";
const BasicCube = ({
  far,
  near,
  light,
  boxPosition,
  rotation,
  boxSize,
  boxColor,
}: IBasicCobeProps & IBoxProps) => {
  const [active, setActive] = useState(false);
  return (
    <Canvas camera={{ far: far, near: near, top:100, right:100, left:100, bottom:100 }} orthographic={true}>
      <ambientLight color={light.primaryLightColor || "gray"} />
      <directionalLight
        position={light.secondaryLightPosition}
        color={light.secondaryLightColor || "white"}
      />
      <Box
        boxPosition={boxPosition}
        rotation={rotation}
        boxSize={boxSize}
        boxColor={boxColor}
      ></Box>
    </Canvas>
  );
};

export default BasicCube;
