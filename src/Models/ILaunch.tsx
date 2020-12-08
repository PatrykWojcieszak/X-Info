import ICore from "./ICore";
import ICrew from "./ICrew";
import IFailure from "./IFailure";
import ILaunchpad from "./ILaunchpad";
import IPayload from "./IPayload";
import IRocket from "./IRocket";
import IShip from "./IShip";

interface ILaunch {
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
  rocket: IRocket;
  success: boolean;
  failures: IFailure[];
  upcoming: boolean;
  details: string;
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: [];
  };
  crew: ICrew[];
  ships: IShip[];
  capsules: [];
  payloads: IPayload[];
  launchpad: ILaunchpad;
  cores: ICore[];
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string;
      launch: string;
      media: string;
      recovery: string;
    };
    flickr: {
      small: [];
      original: [];
    };
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  auto_update: boolean;
}

export default ILaunch;
