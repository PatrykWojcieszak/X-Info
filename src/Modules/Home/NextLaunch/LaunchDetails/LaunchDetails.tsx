import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "./InfoLine/InfoLine";

//STYLES
import { launchDetailsAnim } from "../../../../Animations/Animations_motion";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const LaunchDetails = React.memo(
  ({
    flightNumber,
    dateLocal,
    details,
    rocketName,
    launchpadFullName,
    datePrecision,
  }: launchDetailsProps) => {
    const { t } = useTranslation();

    let datePrec = "key";
    if (datePrecision === "month") datePrec = "keyMonth";

    return (
      <StyledLaunchDetails
        variants={launchDetailsAnim}
        initial="hidden"
        animate="show">
        {flightNumber && (
          <InfoLine title={t("flight")} value={flightNumber.toString()} />
        )}
        {dateLocal && (
          <InfoLine
            title={t("launchDate")}
            value={t(datePrec, { date: new Date(dateLocal) })}
          />
        )}
        {rocketName && <InfoLine title={t("rocket")} value={rocketName} />}
        {launchpadFullName && (
          <InfoLine
            title={t("launchSite")}
            value={launchpadFullName.toString()}
          />
        )}
        {details && <InfoLine title={t("details")} value={details} />}
      </StyledLaunchDetails>
    );
  }
);

type launchDetailsProps = {
  flightNumber: Number;
  dateLocal: string;
  details: string;
  rocketName: string;
  launchpadFullName: string;
  datePrecision: string;
};

const StyledLaunchDetails = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 0.8rem;
  border-radius: 0.8rem;
  margin-top: 1rem;

  @media ${device.tablet} {
    margin-top: 2rem;
  }
`;
