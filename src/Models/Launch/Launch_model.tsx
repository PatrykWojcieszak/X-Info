import Fairings_model from "./Fairings_model";

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
  rocket: string;
  success: boolean;
  failures: [{ time: Number; altitude: Number; reason: string }];
  upcoming: boolean;
  details: string;
  fairings: Fairings_model;
  crew: [];
  ships: [];
  capsules: [];
  payloads: [];
  launchpad: string;
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
