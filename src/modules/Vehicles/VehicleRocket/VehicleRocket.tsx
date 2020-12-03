import React from "react";

import styles from "./VehicleRocket.module.scss";

const VehicleRocket = ({ name, img }: vehicleRocketProps) => {
  return (
    <div className={styles.Rocket}>
      <h4>{name}</h4>
      <img src={img} alt={name} />
    </div>
  );
};

type vehicleRocketProps = {
  name: string;
  img: string;
};

export default VehicleRocket;
