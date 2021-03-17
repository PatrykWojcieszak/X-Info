import "moment-precise-range-plugin";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Countdown } from "./Countdown/Countdown";
import { bottomToTopAnim } from "../../../Animations/Animations_motion";
import backgroundImg from "../../../resources/images/home_bg.jpg";
import { fetchNextLaunch } from "../../../Store/NextLaunch/nextLaunchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import { flexColumn } from "../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { Quote } from "./Quote/Quote";
import { LaunchDetails } from "./LaunchDetails/LaunchDetails";
import { LaunchName } from "./LaunchName/LaunchName";

export const NextLaunch = ({ elonMuskQuote }: nextLaunchProps) => {
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

const StyledNextLaunch = styled.div`
  height: 100vh;
  position: relative;
`;
