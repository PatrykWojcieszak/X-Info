import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./About.module.scss";

//OTHER
import { pageVariantsAnim } from "../../Animations/Animations_motion";
import { SEO } from "../Shared";
import { aboutPageTitle, aboutPageDescription } from "../Shared/SEO/Tags";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={aboutPageTitle} description={aboutPageDescription} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.About}>
        <div className={styles.InfoContainer}>
          <h2>{t("aboutTitle")}</h2>
          <p>
            {t("aboutDescription1")}{" "}
            <a
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX
            </a>{" "}
            {t("aboutDescription2")}{" "}
            <a
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX
            </a>{" "}
            {t("aboutDescription3")}
          </p>
          <p>
            {t("aboutDescription4")}{" "}
            <a
              href="https://github.com/PatrykWojcieszak"
              target="_blank"
              rel="noopener noreferrer">
              Patryk Wojcieszak
            </a>
            {t("aboutDescription5")}
            <a
              href="https://github.com/r-spacex/SpaceX-API"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX-API
            </a>
            {t("aboutDescription6")}
          </p>
          <p>
            {t("aboutDescription7")}{" "}
            <a
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX
            </a>
            {t("aboutDescription8")}{" "}
            <a
              href="https://www.flickr.com/photos/spacex/"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX Flickr
            </a>
            .
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default About;
