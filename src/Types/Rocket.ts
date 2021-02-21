import { Engines } from "./Engines";
import { FirstStage } from "./FirstStage";
import { LandingLegs } from "./LandingLegs";
import { Length } from "./Length";
import { Mass } from "./Mass";
import { PayloadWeights } from "./PayloadWeights";
import { SecondStage } from "./SecondStage";

export enum RocketType {
  f1 = "5e9d0d95eda69955f709d1eb",
  f9 = "5e9d0d95eda69973a809d1ec",
  fh = "5e9d0d95eda69974db09d1ed",
  starship = "5e9d0d96eda699382d09d1ee",
}

export interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: Length;
  diameter: Length;
  mass: Mass;
  payload_weights: PayloadWeights[];
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  flickr_images: [];
  wikipedia: string;
  description: string;
}
