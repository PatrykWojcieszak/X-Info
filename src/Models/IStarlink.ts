import ILaunch from "./ILaunch";
import ISpaceTrack from "./ISpaceTrack";

interface IStarlink {
  version: string;
  launch: ILaunch;
  longitude: number;
  latitude: number;
  height_km: number;
  velocity_kms: number;
  spaceTrack: ISpaceTrack;
}

export default IStarlink;
