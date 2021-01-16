import ILaunch from "./ILaunch";

interface IBooster {
  serial: string;
  block: number;
  status: string;
  reuse_count: string;
  rtls_attempts: number;
  rtls_landings: number;
  asds_attempts: number;
  asds_landings: number;
  last_update: string;
  launches: ILaunch[];
}

export default IBooster;
