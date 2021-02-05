export interface SecondStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: {
    kN: number;
    lbf: number;
  };
  payloads: {
    option_1: string;
    composite_fairing: {
      height: {
        meters: number;
        feet: number;
      };
      diameter: {
        meters: number;
        feet: number;
      };
    };
  };
}
