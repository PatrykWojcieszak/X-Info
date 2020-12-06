interface Payload_model {
  name: string;
  type: string;
  reused: boolean;
  launch: string;
  customers: string[];
  norad_ids: [];
  nationalities: [];
  manufacturers: [];
  mass_kg: Number;
  mass_lbs: Number;
  orbit: Number;
  reference_system: string;
  regime: string;
  longitude: Number;
  semi_major_axis_km: Number;
  eccentricity: Number;
  periapsis_km: Number;
  apoapsis_km: Number;
  inclination_deg: Number;
  period_min: Number;
  lifespan_years: Number;
  epoch: string;
  mean_motion: Number;
  raan: Number;
  arg_of_pericenter: Number;
  mean_anomaly: Number;
  dragon: {
    capsule: string;
    mass_returned_kg: Number;
    mass_returned_lbs: Number;
    flight_time_sec: Number;
    manifest: string;
    water_landing: boolean;
    land_landing: boolean;
  };
}

export default Payload_model;
