import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button, LaunchShortInfo } from "../../Shared";
import { LaunchShortInfoSkeleton } from "../../Shared/Skeletons/LaunchShortInfoSkeleton";

//REDUX
import { fetchUpcomingLaunches } from "../../../Store/UpcomingLaunches/upcomingLaunchesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import styled from "styled-components/macro";
import {
  flexCenter,
  flexColumn,
} from "../../../resources/styles/helpers/mixins";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const UpcomingLaunches = () => {
  const { t } = useTranslation();

  const upcomingLaunches = useSelector(
    (state: RootState) => state.upcomingLaunches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (upcomingLaunches.upcomingLaunches.docs.length === 0)
      dispatch(fetchUpcomingLaunches());
  }, [dispatch, upcomingLaunches]);

  return (
    <StyledUpcomingLaunches>
      <StyledTitle>{t("upcomingLaunchesTitle")}</StyledTitle>
      <StyledContent>
        {upcomingLaunches.loading
          ? [1, 2, 3, 4, 5].map((n) => <LaunchShortInfoSkeleton key={n} />)
          : upcomingLaunches.upcomingLaunches.docs
              .slice(0, 5)
              .map((launch) => (
                <LaunchShortInfo key={launch.id} launch={launch} />
              ))}
      </StyledContent>
      <StyledButtonWrapper>
        <Link to="/launches/upcoming">
          <Button name={t("showAll")} styleType="primary" />
        </Link>
      </StyledButtonWrapper>
    </StyledUpcomingLaunches>
  );
};

const StyledUpcomingLaunches = styled.div`
  margin: 4rem 0;
  width: 100%;
`;

const StyledTitle = styled.div`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors?.fontPrimary};
  font-weight: 100;
  font-size: 2rem;
  text-align: center;

  @media ${device.mobile} {
    text-align: left;
  }

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`;

const StyledContent = styled(flexColumn)`
  > * {
    margin: 1rem 0;
  }
`;

const StyledButtonWrapper = styled(flexCenter)`
  margin-top: 2rem;
  width: 100%;
  display: flex;

  * {
    width: 100%;
  }

  @media ${device.mobile} {
    justify-content: center;
    width: auto;

    * {
      width: 250px;
    }
  }
`;
