import React from "react";

//STYLES
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h3>
        Created by:{" "}
        <a
          href="https://github.com/PatrykWojcieszak"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          Patryk Wojcieszak
        </a>{" "}
        using{" "}
        <a
          href="https://github.com/r-spacex/SpaceX-API"
          target="_blank"
          rel="noopener noreferrer">
          Spacex-Api
        </a>
      </h3>
    </div>
  );
};

export default Footer;
