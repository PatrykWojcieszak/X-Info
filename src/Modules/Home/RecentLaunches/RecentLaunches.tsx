import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Launch } from "./Launch/Launch";
import { Button } from "../../Shared";
import { RecentLaunchSkeleton } from "../../Shared/Skeletons/RecentLaunchSkeleton";

//REDUX
import { fetchRecentLaunches } from "../../../Store/RecentLaunches/recentLaunchesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import styled from "styled-components/macro";
import {
  flexCenter,
  flexColumnCenter,
} from "../../../resources/styles/helpers/mixins";
import { device } from "../../../resources/styles/helpers/breakpoints";

export const RecentLaunches = () => {
  const { t } = useTranslation();

  const recentLaunches = useSelector(
    (state: RootState) => state.recentLaunches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (recentLaunches.recentLaunches.docs.length === 0)
      dispatch(fetchRecentLaunches());
  }, [dispatch, recentLaunches]);

  return (
    <StyledRecentLaunches>
      <StyledTop>
        <h2>{t("recentLaunchesTitle")}</h2>
        <Link to="/launches/past">
          <Button name={t("showMore")} styleType="primary" />
        </Link>
      </StyledTop>
      <StyledContent>
        {recentLaunches.loading
          ? [1, 2, 3, 4, 5].map((n) => <RecentLaunchSkeleton key={n} />)
          : recentLaunches.recentLaunches.docs.map((launch, index) => (
              <Launch
                id={launch.id}
                key={index}
                name={launch.name}
                patch={launch.links.patch.small}
                date={launch.date_local}
                success={launch.success}
              />
            ))}
      </StyledContent>
    </StyledRecentLaunches>
  );
};

const StyledRecentLaunches = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const StyledTop = styled(flexColumnCenter)`
  margin-bottom: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-weight: 100;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  a {
    width: 100%;

    > button {
      width: 100%;
    }
  }

  @media ${device.mobile} {
    flex-direction: row;
    justify-content: space-between;

    a {
      width: auto;
    }

    h2 {
      margin-bottom: 0;
    }
  }

  @media ${device.large} {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

const StyledContent = styled(flexCenter)`
  justify-content: space-evenly;
  flex-wrap: wrap;

  > * {
    margin: 1rem 0;
  }
`;
