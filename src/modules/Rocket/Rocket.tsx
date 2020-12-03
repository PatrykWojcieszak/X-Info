import React from "react";

import Button from "../shared/Button/Button";

import styles from "./Rocket.module.scss";

import falconHeavy_bg from "../../resources/images/fheavy_bg2.jpg";
import falconheavy from "../../resources/images/falconHeavy.png";

const Rocket = () => {
  return (
    <div className={styles.Rocket}>
      <div className={styles.Top}>
        <img src={falconHeavy_bg} alt="falcon heavy" />
        <div className={styles.HeroText}>
          <h2>FALCON HEAVY</h2>
          <h4>
            Holy flying fuck, that thing took off! - <span>Elon Musk</span>
          </h4>
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.Rocket}>
          <img src={falconheavy} alt="falcon heavy" />
        </div>
        <div className={styles.InfoContainer}>
          <p>
            With the ability to lift into orbit over 54 metric tons (119,000
            lb)--a mass equivalent to a 737 jetliner loaded with passengers,
            crew, luggage and fuel--Falcon Heavy can lift more than twice the
            payload of the next closest operational vehicle, the Delta IV Heavy,
            at one-third the cost.
          </p>
          <h3>
            STATUS:{" "}
            <span style={{ color: true ? "#4BB543" : "#FA113D" }}>ACTIVE</span>
          </h3>
          <div className={styles.RocketDetails}>
            <div className={styles.BtnContainer}>
              <Button name="OVERVIEW" />
              <Button name="STAGE 1" />
              <Button name="STAGE 2" />
              <Button name="LANDING LEGS" />
            </div>
            <div className={styles.Details}>
              <div className={styles.Line}>
                <h3 className={styles.TItle}>HEIGHT</h3>
                <h3 className={styles.Value}>70m | 229,6 feet</h3>
              </div>
              <div className={styles.Line}>
                <h3 className={styles.TItle}>HEIGHT</h3>
                <h3 className={styles.Value}>70m | 229,6 feet</h3>
              </div>
              <div className={styles.Line}>
                <h3 className={styles.TItle}>HEIGHT</h3>
                <h3 className={styles.Value}>70m | 229,6 feet</h3>
              </div>
              <div className={styles.Line}>
                <h3 className={styles.TItle}>HEIGHT</h3>
                <h3 className={styles.Value}>70m | 229,6 feet</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
