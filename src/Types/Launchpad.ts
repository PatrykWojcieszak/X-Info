export enum Launchpads {
  "KSC LC 39A" = "5e9e4502f509094188566f88",
  "VAFB SLC 4E" = "5e9e4502f509092b78566f87",
  "Kwajalein Atoll" = "5e9e4502f5090995de566f86",
  "STLS" = "5e9e4502f5090927f8566f85",
  "CCSFS SLC 40" = "5e9e4501f509094ba4566f84",
  "VAFB SLC 3W" = "5e9e4501f5090910d4566f83",
}
export interface Launchpad {
  name: string;
  full_name: string;
  status: string;
  locality: string;
  region: string;
  timezone: string;
  latitude: string;
  longitude: string;
  launch_attempts: number;
  launch_success: number;
  rockets: [];
  launches: [];
  id: string;
}
