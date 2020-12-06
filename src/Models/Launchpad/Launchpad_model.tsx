interface Launchpad_model {
  name: string;
  full_name: string;
  status: string;
  locality: string;
  region: string;
  timezone: string;
  latitude: string;
  longitude: string;
  launch_attempts: Number;
  launch_success: Number;
  rockets: [];
  launches: [];
}

export default Launchpad_model;
