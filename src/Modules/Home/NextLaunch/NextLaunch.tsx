import "moment-precise-range-plugin";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { LaunchDetails } from "./LaunchDetails/LaunchDetails";
import { Countdown } from "./Countdown/Countdown";
import { LaunchName } from "./LaunchName/LaunchName";

//STYLES
import { bottomToTopAnim } from "../../../Animations/Animations_motion";
import backgroundImg from "../../../resources/images/home_bg.jpg";

//REDUX
import { fetchNextLaunch } from "../../../Store/NextLaunch/nextLaunchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import {
  flexColumn,
  flexColumnCenter,
} from "../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { Quote } from "./Quote/Quote";

export const NextLaunch = ({ elonMuskQuote }: nextLaunchProps) => {
  const { t } = useTranslation();

  const [showLaunchDetails, setShowLaunchDetails] = useState(false);
  const nextLaunch = useSelector((state: RootState) => state.nextLaunch);

  const dispatch = useDispatch();

  useEffect(() => {
    if (nextLaunch.nextLaunch.docs.length === 0) dispatch(fetchNextLaunch());
  }, [dispatch, nextLaunch]);

  return (
    <StyledNextLaunch>
      <StyledBackground>
        {!nextLaunch.loading && (
          <StyledContent
            as={motion.div}
            variants={bottomToTopAnim}
            initial="hidden"
            animate="show"
            exit="exit">
            <LaunchName
              launchName={nextLaunch.nextLaunch.docs[0].name}
              dateLocal={nextLaunch.nextLaunch.docs[0]?.date_local}
            />
            <Countdown date={nextLaunch.nextLaunch.docs[0]?.date_local} />
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
                <LaunchDetails
                  flightNumber={nextLaunch.nextLaunch.docs[0].flight_number}
                  dateLocal={nextLaunch.nextLaunch.docs[0].date_local}
                  details={nextLaunch.nextLaunch.docs[0].details}
                  rocketName={nextLaunch.nextLaunch.docs[0].rocket.name}
                  datePrecision={nextLaunch.nextLaunch.docs[0].date_precision}
                  launchpadFullName={
                    nextLaunch.nextLaunch.docs[0].launchpad.full_name
                  }
                />
              )}
            </AnimatePresence>
            <Quote quote={elonMuskQuote} />
          </StyledContent>
        )}
      </StyledBackground>
    </StyledNextLaunch>
  );
};

type nextLaunchProps = {
  elonMuskQuote: string;
};

const StyledBackground = styled(flexColumn)`
  background: rgba(0, 0, 0, 0.5) url(${backgroundImg});
  background-blend-mode: darken;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const StyledContent = styled(flexColumn)`
  flex: 2;
  justify-content: center;
  position: relative;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.large} {
    padding: 0 4rem;
  }

  @media ${device.desktop} {
    padding: 0 12rem;
  }
`;

const StyledShowMore = styled(flexColumnCenter)`
  margin-top: 4rem;

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors?.blue};
    font-size: 2.5rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors?.fontSecondary};
    font-weight: 100;
    margin-top: 0.4rem;
  }
`;

const StyledNextLaunch = styled.div`
  height: 100vh;
  position: relative;
`;
