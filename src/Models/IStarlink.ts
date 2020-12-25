import ISpaceTrack from "./ISpaceTrack";

interface IStarlink {
  version: string;
  launch: string;
  longitude: number;
  latitude: number;
  height_km: number;
  velocity_kms: number;
  spaceTrack: ISpaceTrack;
}

export default IStarlink;
