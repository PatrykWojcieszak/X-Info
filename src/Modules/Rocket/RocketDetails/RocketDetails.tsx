import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Rocket } from "../../../Types";
import { Button, InfoLine } from "../../Shared";
import styles from "./RocketDetails.module.scss";
import { rightToLeftAnim } from "../../../Animations/Animations_motion";

export const RocketDetails = ({ rocket, loading }: rocketDetailsProps) => {
  const [showOverview, setShowOverview] = useState(true);
  const [showFirstStage, setShowFirstStage] = useState(false);
  const [showSecondStage, setShowSecondStage] = useState(false);
  const [showLandingLegs, setShowLandingLegs] = useState(false);

  const { t } = useTranslation();

  const showOverviewHandler = () => {
    setShowOverview(true);
    setShowFirstStage(false);
    setShowSecondStage(false);
    setShowLandingLegs(false);
  };

  const showFirstStageHandler = () => {
    setShowOverview(false);
    setShowFirstStage(true);
    setShowSecondStage(false);
    setShowLandingLegs(false);
  };

  const showSecondStageHandler = () => {
    setShowOverview(false);
    setShowFirstStage(false);
    setShowSecondStage(true);
    setShowLandingLegs(false);
  };

  const showLandingLegsHandler = () => {
    setShowOverview(false);
    setShowFirstStage(false);
    setShowSecondStage(false);
    setShowLandingLegs(true);
  };

  let rocketStatus = { name: t("statusActive"), color: "#4BB543" };

  if (!rocket.active)
    rocketStatus = { name: t("statusInactive"), color: "#FA113D" };
  if (rocket.name === "Falcon 1")
    rocketStatus = { name: t("statusRetired"), color: "#005288" };
  if (rocket.name === "Starship")
    rocketStatus = { name: t("statusInDevelopment"), color: "#005288" };

  //OVERVIEW DETAILS
  let overViewDetails = <></>;
  if (!loading)
    overViewDetails = (
      <motion.div
        variants={rightToLeftAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.Details}>
        {rocket.height.meters || rocket.height.feet ? (
          <InfoLine
            title={t("height")}
            value={`${rocket.height.meters} m | ${rocket.height.feet} ft`}
          />
        ) : null}

        {rocket.diameter.meters || rocket.diameter.feet ? (
          <InfoLine
            title={t("diameter")}
            value={`${rocket.diameter.meters} m | ${rocket.diameter.feet} ft`}
          />
        ) : null}
        {rocket.mass.kg || rocket.mass.lb ? (
          <InfoLine
            title={t("mass")}
            value={`${rocket.mass.kg} kg | ${rocket.mass.lb} lb`}
          />
        ) : null}

        {rocket.payload_weights.map((payload, index) => (
          <InfoLine
            key={index}
            title={payload.id}
            value={`${payload.kg} kg | ${payload.lb} lb`}
          />
        ))}
      </motion.div>
    );

  //STAGE 1 DETAILS
  let stageOneDetails = <></>;
  if (!loading)
    stageOneDetails = (
      <motion.div
        variants={rightToLeftAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.Details}>
        {rocket.first_stage.engines && (
          <InfoLine
            title={t("engines")}
            value={`${rocket.first_stage.engines}`}
          />
        )}

        {(rocket.first_stage.thrust_sea_level.kN ||
          rocket.first_stage.thrust_sea_level.lbf) && (
          <InfoLine
            title={t("thrustAtSeaLevel")}
            value={`${rocket.first_stage.thrust_sea_level.kN} kn | ${rocket.first_stage.thrust_sea_level.lbf} lbf`}
          />
        )}

        {(rocket.first_stage.thrust_vacuum.kN ||
          rocket.first_stage.thrust_vacuum.lbf) && (
          <InfoLine
            title={t("thrustVacuum")}
            value={`${rocket.first_stage.thrust_vacuum.kN} kn | ${rocket.first_stage.thrust_vacuum.lbf} lbf`}
          />
        )}

        {rocket.first_stage.fuel_amount_tons && (
          <InfoLine
            title={t("fuelAmount")}
            value={`${rocket.first_stage.fuel_amount_tons} tons`}
          />
        )}

        {rocket.first_stage.burn_time_sec && (
          <InfoLine
            title={t("burnTime")}
            value={`${rocket.first_stage.burn_time_sec} sec `}
          />
        )}

        {rocket.engines.type && (
          <InfoLine title={t("type")} value={`${rocket.engines.type} `} />
        )}

        {rocket.engines.version && (
          <InfoLine title={t("version")} value={`${rocket.engines.version}`} />
        )}

        {rocket.engines.layout && (
          <InfoLine title={t("layout")} value={`${rocket.engines.layout}`} />
        )}

        <InfoLine
          title={t("reusable")}
          value={rocket.first_stage.reusable ? "YES" : "NO"}
        />
        {rocket.engines.propellant_1 && (
          <InfoLine
            title={`${t("propellant")} 1`}
            value={`${rocket.engines.propellant_1}`}
          />
        )}

        {rocket.engines.propellant_2 && (
          <InfoLine
            title={`${t("propellant")} 2`}
            value={`${rocket.engines.propellant_2}`}
          />
        )}
      </motion.div>
    );

  //STAGE 2 DETAILS
  let stageTwoDetails = <></>;
  if (!loading)
    stageTwoDetails = (
      <motion.div
        variants={rightToLeftAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.Details}>
        {rocket.second_stage.engines && (
          <InfoLine
            title={t("engines")}
            value={`${rocket.second_stage.engines}`}
          />
        )}

        {(rocket.second_stage.thrust.kN || rocket.second_stage.thrust.lbf) && (
          <InfoLine
            title={t("thrust")}
            value={`${rocket.second_stage.thrust.kN} kn | ${rocket.second_stage.thrust.lbf} lbf`}
          />
        )}

        {rocket.second_stage.fuel_amount_tons && (
          <InfoLine
            title={t("fuelAmount")}
            value={`${rocket.second_stage.fuel_amount_tons} tons`}
          />
        )}

        {rocket.second_stage.burn_time_sec && (
          <InfoLine
            title={t("burnTime")}
            value={`${rocket.second_stage.burn_time_sec} sec`}
          />
        )}
      </motion.div>
    );

  //LANDING
  let landingLegsDetails = <></>;
  if (!loading)
    landingLegsDetails = (
      <motion.div
        variants={rightToLeftAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.Details}>
        {rocket.landing_legs.number && (
          <InfoLine
            title={t("number")}
            value={`${rocket.landing_legs.number}`}
          />
        )}

        {rocket.landing_legs.material && (
          <InfoLine
            title={t("material")}
            value={`${rocket.landing_legs.material} `}
          />
        )}
      </motion.div>
    );

  return (
    <div className={styles.RocketDetailsContainer}>
      <p>{rocket.description}</p>
      <h3 style={{ textTransform: "uppercase" }}>
        {t("status")}:{" "}
        <span
          style={{
            color: rocketStatus.color,
          }}>
          {rocketStatus.name}
        </span>
      </h3>
      <div className={styles.RocketDetails}>
        <div className={styles.BtnContainer}>
          <Button
            name={t("overview")}
            styleType="primary"
            clicked={showOverviewHandler}
            selected={showOverview}
          />
          <Button
            name={`${t("stage")} 1`}
            styleType="primary"
            clicked={showFirstStageHandler}
            selected={showFirstStage}
          />
          <Button
            name={`${t("stage")} 2`}
            styleType="primary"
            clicked={showSecondStageHandler}
            selected={showSecondStage}
          />
          {rocket.landing_legs.number || rocket.landing_legs.material ? (
            <Button
              name={t("landingLegs")}
              styleType="primary"
              clicked={showLandingLegsHandler}
              selected={showLandingLegs}
            />
          ) : null}
        </div>
        <div className={styles.DetailsContainer}>
          <AnimatePresence>{showOverview && overViewDetails}</AnimatePresence>
          <AnimatePresence>{showFirstStage && stageOneDetails}</AnimatePresence>
          <AnimatePresence>
            {showSecondStage && stageTwoDetails}
          </AnimatePresence>
          <AnimatePresence>
            {showLandingLegs && landingLegsDetails}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

type rocketDetailsProps = {
  rocket: Rocket;
  loading: boolean;
};
