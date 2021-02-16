import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../../Shared";
import { LandingLegs } from "./LandingLegs/LandingLegs";
import { SecondStage } from "./SecondStage/SecondStage";
import { FirstStage } from "./FirstStage/FirstStage";
import { Overview } from "./Overview/Overview";

//STYLES
import styles from "./RocketDetails.module.scss";

//TYPES
import { Rocket, RocketType } from "../../../Types";
import { Header } from "./Header/Header";

export const RocketDetails = ({ rocket }: rocketDetailsProps) => {
  const showRocketDetailsInitial = [
    { name: "overview", isActive: true, isVisible: true },
    { name: "stage1", isActive: false, isVisible: true },
    { name: "stage2", isActive: false, isVisible: true },
    { name: "landingLegs", isActive: false, isVisible: true },
  ];

  const { t } = useTranslation();
  const [showRocketDetails, setShowRocketDetails] = useState(
    showRocketDetailsInitial
  );

  useEffect(() => {
    const temp = [...showRocketDetails];
    if (rocket.id === RocketType.f1) temp[3].isVisible = false;
    else temp[3].isVisible = true;

    setShowRocketDetails(temp);
  }, [showRocketDetails, rocket.id]);

  const showDetailsHandler = (id: number) => {
    const temp = [...showRocketDetails];

    temp.forEach((element) => (element.isActive = false));
    temp[id].isActive = true;

    setShowRocketDetails(temp);
  };

  return (
    <div className={styles.RocketDetailsContainer}>
      <Header
        rocketName={rocket.name}
        active={rocket.active}
        description={rocket.description}
      />
      <div className={styles.RocketDetails}>
        <div className={styles.BtnContainer}>
          {showRocketDetails
            .filter((x) => x.isVisible)
            .map((btn, index) => (
              <Button
                key={index}
                name={t(btn.name)}
                styleType="primary"
                clicked={() => showDetailsHandler(index)}
                selected={showRocketDetails[index].isActive}
              />
            ))}
        </div>
        <div className={styles.DetailsContainer}>
          <AnimatePresence>
            {showRocketDetails[0].isActive && (
              <Overview
                height={rocket.height}
                diameter={rocket.diameter}
                mass={rocket.mass}
                payloads={rocket.payload_weights}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showRocketDetails[1].isActive && (
              <FirstStage
                firstStage={rocket.first_stage}
                engines={rocket.engines}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showRocketDetails[2].isActive && (
              <SecondStage secondStage={rocket.second_stage} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showRocketDetails[3].isActive && (
              <LandingLegs landingLegs={rocket.landing_legs} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

type rocketDetailsProps = {
  rocket: Rocket;
};
