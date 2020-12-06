interface IPayload {
  name: string;
  type: string;
  reused: boolean;
  launch: string;
  customers: string[];
  norad_ids: [];
  nationalities: [];
  manufacturers: [];
  mass_kg: number;
  mass_lbs: number;
  orbit: number;
  reference_system: string;
  regime: string;
  longitude: number;
  semi_major_axis_km: number;
  eccentricity: number;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: number;
  lifespan_years: number;
  epoch: string;
  mean_motion: number;
  raan: number;
  arg_of_pericenter: number;
  mean_anomaly: number;
  dragon: {
    capsule: string;
    mass_returned_kg: number;
    mass_returned_lbs: number;
    flight_time_sec: number;
    manifest: string;
    water_landing: boolean;
    land_landing: boolean;
  };
}

export default IPayload;
