import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import Button from "../Shared/Button/Button";
import Gallery from "../Shared/Gallery/Gallery";
import InfoLine from "../Shared/InfoLine/InfoLine";

//STYLES
import styles from "./Rocket.module.scss";
import {
  bottomToTopAnim,
  pageVariantsAnim,
  rightToLeftAnim,
} from "../../Animations/Animations_motion";

//IMAGES
import falconheavy_img from "../../resources/images/falconHeavy.png";
import falcon1_img from "../../resources/images/falcon1.png";
import starship_img from "../../resources/images/st.png";
import falcon9_img from "../../resources/images/falcon9.png";

//QUERIES
import RocketQuotes from "../../Other/RocketQuotes";

//REDUX
import { connect } from "react-redux";
import { fetchRocket } from "../../Store/Rocket/actions";

//OTHER
import RocketSkeleton from "../Shared/Skeletons/RocketSkeleton";

const Rocket = (props) => {
  const { vehicle } = useParams();
  const { onFetchRocket } = props;
  const { t } = useTranslation();

  useEffect(() => {
    onFetchRocket(vehicle);
  }, [onFetchRocket, vehicle]);

  const [showOverview, setShowOverview] = useState(true);
  const [showFirstStage, setShowFirstStage] = useState(false);
  const [showSecondStage, setShowSecondStage] = useState(false);
  const [showLandingLegs, setShowLandingLegs] = useState(false);

  let rocketStatus = { name: t("statusActive"), color: "#4BB543" };

  if (!props.rocket.docs[0]?.active)
    rocketStatus = { name: t("statusInactive"), color: "#FA113D" };
  if (vehicle === "Falcon 1")
    rocketStatus = { name: t("statusRetired"), color: "#005288" };
  if (vehicle === "Starship")
    rocketStatus = { name: t("statusInDevelopment"), color: "#005288" };

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

  let rocketQuote = "";
  const rocketHeroImg = [styles.Top];
  let rocketImg = "";

  if (vehicle === "Falcon 1") {
    rocketHeroImg.push(styles.Falcon1);
    rocketImg = falcon1_img;
    rocketQuote = RocketQuotes[0];
  } else if (vehicle === "Falcon 9") {
    rocketHeroImg.push(styles.Falcon9);
    rocketImg = falcon9_img;
    rocketQuote = RocketQuotes[1];
  } else if (vehicle === "Falcon Heavy") {
    rocketHeroImg.push(styles.FalconHeavy);
    rocketImg = falconheavy_img;
    rocketQuote = RocketQuotes[2];
  }
  if (vehicle === "Starship") {
    rocketHeroImg.push(styles.Starship);
    rocketImg = starship_img;
    rocketQuote = RocketQuotes[3];
  }

  //OVERVIEW DETAILS
  let overViewDetails = <></>;
  if (!props.loadingRocket)
    overViewDetails = (
      <motion.div
        variants={rightToLeftAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.Details}>
        {props.rocket.docs[0].height.meters ||
        props.rocket.docs[0].height.feet ? (
          <InfoLine
            title={t("height")}
            value={`${props.rocket.docs[0].height.meters} m | ${props.rocket.docs[0].height.feet} ft`}
          />
        ) : null}

        {props.rocket.docs[0].diameter.meters ||
        props.rocket.docs[0].diameter.feet ? (
          <InfoLine
            title={t("diameter")}
            value={`${props.rocket.docs[0].diameter.meters} m | ${props.rocket.docs[0].diameter.feet} ft`}
          />
        ) : null}
        {props.rocket.docs[0].mass.kg || props.rocket.docs[0].mass.lb ? (
          <InfoLine
            title={t("mass")}
            value={`${props.rocket.docs[0].mass.kg} kg | ${props.rocket.docs[0].mass.lb} lb`}
          />
        ) : null}

        {props.rocket.docs[0].payload_weights.map((payload, index) => (
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
  if (!props.loadingRocket)
    stageOneDetails = (
      <motion.div
        variants={rightToLeftAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.Details}>
        {props.rocket.docs[0].first_stage.engines && (
          <InfoLine
            title={t("engines")}
            value={`${props.rocket.docs[0].first_stage.engines}`}
          />
        )}

        {(props.rocket.docs[0].first_stage.thrust_sea_level.kN ||
          props.rocket.docs[0].first_stage.thrust_sea_level.lbf) && (
          <InfoLine
            title={t("thrustAtSeaLevel")}
            value={`${props.rocket.docs[0].first_stage.thrust_sea_level.kN} kn | ${props.rocket.docs[0].first_stage.thrust_sea_level.lbf} lbf`}
          />
        )}

        {(props.rocket.docs[0].first_stage.thrust_vacuum.kN ||
          props.rocket.docs[0].first_stage.thrust_vacuum.lbf) && (
          <InfoLine
            title={t("thrustVacuum")}
            value={`${props.rocket.docs[0].first_stage.thrust_vacuum.kN} kn | ${props.rocket.docs[0].first_stage.thrust_vacuum.lbf} lbf`}
          />
        )}

        {props.rocket.docs[0].first_stage.fuel_amount_tons && (
          <InfoLine
            title={t("fuelAmount")}
            value={`${props.rocket.docs[0].first_stage.fuel_amount_tons} tons`}
          />
        )}

        {props.rocket.docs[0].first_stage.burn_time_sec && (
          <InfoLine
            title={t("burnTime")}
            value={`${props.rocket.docs[0].first_stage.burn_time_sec} sec `}
          />
        )}

        {props.rocket.docs[0].engines.type && (
          <InfoLine
            title={t("type")}
            value={`${props.rocket.docs[0].engines.type} `}
          />
        )}

        {props.rocket.docs[0].engines.version && (
          <InfoLine
            title={t("version")}
            value={`${props.rocket.docs[0].engines.version}`}
          />
        )}

        {props.rocket.docs[0].engines.layout && (
          <InfoLine
            title={t("layout")}
            value={`${props.rocket.docs[0].engines.layout}`}
          />
        )}

        <InfoLine
          title={t("reusable")}
          value={props.rocket.docs[0].first_stage.reusable ? "YES" : "NO"}
        />
        {props.rocket.docs[0].engines.propellant_1 && (
          <InfoLine
            title={`${t("propellant")} 1`}
            value={`${props.rocket.docs[0].engines.propellant_1}`}
          />
        )}

        {props.rocket.docs[0].engines.propellant_2 && (
          <InfoLine
            title={`${t("propellant")} 2`}
            value={`${props.rocket.docs[0].engines.propellant_2}`}
          />
        )}
      </motion.div>
    );

  //STAGE 2 DETAILS
  let stageTwoDetails = <></>;
  if (!props.loadingRocket)
    stageTwoDetails = (
      <motion.div
        variants={rightToLeftAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.Details}>
        {props.rocket.docs[0].second_stage.engines && (
          <InfoLine
            title={t("engines")}
            value={`${props.rocket.docs[0].second_stage.engines}`}
          />
        )}

        {(props.rocket.docs[0].second_stage.thrust.kN ||
          props.rocket.docs[0].second_stage.thrust.lbf) && (
          <InfoLine
            title={t("thrust")}
            value={`${props.rocket.docs[0].second_stage.thrust.kN} kn | ${props.rocket.docs[0].second_stage.thrust.lbf} lbf`}
          />
        )}

        {props.rocket.docs[0].second_stage.fuel_amount_tons && (
          <InfoLine
            title={t("fuelAmount")}
            value={`${props.rocket.docs[0].second_stage.fuel_amount_tons} tons`}
          />
        )}

        {props.rocket.docs[0].second_s && (
          <InfoLine
            title={t("burnTime")}
            value={`${props.rocket.docs[0].second_stage.burn_time_sec} sec`}
          />
        )}
      </motion.div>
    );

  //LANDING
  let landingLegsDetails = <></>;
  if (!props.loadingRocket)
    landingLegsDetails = (
      <motion.div
        variants={rightToLeftAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.Details}>
        {props.rocket.docs[0].landing_legs.number && (
          <InfoLine
            title={t("number")}
            value={`${props.rocket.docs[0].landing_legs.number}`}
          />
        )}

        {props.rocket.docs[0].landing_legs.material && (
          <InfoLine
            title={t("material")}
            value={`${props.rocket.docs[0].landing_legs.material} `}
          />
        )}
      </motion.div>
    );

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.Rocket}>
      <div className={rocketHeroImg.join(" ")}>
        <motion.div
          variants={bottomToTopAnim}
          initial="hidden"
          animate="show"
          exit="exit"
          className={styles.HeroText}>
          <h2>{props.rocket.docs[0]?.name}</h2>
          <h4>
            {rocketQuote} - <span>Elon Musk</span>
          </h4>
        </motion.div>
      </div>
      <div className={styles.Content}>
        {props.loadingRocket ? (
          <div style={{ width: "100%" }}>
            <RocketSkeleton />
          </div>
        ) : (
          <>
            <div className={styles.Rocket}>
              <img src={rocketImg} alt="rocket" />
            </div>
            <div className={styles.InfoContainer}>
              <p>{props.rocket.docs[0]?.description}</p>
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
                  {!props.loadingRocket &&
                  (props.rocket.docs[0].landing_legs.number ||
                    props.rocket.docs[0].landing_legs.material) ? (
                    <Button
                      name={t("landingLegs")}
                      styleType="primary"
                      clicked={showLandingLegsHandler}
                      selected={showLandingLegs}
                    />
                  ) : null}
                </div>
                <div className={styles.DetailsContainer}>
                  <AnimatePresence>
                    {showOverview && overViewDetails}
                  </AnimatePresence>
                  <AnimatePresence>
                    {showFirstStage && stageOneDetails}
                  </AnimatePresence>
                  <AnimatePresence>
                    {showSecondStage && stageTwoDetails}
                  </AnimatePresence>
                  <AnimatePresence>
                    {showLandingLegs && landingLegsDetails}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.GalleryWrapper}>
        {props.rocket.docs[0]?.flickr_images.length > 0 ? (
          <Gallery images={props.rocket.docs[0].flickr_images} />
        ) : null}
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    rocket: state.rocket.rocket,
    loadingRocket: state.rocket.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRocket: (rocketName: string) => dispatch(fetchRocket(rocketName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rocket);
