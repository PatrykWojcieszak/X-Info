import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { launchDetailsAnim } from "../../../../../Animations/Animations_motion";
import { device } from "../../../../../resources/styles/helpers/breakpoints";

export const Details = React.memo(
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
          <>
            <StyledText>{t("flight")}:</StyledText>
            <StyledTextValues>{flightNumber}</StyledTextValues>
          </>
        )}
        {dateLocal && (
          <>
            <StyledText>{t("launchDate")}:</StyledText>
            <StyledTextValues>
              {t(datePrec, { date: new Date(dateLocal) })}
            </StyledTextValues>
          </>
        )}
        {rocketName && (
          <>
            <StyledText>{t("rocket")}:</StyledText>
            <StyledTextValues>{rocketName}</StyledTextValues>
          </>
        )}
        {launchpadFullName && (
          <>
            <StyledText>{t("launchSite")}:</StyledText>
            <StyledTextValues>{launchpadFullName}</StyledTextValues>
          </>
        )}
        {details && (
          <>
            <StyledText>{t("details")}:</StyledText>
            <StyledTextValues>{`${details.slice(0, 120)}...`}</StyledTextValues>
          </>
        )}
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
  margin-top: 2rem;
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: max-content max-content max-content max-content;
  gap: 10px 25px;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin-top: 1.5rem;

  @media ${device.tablet} {
    margin-top: 2rem;
  }
`;

const StyledText = styled.h3`
  font-weight: 300;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors?.fontSecondary};
`;

const StyledTextValues = styled(StyledText)`
  color: ${({ theme }) => theme.colors?.fontPrimary};
`;
