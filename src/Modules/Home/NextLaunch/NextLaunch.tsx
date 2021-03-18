import "moment-precise-range-plugin";
import React, { useEffect } from "react";
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
import { randomQuote } from "../../../Other/ElonMuskQuotes";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const NextLaunch = () => {
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
            <LaunchDetails launch={nextLaunch.nextLaunch.docs[0]} />
            <Quote quote={randomQuote()} />
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
