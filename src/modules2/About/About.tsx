import { motion } from "framer-motion";
import React from "react";

//STYLES
import styles from "./About.module.scss";

//OTHER
import { pageVariantsAnim } from "../../Animations/Animations_motion";

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.About}>
      <div className={styles.InfoContainer}>
        <h2>ABOUT</h2>
        <p>
          This website is a fun project from{" "}
          <a
            href="https://www.spacex.com/"
            target="_blank"
            rel="noopener noreferrer">
            SpaceX
          </a>{" "}
          fan for{" "}
          <a
            href="https://www.spacex.com/"
            target="_blank"
            rel="noopener noreferrer">
            SpaceX
          </a>{" "}
          fans. Website provides countdown timer for next launch, previous and
          as well upcoming launches and also information about SpaceX vehicles
          such as rockets, ships etc.
        </p>
        <p>
          This website was developed and is maintained by{" "}
          <a
            href="https://github.com/PatrykWojcieszak"
            target="_blank"
            rel="noopener noreferrer">
            Patryk Wojcieszak
          </a>
          . Data for this site is provided by{" "}
          <a
            href="https://github.com/r-spacex/SpaceX-API"
            target="_blank"
            rel="noopener noreferrer">
            SpaceX-API
          </a>
          . If you’re intrested in source code and/or contributing to this
          project, check my <span>github page</span>.
        </p>
        <p>
          The creator of this website has no affiliation with{" "}
          <a
            href="https://www.spacex.com/"
            target="_blank"
            rel="noopener noreferrer">
            SpaceX
          </a>
          . The content on the website is for educational purposes only. Photos
          used on this website are property of SpaceX and can be found on the{" "}
          <a
            href="https://www.flickr.com/photos/spacex/"
            target="_blank"
            rel="noopener noreferrer">
            SpaceX Flickr Page
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
};

export default About;
