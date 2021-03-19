import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button, LaunchShortInfo, NotFoundLaunches } from "../../Shared";
import { LaunchShortInfoSkeleton } from "../../Shared/Skeletons/LaunchShortInfoSkeleton";

//STYLES
import { showLaunchesList } from "../../../Animations/Animations_motion";

//TYPES
import { Launch } from "../../../Types";
import styled from "styled-components/macro";
import { flexColumnCenter } from "../../../resources/styles/helpers/mixins";

export const PastLaunches = ({ launches, loading }: pastLaunchesProps) => {
  const [numberOfLaunches, setNumberOfLaunches] = useState(5);
  const { t } = useTranslation();

  let pastLaunchesArr = (
    <>
      {[1, 2, 3, 4, 5].map((n) => (
        <LaunchShortInfoSkeleton key={n} />
      ))}
    </>
  );

  if (!loading) {
    pastLaunchesArr = (
      <>
        {launches.slice(0, numberOfLaunches).map((launch) => (
          <LaunchShortInfo key={launch.id} launch={launch} />
        ))}
        {launches.length >= numberOfLaunches && (
          <div
            style={{
              marginTop: "2rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            <Button
              disabled={loading}
              name={t("loadMore")}
              styleType="primary"
              clicked={() => setNumberOfLaunches(numberOfLaunches + 5)}
            />
          </div>
        )}
      </>
    );
  }

  if (launches.length === 0) pastLaunchesArr = <NotFoundLaunches />;

  return (
    <>
      <StyledLaunchesWrapper
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        as={motion.div}>
        {pastLaunchesArr}
      </StyledLaunchesWrapper>
    </>
  );
};

type pastLaunchesProps = {
  launches: Launch[];
  loading: boolean;
};

const StyledLaunchesWrapper = styled(flexColumnCenter)`
  width: 100%;
  position: relative;

  > * {
    margin: 1rem 0;
    width: 100%;
  }
`;
