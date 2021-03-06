import React from "react";
import { motion } from "framer-motion";

import { bottomToTopAnim } from "../../../Animations/Animations_motion";
import { RocketQuotes } from "../../../Other/RocketQuotes";
import { RocketType } from "../../../Types";
import styled from "styled-components/macro";
import { flexColumnCenter } from "../../../resources/styles/helpers/mixins";
import { device } from "../../../resources/styles/helpers/breakpoints";

import falcon1_bg from "../../../resources/images/falcon1_bg.jpg";
import falcon9_bg from "../../../resources/images/falcon9_bg.jpg";
import falconHeavy_bg from "../../../resources/images/fheavy_bg2.jpg";
import starship_bg from "../../../resources/images/starship_bg.jpg";

export const HeroImage = ({ vehicle }: heroImageProps) => {
  const rocketInfo = {
    quote: "",
    name: "",
  };

  if (vehicle === RocketType.f1) {
    rocketInfo.quote = RocketQuotes[0];
    rocketInfo.name = "Falcon 1";
  } else if (vehicle === RocketType.f9) {
    rocketInfo.quote = RocketQuotes[1];
    rocketInfo.name = "Falcon 9";
  } else if (vehicle === RocketType.fh) {
    rocketInfo.quote = RocketQuotes[2];
    rocketInfo.name = "Falcon Heavy";
  }
  if (vehicle === RocketType.starship) {
    rocketInfo.quote = RocketQuotes[3];
    rocketInfo.name = "Starship";
  }

  return (
    <StyledHeroImage vehicle={vehicle}>
      <StyledHeroText
        variants={bottomToTopAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        as={motion.div}>
        <h2>{rocketInfo.name}</h2>
        <h4>
          {rocketInfo.quote} - <span>Elon Musk</span>
        </h4>
      </StyledHeroText>
    </StyledHeroImage>
  );
};

type heroImageProps = {
  vehicle: string;
};

const StyledHeroImage = styled.div<{ vehicle: string }>`
  height: 100vh;

  background: rgba(0, 0, 0, 0.6)
    url(${({ vehicle }) =>
      vehicle === RocketType.f1
        ? falcon1_bg
        : vehicle === RocketType.f9
        ? falcon9_bg
        : vehicle === RocketType.fh
        ? falconHeavy_bg
        : vehicle === RocketType.starship
        ? starship_bg
        : null});

  background-blend-mode: darken;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
`;

const StyledHeroText = styled(flexColumnCenter)`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  h2 {
    font-size: 3rem;

    text-transform: uppercase;
  }

  h2,
  h4 {
    color: ${({ theme }) => theme.colors?.fontPrimary};
  }

  h4 {
    font-weight: 100;
    font-size: 0.7rem;
    width: 80%;
    text-align: center;

    span {
      font-weight: 500;
      color: ${({ theme }) => theme.colors?.blue};
    }
  }

  @media ${device.tablet} {
    h2 {
      font-size: 5rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;
