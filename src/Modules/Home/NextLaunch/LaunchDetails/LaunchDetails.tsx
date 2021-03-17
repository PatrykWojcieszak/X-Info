import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Details } from "./Details/Details";

import { flexColumnCenter } from "../../../../resources/styles/helpers/mixins";
import { LaunchDetailsProps } from "./LaunchDetails.types";

export const LaunchDetails = ({ launch }: LaunchDetailsProps) => {
  const { t } = useTranslation();

  const [showLaunchDetails, setShowLaunchDetails] = useState(false);

  return (
    <>
      {!showLaunchDetails && (
        <StyledShowMore>
          <FontAwesomeIcon
            icon="arrow-down"
            onClick={() => setShowLaunchDetails(!showLaunchDetails)}
          />
          <h4>{t("showDetails")}</h4>
        </StyledShowMore>
      )}
      <AnimatePresence>
        {showLaunchDetails && (
          <Details
            flightNumber={launch.flight_number}
            dateLocal={launch.date_local}
            details={launch.details}
            rocketName={launch.rocket.name}
            datePrecision={launch.date_precision}
            launchpadFullName={launch.launchpad.full_name}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const StyledShowMore = styled(flexColumnCenter)`
  margin-top: 3rem;

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors?.blue};
    font-size: 2rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors?.fontSecondary};
    font-weight: 100;
    margin-top: 0.6rem;
  }
`;
