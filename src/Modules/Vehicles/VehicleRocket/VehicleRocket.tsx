import React from "react";
import { Link } from "react-router-dom";

//STYLES
import styles from "./VehicleRocket.module.scss";

const VehicleRocket = ({ name, img, link }: vehicleRocketProps) => {
  return (
    <Link to={`/vehicles/${link}`}>
      <div className={styles.Rocket}>
        <h4>{name}</h4>
        <img src={img} alt={name} />
      </div>
    </Link>
  );
};

type vehicleRocketProps = {
  name: string;
  img: string;
  link: string;
};

export default VehicleRocket;
