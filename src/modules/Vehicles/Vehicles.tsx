import React from "react";

import VehicleRocket from "./VehicleRocket/VehicleRocket";

import styles from "./Vehicles.module.scss";

import falcon1 from "../../resources/images/f1.png";
import falcon9 from "../../resources/images/f9.png";
import falconHeavy from "../../resources/images/fh2.png";
import starship from "../../resources/images/st.png";

const Vehicles = () => {
  return (
    <div className={styles.Vehicles}>
      <div className={styles.InfoContainer}>
        <h2>ROCKETS</h2>
        <h4>
          Rockets that are shown below were created by SpaceX. Proportions
          between rockets are somewhat accurate. Click on the rocket to learn
          more about it.
        </h4>
      </div>

      <VehicleRocket name="Falcon 1" img={falcon1} />
      <VehicleRocket name="Falcon 9" img={falcon9} />
      <VehicleRocket name="Falcon Heavy" img={falconHeavy} />
      <VehicleRocket name="Starship" img={starship} />
    </div>
  );
};

export default Vehicles;