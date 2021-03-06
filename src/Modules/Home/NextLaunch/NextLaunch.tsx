import React, { useState, useCallback, useEffect } from "react";
import "moment-precise-range-plugin";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { LaunchDetails } from "./LaunchDetails/LaunchDetails";
import { Countdown } from "../Countdown/Countdown";
import { YouTubeFrame } from "../../Shared/YoutubeFrame/YouTubeFrame";
import { LaunchName } from "./LaunchName/LaunchName";

//MODELS
import { Time } from "../../../Types";

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

const initialTime: Time = {
  days: 0,
  firstDateWasLater: true,
  hours: 4,
  minutes: 20,
  months: 0,
  seconds: 69,
  years: 0,
};

export const NextLaunch = ({ elonMuskQuote }: nextLaunchProps) => {
  const { t } = useTranslation();

  const [showLaunchDetails, setShowLaunchDetails] = useState(false);
  const [timer, setTimer] = useState<Time>(initialTime);
  const nextLaunch = useSelector((state: RootState) => state.nextLaunch);

  const dispatch = useDispatch();

  useEffect(() => {
    if (nextLaunch.nextLaunch.docs.length === 0) dispatch(fetchNextLaunch());
  }, [dispatch, nextLaunch]);

  const moment = require("moment");
  const dateLocal = nextLaunch.nextLaunch.docs[0]?.date_local;

  const timeDiff = useCallback(() => {
    const launchDate = new Date(dateLocal);
    const currentDate = new Date();
    const diff = moment().preciseDiff(launchDate, currentDate, true);

    return diff;
  }, [dateLocal, moment]);

  useEffect(() => {
    const timeDifference = timeDiff;
    const interval = setInterval(() => setTimer(timeDifference), 1000);

    if (
      timer.days === 0 &&
      timer.hours === 0 &&
      timer.minutes === 0 &&
      timer.seconds === 0
    )
      clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [timer, timeDiff]);

  let nextLaunchWrapper = <StyledTop></StyledTop>;

  if (
    !nextLaunch.loading &&
    (nextLaunchWrapper = (
      <AnimatePresence>
        <StyledTop>
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
            {timer && (
              <Countdown
                days={timer.days}
                hours={timer.hours}
                minutes={timer.minutes}
                seconds={timer.seconds}
              />
            )}
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
            <StyledQuoteContainer>
              <h2>
                {elonMuskQuote} - <span>Elon Musk</span>
              </h2>
            </StyledQuoteContainer>
          </StyledContent>
        </StyledTop>
      </AnimatePresence>
    ))
  )
    if (
      timer.days === 0 &&
      timer.hours === 0 &&
      timer.minutes < 2 &&
      nextLaunch.nextLaunch.docs[0]?.links.youtube_id
    )
      nextLaunchWrapper = (
        <AnimatePresence>
          <StyledYoutubeContainer
            as={motion.div}
            variants={bottomToTopAnim}
            initial="hidden"
            animate="show"
            exit="exit">
            <YouTubeFrame
              url={nextLaunch.nextLaunch.docs[0]?.links.youtube_id}
            />
          </StyledYoutubeContainer>
        </AnimatePresence>
      );

  return <StyledNextLaunch>{nextLaunchWrapper}</StyledNextLaunch>;
};

type nextLaunchProps = {
  elonMuskQuote: string;
};

const StyledTop = styled(flexColumn)`
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

const StyledQuoteContainer = styled.div`
  border-radius: 1rem;
  padding: 0.8rem;
  text-align: center;
  position: absolute;

  left: 0;
  right: 0;
  margin: auto;
  font-size: 0.5rem;
  bottom: 0.2rem;

  h2 {
    font-weight: 300;
    color: ${({ theme }) => theme.colors?.fontPrimary};

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors?.blue};
    }
  }

  @media ${device.tablet} {
    bottom: 1rem;
    font-size: 0.6rem;
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

const StyledYoutubeContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 90px;
`;
