import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../../Shared";
import { LandingLegs } from "./LandingLegs/LandingLegs";
import { SecondStage } from "./SecondStage/SecondStage";
import { FirstStage } from "./FirstStage/FirstStage";
import { Overview } from "./Overview/Overview";

//TYPES
import { Rocket, RocketType } from "../../../Types";
import { Header } from "./Header/Header";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import falconheavy_img from "../../../resources/images/falconHeavy.png";
import falcon1_img from "../../../resources/images/falcon1.png";
import starship_img from "../../../resources/images/st.png";
import falcon9_img from "../../../resources/images/falcon9.png";

export const RocketDetails = ({ rocket }: rocketDetailsProps) => {
  const showRocketDetailsInitial = [
    { name: "overview", isActive: true, isVisible: true },
    { name: "stage1", isActive: false, isVisible: true },
    { name: "stage2", isActive: false, isVisible: true },
    { name: "landingLegs", isActive: false, isVisible: true },
  ];

  let rocketImg = "";

  if (rocket.id === RocketType.f1) {
    rocketImg = falcon1_img;
  } else if (rocket.id === RocketType.f9) {
    rocketImg = falcon9_img;
  } else if (rocket.id === RocketType.fh) {
    rocketImg = falconheavy_img;
  }
  if (rocket.id === RocketType.starship) {
    rocketImg = starship_img;
  }

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
    <StyledRocketContainer>
      <StyledRocketImgWrapper>
        <StyledRocketImg src={rocketImg} alt="rocket" />
      </StyledRocketImgWrapper>
      <StyledDescription>
        <Header
          rocketName={rocket.name}
          active={rocket.active}
          description={rocket.description}
        />
        <StyledBtnsWrapper>
          {showRocketDetails
            .filter((x) => x.isVisible)
            .map((btn, index) => (
              <StyledButton
                key={index}
                name={t(btn.name)}
                styleType="primary"
                clicked={() => showDetailsHandler(index)}
                selected={showRocketDetails[index].isActive}
              />
            ))}
        </StyledBtnsWrapper>
      </StyledDescription>
      <StyledDetails>
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
      </StyledDetails>
    </StyledRocketContainer>
  );
};

type rocketDetailsProps = {
  rocket: Rocket;
};

const StyledRocketContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 10px 50px;
  margin-bottom: 4rem;

  @media ${device.tablet} {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const StyledDetails = styled.div`
  position: relative;
  grid-row: span 1 / 3;
  grid-column: span 2;
  height: 620px;

  @media ${device.tablet} {
    grid-column: span 1/3;
  }
`;

const StyledRocketImgWrapper = styled.div`
  @media ${device.tablet} {
    grid-row: span 2;
  }
`;

const StyledDescription = styled.div``;

const StyledRocketImg = styled.img`
  height: 470px;

  @media ${device.tablet} {
    height: 700px;
  }

  @media ${device.large} {
    height: 900px;
  }
`;

const StyledBtnsWrapper = styled.div`
  margin: 2rem 0;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 1rem;

  @media ${device.mobile} {
    width: auto;
    margin-right: 1.5rem;
  }
`;
