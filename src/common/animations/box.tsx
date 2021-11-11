import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { IBoxProps, IForMesh } from "../../data/animations";

export const Box = ({
  boxPosition,
  boxSize,
  boxColor,
  rotation,
}: IBoxProps ) => {
  const mesh: any = useRef();
  useFrame(
    () => (
      rotation.IsRotationY ?  (mesh.current.rotation.y += rotation.Y) : (mesh.current.rotation.y = rotation.Y),
      rotation.IsRotationX ?  (mesh.current.rotation.x += rotation.X) : (mesh.current.rotation.x = rotation.X)
    )
  );
  return (
    <mesh
      position={boxPosition}
      ref={mesh}
      scale={1.5}
      //   //   onClick={(event) => setActive(!active)}
      //     onClick={(event) => setActive(true)}
      //     onPointerLeave={(event)=>setActive(false)}
      //     onPointerMove={(event)=> onPointerMove(event)}
    >
      <boxGeometry args={boxSize} />
      <meshStandardMaterial color={boxColor || "white"} />
    </mesh>
  );
};
