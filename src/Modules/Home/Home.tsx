import React from "react";
import { motion } from "framer-motion";
import "moment-precise-range-plugin";

//COMPONENTS
import { RecentLaunches } from "./RecentLaunches/RecentLaunches";
import { UpcomingLaunches } from "./UpcomingLaunches/UpcomingLaunches";
import { NextLaunch } from "./NextLaunch/NextLaunch";
import { SEO } from "../Shared";
import { LaunchHistoryChart } from "./LaunchHistoryChart/LaunchHistoryChart";

//STYLES
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//OTHER
import { randomQuote } from "../../Other/ElonMuskQuotes";
import { homePageTitle, homePageDescription } from "../Shared/SEO/Tags";
import styled from "styled-components/macro";
import { device } from "../../resources/styles/helpers/breakpoints";

const Home = () => {
  return (
    <>
      <SEO title={homePageTitle} description={homePageDescription} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}>
        <NextLaunch elonMuskQuote={randomQuote()} />
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
  }

  @media ${device.large} {
    padding: 0 4rem;
  }

  @media ${device.desktop} {
    padding: 0 14rem;
  }
`;
