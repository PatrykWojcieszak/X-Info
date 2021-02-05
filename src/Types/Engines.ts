export interface Engines {
  number: number;
  type: string;
  version: string;
  layout: string;
  isp: {
    sea_level: number;
    vacuum: number;
  };
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: {
    kN: number;
    lbf: number;
  };
  thrust_vacuum: {
    kN: number;
    lbf: number;
  };
  thrust_to_weight: number;
}
