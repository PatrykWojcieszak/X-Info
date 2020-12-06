interface Rocket_model {
  name: string;
  type: string;
  active: boolean;
  stages: Number;
  boosters: Number;
  cost_per_launch: Number;
  success_rate_pct: Number;
  first_flight: string;
  country: string;
  company: string;
  height: {
    meters: Number;
    feet: Number;
  };
  diameter: {
    meters: Number;
    feet: Number;
  };
  mass: {
    kg: Number;
    lb: Number;
  };
  payload_weights: {
    type: [];
  };
  first_stage: {
    reusable: boolean;
    engines: Number;
    fuel_amount_tons: Number;
    burn_time_sec: Number;
    thrust_sea_lever: {
      kN: Number;
      lbf: Number;
    };
    thrust_vacuum: {
      kN: Number;
      lbf: Number;
    };
  };
  second_stage: {
    reusable: boolean;
    engines: Number;
    fuel_amount_tons: Number;
    burn_time_sec: Number;
    thrust: {
      kN: Number;
      lbf: Number;
    };
    payloads: {
      option_1: string;
      composite_fairing: {
        height: {
          meters: Number;
          feet: Number;
        };
        diameter: {
          meters: Number;
          feet: Number;
        };
      };
    };
  };
  engines: {
    number: Number;
    type: string;
    version: string;
    layout: string;
    isp: {
      sea_level: Number;
      vacuum: Number;
    };
    engine_loss_max: Number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: {
      kN: Number;
      lbf: Number;
    };
    thrust_vacuum: {
      kN: Number;
      lbf: Number;
    };
    thrust_to_weight: Number;
  };
  landing_legs: {
    number: Number;
    material: {};
  };
  flickr_images: [];
  wikipedia: string;
  description: string;
}

export default Rocket_model;
