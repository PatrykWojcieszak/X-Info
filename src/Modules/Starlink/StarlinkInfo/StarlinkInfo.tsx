import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

//COMPONENTS
import { StarlinkDetails } from "./StarlinkDetails/StarlinkDetails";
import { MissionDetails } from "./MissionDetails/MissionDetails";

//TYPES
import { GlobePoint } from "../../../Types";

//STYLES
import { pageVariantsAnim } from "../../../Animations/Animations_motion";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const StarlinkInfo = React.memo(({ starlink, close }: starlinkProps) => {
  return (
    <StyledStarlinkInfo
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}>
      <FontAwesomeIcon onClick={close} icon="times" />
      <StarlinkDetails
        label={starlink.label}
        version={starlink.version}
        height={Number(starlink.height_km)}
        velocity={Number(starlink.velocity_kms)}
      />
      <MissionDetails
        name={starlink.launch.name}
        dateUtc={starlink.launch.date_utc}
        id={starlink.launch.id}
        flightNumber={starlink.launch.flight_number}
      />
    </StyledStarlinkInfo>
  );
});

type starlinkProps = {
  starlink: GlobePoint;
  close: () => void;
};

const StyledStarlinkInfo = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors?.background};
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 1rem;
  z-index: 1002;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  svg {
    position: absolute;
    top: -10px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors?.background};
    right: 10px;
    color: ${({ theme }) => theme.colors?.red};
    font-size: 2rem;
    cursor: pointer;
  }

  h2 {
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-weight: 300;
    margin-bottom: 1rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors?.fontSecondary};
    font-weight: 300;
    margin-bottom: 0.4rem;
  }

  @media ${device.mobile} {
    flex-direction: row;
    width: auto;
  }
`;
