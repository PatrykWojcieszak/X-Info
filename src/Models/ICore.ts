import ILandpad from "./ILandpads";

interface ICore {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: ILandpad;
}

export default ICore;