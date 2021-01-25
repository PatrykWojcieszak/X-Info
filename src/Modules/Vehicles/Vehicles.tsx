import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
import SEO from "../Shared/SEO/SEO";
import { vehiclesPageTitle, vehiclesPageDescription } from "../Shared/SEO/Tags";

const Vehicles = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={vehiclesPageTitle} description={vehiclesPageDescription} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Vehicles}>
        <div className={styles.InfoContainer}>
          <h2>{t("rockets")}</h2>
          <h4>
            {t("rocketsDescriptionPart1")}{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.spacex.com/">
              SpaceX
            </a>
            {t("rocketsDescriptionPart2")}
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
    </>
  );
};

export default Vehicles;
