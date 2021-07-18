import "moment-precise-range-plugin";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { Countdown } from "./Countdown/Countdown";
import { LaunchDetails } from "./LaunchDetails/LaunchDetails";
import { LaunchName } from "./LaunchName/LaunchName";
import { Quote } from "./Quote/Quote";

import { fetchNextLaunch } from "../../../Store/NextLaunch/nextLaunchSlice";
import { RootState } from "../../../Store/rootReducer";

import backgroundImg from "../../../resources/images/home_bg.jpg";
import { bottomToTopAnim } from "../../../Animations/Animations_motion";
import { flexColumn } from "../../../resources/styles/helpers/mixins";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { Livestream } from "./Livestream/Livestream";
import { Button } from "../../Shared";
import { Time } from "../../../Types";
import { NextLaunchProps } from "./Quote/NextLaunch.types";

const initialTime: Time = {
  days: 0,
  firstDateWasLater: true,
  hours: 4,
  minutes: 20,
  months: 0,
  seconds: 69,
  years: 0,
};

export const NextLaunch = ({ quote }: NextLaunchProps) => {
  const nextLaunch = useSelector((state: RootState) => state.nextLaunch);
  const [showLivestream, setShowlivestream] = useState(false);
  const [isTwoMinutesBeforeStart, setIsTwoMinutesBeforeStart] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (nextLaunch.nextLaunch.docs.length === 0) dispatch(fetchNextLaunch());
  }, [dispatch, nextLaunch]);

  const toggleLivestreamHandler = () => {
    setShowlivestream(!showLivestream);
  };

  const [timer, setTimer] = useState<Time>(initialTime);
  const moment = require("moment");
  const dateLocal = nextLaunch.nextLaunch.docs[0]?.date_local;

  const timeDiff = useCallback(() => {
    const launchDate = new Date(dateLocal);
    const currentDate = new Date();
    const diff = moment().preciseDiff(launchDate, currentDate, true);

    return diff;
  }, [moment, dateLocal]);

  useEffect(() => {
    const timeDifference = timeDiff;
    const interval = setInterval(() => setTimer(timeDifference), 1000);

    if (timer.days === 0 && timer.hours === 0 && timer.minutes < 2)
      setIsTwoMinutesBeforeStart(true);

    return () => {
      clearInterval(interval);
    };
  }, [timer, timeDiff]);

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
            {isTwoMinutesBeforeStart &&
              nextLaunch.nextLaunch.docs[0]?.links.youtube_id && (
                <StyledLivestreamBtn
                  name="SHOW LIVESTREAM"
                  styleType="primary"
                  clicked={toggleLivestreamHandler}
                />
              )}

            <LaunchName
              launchName={nextLaunch.nextLaunch.docs[0]?.name}
              dateLocal={nextLaunch.nextLaunch.docs[0]?.date_local}
            />
            <Countdown
              days={timer.days}
              hours={timer.hours}
              minutes={timer.minutes}
              seconds={timer.seconds}
            />
            <LaunchDetails launch={nextLaunch.nextLaunch.docs[0]} />
            <Quote quote={quote} />
            {showLivestream && (
              <Livestream
                url={nextLaunch.nextLaunch.docs[0].links.youtube_id}
                showHandler={toggleLivestreamHandler}
              />
            )}
          </StyledContent>
        )}
      </StyledBackground>
    </StyledNextLaunch>
  );
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

  @media ${device.mobile} {
    padding: 0 3rem;
  }

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.large} {
    padding: 0 4rem;
  }

  @media ${device.desktop} {
    padding: 0 14rem;
  }
`;

const StyledNextLaunch = styled.div`
  height: 100vh;
  position: relative;
`;

const StyledLivestreamBtn = styled(Button)`
  margin-bottom: 2.5rem;

  @media ${device.mobile} {
    width: 250px;
  }
`;
