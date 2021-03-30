import "moment-precise-range-plugin";
import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

import { RecentLaunches } from "./RecentLaunches/RecentLaunches";
import { UpcomingLaunches } from "./UpcomingLaunches/UpcomingLaunches";
import { NextLaunch } from "./NextLaunch/NextLaunch";
import { LaunchHistoryChart } from "./LaunchHistoryChart/LaunchHistoryChart";
import { SEO } from "../Shared";

import { pageVariantsAnim } from "../../Animations/Animations_motion";
import { homePageTitle, homePageDescription } from "../Shared/SEO/Tags";
import { device } from "../../resources/styles/helpers/breakpoints";
import { randomQuote } from "../../Other/ElonMuskQuotes";

const Home = () => {
  return (
    <>
      <SEO title={homePageTitle} description={homePageDescription} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}>
        <NextLaunch quote={randomQuote()} />
        <StyledContent>
          <RecentLaunches />
          <UpcomingLaunches />
          <LaunchHistoryChart />
        </StyledContent>
      </motion.div>
    </>
  );
};

export default Home;

const StyledContent = styled.div`
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.large} {
    padding: 0 4rem;
  }

  @media ${device.desktop} {
    padding: 0 14rem;
  }
`;
