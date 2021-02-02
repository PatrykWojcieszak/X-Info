import { Core } from "./Core";
import { Crew } from "./Crew";
import { Failure } from "./Failure";
import { Launchpad } from "./Launchpad";
import { Links } from "./Links";
import { Payload } from "./Payload";
import { Rocket } from "./Rocket";
import { Ship } from "./Ship";

export interface Launch {
  id: string;
  flight: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  flight_number: number;
  date_precision: string;
  static_fire_date_utc: string;
  static_fire_date_unix: string;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: Rocket;
  success: boolean;
  failures: Failure[];
  upcoming: boolean;
  details: string;
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: [];
  };
  crew: Crew[];
  ships: Ship[];
  capsules: [];
  payloads: Payload[];
  launchpad: Launchpad;
  cores: Core[];
  links: Links;
  auto_update: boolean;
}
