import Launchpad_model from "../Launchpad/Launchpad_model";
import Payload_model from "../Payload/Payload_model";
import Rocket_model from "../Rocket/Rocket_model";
interface Launch_model {
  flight: Number;
  name: string;
  date_utc: string;
  date_unix: Number;
  date_local: string;
  flight_number: Number;
  date_precision: string;
  static_fire_date_utc: string;
  static_fire_date_unix: string;
  tdb: boolean;
  net: boolean;
  window: Number;
  rocket: Rocket_model;
  success: boolean;
  failures: [{ time: Number; altitude: Number; reason: string }];
  upcoming: boolean;
  details: string;
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: [];
  };
  crew: [];
  ships: [];
  capsules: [];
  payloads: Payload_model[];
  launchpad: Launchpad_model;
  cores: [
    {
      core: string;
      flight: Number;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      landing_attempt: boolean;
      landing_success: boolean;
      landing_type: string;
      landpad: string;
    }
  ];
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

export default Launch_model;
