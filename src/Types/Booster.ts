import { Launch } from "./Launch";

export interface Booster {
  serial: string;
  block: number;
  status: string;
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  asds_attempts: number;
  asds_landings: number;
  last_update: string;
  launches: Launch[];
}
