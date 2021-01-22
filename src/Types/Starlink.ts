import { Launch } from "./Launch";
import { SpaceTrack } from "./SpaceTrack";

export interface Starlink {
  version: string;
  launch: Launch;
  longitude: number;
  latitude: number;
  height_km: number;
  velocity_kms: number;
  spaceTrack: SpaceTrack;
}
