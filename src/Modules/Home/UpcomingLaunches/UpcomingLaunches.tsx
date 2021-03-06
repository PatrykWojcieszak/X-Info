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
      <StyledTop>
        <h2>{t("upcomingLaunchesTitle")}</h2>
      </StyledTop>
      <StyledContent>
        {upcomingLaunches.loading
          ? [1, 2, 3, 4, 5].map((n) => <LaunchShortInfoSkeleton key={n} />)
          : upcomingLaunches.upcomingLaunches.docs
              .slice(0, 5)
              .map((launch, index) => (
                <LaunchShortInfo
                  key={index}
                  launchName={launch.name}
                  launchDateUtc={launch.date_utc}
                  rocketName={launch.rocket.name}
                  launchSiteName={launch.launchpad.full_name}
                  customers={launch.payloads[0].customers}
                  flightNumber={launch.flight_number}
                  nationality={launch.payloads[0].nationalities[0]}
                  datePrecision={launch.date_precision}
                  id={launch.id}
                />
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

const StyledTop = styled.div`
  margin-bottom: 2rem;

  h2 {
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-weight: 100;
    font-size: 1.1rem;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 1.5rem;
    }
  }

  @media ${device.large} {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

const StyledContent = styled(flexColumn)`
  > * {
    margin: 1rem 0;
  }
`;

const StyledButtonWrapper = styled(flexCenter)`
  margin-top: 2rem;
`;
