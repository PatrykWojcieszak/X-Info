import React from "react";
import { motion } from "framer-motion";

//COMPONENTS
import VehicleRocket from "./VehicleRocket/VehicleRocket";

//STYLES
import styles from "./Vehicles.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//IMAGES
import falcon1 from "../../resources/images/f1.png";
import falcon9 from "../../resources/images/f9.png";
import falconHeavy from "../../resources/images/fh2.png";
import starship from "../../resources/images/st.png";

const Vehicles = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.Vehicles}>
      <div className={styles.InfoContainer}>
        <h2>ROCKETS</h2>
        <h4>
          Rockets that are shown below were created by SpaceX. Proportions
          between rockets are somewhat accurate. Click on the rocket to learn
          more about it.
        </h4>
      </div>

      <VehicleRocket name="Falcon 1" img={falcon1} link="Falcon 1" />
      <VehicleRocket name="Falcon 9" img={falcon9} link="Falcon 9" />
      <VehicleRocket
        name="Falcon Heavy"
        img={falconHeavy}
        link="Falcon Heavy"
      />
      <VehicleRocket name="Starship" img={starship} link="Starship" />
    </motion.div>
  );
};

export default Vehicles;
