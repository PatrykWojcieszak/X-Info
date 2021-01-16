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
}
