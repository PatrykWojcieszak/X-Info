import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { BoosterLaunchesInfo, Spinner, Button } from "../../Shared";
import { BoostersSkeleton } from "../../Shared/Skeletons/BoostersSkeleton";

//STYLES
import { showLaunchesList } from "../../../Animations/Animations_motion";
import { motion } from "framer-motion";

//REDUX
import { fetchBoosters } from "../../../Store/Boosters/boostersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import { Booster } from "../../../Types";
import styled from "styled-components/macro";
import { flexColumnCenter } from "../../../resources/styles/helpers/mixins";

export const Boosters = () => {
  const { t } = useTranslation();
  const boosters = useSelector((root: RootState) => root.boosters);

  const dispatch = useDispatch();

  useEffect(() => {
    if (boosters.boosters.docs.length === 0) dispatch(fetchBoosters(1));
  }, [dispatch, boosters]);

  const FetchBoosters = () => {
    dispatch(fetchBoosters(boosters.boosters.nextPage));
  };

  let boostersArr = (
    <StyledLaunchesWrapper
      variants={showLaunchesList}
      initial="initial"
      animate="in"
      exit="out"
      as={motion.div}>
      {[1, 2, 3, 4, 5].map((n) => (
        <BoostersSkeleton key={n} />
      ))}
    </StyledLaunchesWrapper>
  );

  if (boosters.boosters.docs.length > 0) {
    boostersArr = (
      <StyledLaunchesWrapper
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        as={motion.div}>
        {boosters.boosters.docs.map((booster: Booster, index) => (
          <BoosterLaunchesInfo
            key={index}
            block={booster.block}
            serial={booster.serial}
            status={booster.status}
            reuse_count={booster.reuse_count}
            launches={booster.launches}
          />
        ))}
        {boosters.boosters.nextPage && (
          <div
            style={{
              marginTop: "2rem",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            {boosters.loading && <Spinner />}
            <Button
              disabled={boosters.loading}
              name={t("loadMore")}
              styleType="primary"
              clicked={FetchBoosters}
            />
          </div>
        )}
      </StyledLaunchesWrapper>
    );
  }

  return <>{boostersArr}</>;
};

const StyledLaunchesWrapper = styled(flexColumnCenter)`
  width: 100%;
  position: relative;

  > * {
    margin: 1rem 0;
    width: 100%;
  }
`;
