export interface IBasicCobeProps {
  light: ILight;
  far: number;
  near: number;
}

export interface IBoxProps {
    boxColor?: string;
    boxPosition: number[];
    rotation: IRotation;
    boxSize: number[];
}

interface IRotation {
    X: number;
    Y: number;
    IsRotationX:boolean;
    IsRotationY:boolean;
}

interface ILight {
    primaryLightColor?: string;
    secondaryLightColor?: string;
    secondaryLightPosition: number[];
}

export interface IForMesh{
    mesh: any
}