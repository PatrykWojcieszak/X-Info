import ILaunch from "./ILaunch";

interface IGlobePoint {
  lat: number;
  lng: number;
  alt: number;
  radius: number;
  color: string;
  label: string;
  version: string;
  velocity_kms: number;
  height_km: number;
  launch: ILaunch;
}

export default IGlobePoint;
