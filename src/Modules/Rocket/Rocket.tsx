import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//COMPONENTS
import Button from "../Shared/Button/Button";
import Gallery from "../Shared/Gallery/Gallery";
import InfoLine from "../Shared/InfoLine/InfoLine";

//STYLES
import styles from "./Rocket.module.scss";

//IMAGES
import falconheavy_img from "../../resources/images/falconHeavy.png";
import falcon1_img from "../../resources/images/falcon1.png";
import starship_img from "../../resources/images/st.png";
import falcon9_img from "../../resources/images/falcon9.png";

//QUERIES
import RocketQuotes from "../../Other/RocketQuotes";

//OTHER
import {
  opacityAnim,
  pageVariantsAnim,
  rightToLeftAnim,
} from "../../Animations/Animations_motion";
import { connect } from "react-redux";
import { fetchRocket } from "../../Store/Rocket/actions";

const Rocket = (props) => {
  const { vehicle } = useParams();
  const { onFetchRocket } = props;

  useEffect(() => {
    onFetchRocket(vehicle);
  }, [onFetchRocket, vehicle]);

  const [showOverview, setShowOverview] = useState(true);
  const [showFirstStage, setShowFirstStage] = useState(false);
  const [showSecondStage, setShowSecondStage] = useState(false);
  const [showLandingLegs, setShowLandingLegs] = useState(false);

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
            title="HEIGHT"
            value={`${props.rocket.docs[0].height.meters} m | ${props.rocket.docs[0].height.feet} feet`}
          />
        ) : null}

        {props.rocket.docs[0].diameter.meters ||
        props.rocket.docs[0].diameter.feet ? (
          <InfoLine
            title="DIAMETER"
            value={`${props.rocket.docs[0].diameter.meters} m | ${props.rocket.docs[0].diameter.feet} feet`}
          />
        ) : null}
        {props.rocket.docs[0].mass.kg || props.rocket.docs[0].mass.lb ? (
          <InfoLine
            title="MASS"
            value={`${props.rocket.docs[0].mass.kg} kg | ${props.rocket.docs[0].mass.lb} lb`}
          />
        ) : null}

        {props.rocket.docs[0].payload_weights.map((payload, index) => (
          <InfoLine
            key={index}
            title={payload.id}
            value={`${payload.kg} kg | ${payload.lb} lb}`}
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
        {props.rocket.docs[0].first_stage.engines ? (
          <InfoLine
            title="ENGINES"
            value={`${props.rocket.docs[0].first_stage.engines}`}
          />
        ) : null}

        {props.rocket.docs[0].first_stage.thrust_sea_level.kN ||
        props.rocket.docs[0].first_stage.thrust_sea_level.lbf ? (
          <InfoLine
            title="THRUST AT SEA LEVEL"
            value={`${props.rocket.docs[0].first_stage.thrust_sea_level.kN} kn | ${props.rocket.docs[0].first_stage.thrust_sea_level.lbf} lbf`}
          />
        ) : null}

        {props.rocket.docs[0].first_stage.thrust_vacuum.kN ||
        props.rocket.docs[0].first_stage.thrust_vacuum.lbf ? (
          <InfoLine
            title="THRUST VACUUM"
            value={`${props.rocket.docs[0].first_stage.thrust_vacuum.kN} kn | ${props.rocket.docs[0].first_stage.thrust_vacuum.lbf} lbf`}
          />
        ) : null}
        {props.rocket.docs[0].first_stage.fuel_amount_tons ? (
          <InfoLine
            title="FUEL AMOUNT"
            value={`${props.rocket.docs[0].first_stage.fuel_amount_tons} tons`}
          />
        ) : null}
        {props.rocket.docs[0].first_stage.burn_time_sec ? (
          <InfoLine
            title="BURN TIME"
            value={`${props.rocket.docs[0].first_stage.burn_time_sec} sec `}
          />
        ) : null}
        {props.rocket.docs[0].engines.type ? (
          <InfoLine
            title="TYPE"
            value={`${props.rocket.docs[0].engines.type} `}
          />
        ) : null}
        {props.rocket.docs[0].engines.version ? (
          <InfoLine
            title="VERSION"
            value={`${props.rocket.docs[0].engines.version}`}
          />
        ) : null}
        {props.rocket.docs[0].engines.layout ? (
          <InfoLine
            title="LAYOUT"
            value={`${props.rocket.docs[0].engines.layout}`}
          />
        ) : null}

        <InfoLine
          title="REUSABLE"
          value={props.rocket.docs[0].first_stage.reusable ? "YES" : "NO"}
        />
        {props.rocket.docs[0].engines.propellant_1 ? (
          <InfoLine
            title="PROPELLANT 1"
            value={`${props.rocket.docs[0].engines.propellant_1}`}
          />
        ) : null}

        {props.rocket.docs[0].engines.propellant_2 ? (
          <InfoLine
            title="PROPELLANT 2"
            value={`${props.rocket.docs[0].engines.propellant_2}`}
          />
        ) : null}
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
        {props.rocket.docs[0].second_stage.engines ? (
          <InfoLine
            title="ENGINES"
            value={`${props.rocket.docs[0].second_stage.engines}`}
          />
        ) : null}
        {props.rocket.docs[0].second_stage.thrust.kN ||
        props.rocket.docs[0].second_stage.thrust.lbf ? (
          <InfoLine
            title="THRUST"
            value={`${props.rocket.docs[0].second_stage.thrust.kN} kn | ${props.rocket.docs[0].second_stage.thrust.lbf} lbf`}
          />
        ) : null}
        {props.rocket.docs[0].second_stage.fuel_amount_tons ? (
          <InfoLine
            title="FUEL AMOUNT"
            value={`${props.rocket.docs[0].second_stage.fuel_amount_tons} tons`}
          />
        ) : null}
        {props.rocket.docs[0].second_s ? (
          <InfoLine
            title="BURN TIME"
            value={`${props.rocket.docs[0].second_stage.burn_time_sec} sec`}
          />
        ) : null}
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
        {props.rocket.docs[0].landing_legs.number ? (
          <InfoLine
            title="NUMBER"
            value={`${props.rocket.docs[0].landing_legs.number}`}
          />
        ) : null}

        {props.rocket.docs[0].landing_legs.material ? (
          <InfoLine
            title="MATERIAL"
            value={`${props.rocket.docs[0].landing_legs.material} `}
          />
        ) : null}
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
          initial="initial"
          animate="in"
          variants={opacityAnim}
          className={styles.HeroText}>
          <h2>{props.rocket.docs[0]?.name}</h2>
          <h4>
            {rocketQuote} - <span>Elon Musk</span>
          </h4>
        </motion.div>
      </div>
      <div className={styles.Content}>
        <div className={styles.Rocket}>
          <img src={rocketImg} alt="falcon heavy" />
        </div>
        <div className={styles.InfoContainer}>
          <p>{props.rocket.docs[0]?.description}</p>
          <h3>
            STATUS:{" "}
            <span
              style={{
                color: props.rocket.docs[0]?.active ? "#4BB543" : "#FA113D",
              }}>
              {props.rocket.docs[0]?.active ? "ACTIVE" : "INACTIVE"}
            </span>
          </h3>
          <div className={styles.RocketDetails}>
            <div className={styles.BtnContainer}>
              <Button
                name="OVERVIEW"
                clicked={showOverviewHandler}
                selected={showOverview}
              />
              <Button
                name="STAGE 1"
                clicked={showFirstStageHandler}
                selected={showFirstStage}
              />
              <Button
                name="STAGE 2"
                clicked={showSecondStageHandler}
                selected={showSecondStage}
              />
              {!props.loadingRocket &&
              (props.rocket.docs[0].landing_legs.number ||
                props.rocket.docs[0].landing_legs.material) ? (
                <Button
                  name="LANDING LEGS"
                  clicked={showLandingLegsHandler}
                  selected={showLandingLegs}
                />
              ) : null}
            </div>
            <div className={styles.DetailsContainer}>
              <AnimatePresence>
                {showOverview ? overViewDetails : null}
              </AnimatePresence>
              <AnimatePresence>
                {showFirstStage ? stageOneDetails : null}
              </AnimatePresence>
              <AnimatePresence>
                {showSecondStage ? stageTwoDetails : null}
              </AnimatePresence>
              <AnimatePresence>
                {showLandingLegs ? landingLegsDetails : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
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
