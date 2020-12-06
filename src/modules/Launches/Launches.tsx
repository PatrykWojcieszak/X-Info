import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

//COMPONENTS
import Button from "../shared/Button/Button";
import LaunchShortInfo from "../shared/LaunchShortInfo/LaunchShortInfo";
import LatestLaunch from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";

//STYLES
import styles from "./Launches.module.scss";

//MODELS
import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";

//QUERIES
import LatestLaunchQuery from "../../Queries/LatestLaunchQuery";
import PastLaunchesQuery from "../../Queries/PastLaunchesQuery";
import UpcomingLaunchesQuery from "../../Queries/UpcomingLaunchesQuery";

const Launches = () => {
  const [showPastLaunches, setShowPastLaunches] = useState(false);
  const [showUpcomingLaunches, setShowUpcomingLaunches] = useState(true);
  const [latestLaunch, setLatestLaunch] = useState<ILaunch | undefined>(
    undefined
  );
  const [upcomingLaunches, setUpcomingLaunches] = useState<
    IQueryResult<ILaunch> | undefined
  >(undefined);
  const [pastLaunches, setPastLaunches] = useState<
    IQueryResult<ILaunch> | undefined
  >(undefined);

  const FetchUpcomingLaunches = useCallback(() => {
    Axios.post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      UpcomingLaunchesQuery
    )
      .then((res) => {
        setUpcomingLaunches(res.data);
      })
      .catch((err) => {});
  }, []);

  const FetchPastLaunches = useCallback(() => {
    let query = PastLaunchesQuery;

    if (pastLaunches !== undefined) {
      console.log(query);
      query.options.page = pastLaunches.nextPage;
    }

    Axios.post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      query
    )
      .then((res) => {
        const nextLaunches = res.data;
        if (pastLaunches !== undefined) {
          pastLaunches.docs.map((launch) => {
            nextLaunches.docs.push(launch);
          });
        }

        setPastLaunches(nextLaunches);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    Axios.post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      LatestLaunchQuery
    )
      .then((res) => {
        setLatestLaunch(res.data.docs[0]);
      })
      .catch((err) => {});

    FetchUpcomingLaunches();
  }, [FetchUpcomingLaunches]);

  const showPastLaunchesHandler = () => {
    setShowPastLaunches(true);
    setShowUpcomingLaunches(false);

    if (pastLaunches === undefined) FetchPastLaunches();
  };

  const showUpcomingLaunchesHandler = () => {
    setShowPastLaunches(false);
    setShowUpcomingLaunches(true);

    if (upcomingLaunches === undefined) FetchUpcomingLaunches();
  };

  const pastLaunchesArr: any[] = [];

  if (pastLaunches !== undefined) {
    pastLaunches.docs.map((launch, index) =>
      pastLaunchesArr.push(
        <LaunchShortInfo
          key={index}
          launchName={launch.name}
          launchDateUtc={launch.date_utc}
          rocketName={launch.rocket.name}
          launchSiteName={launch.launchpad.full_name}
          customer={launch.payloads[0].customers[0]}
          flightNumber={launch.flight_number}
        />
      )
    );
  }

  return (
    <div className={styles.Launches}>
      <div className={styles.Latest}>
        {latestLaunch !== undefined ? (
          <>
            <h2>LATEST LAUNCH</h2>
            <LatestLaunch
              showMoreDetailsButton
              details={latestLaunch.details}
              launchName={latestLaunch.name}
              date_local={latestLaunch.date_local}
              date_utc={latestLaunch.date_utc}
              rocketName={latestLaunch.rocket.name}
              launchSiteName={latestLaunch.launchpad.full_name}
              flightNumber={latestLaunch.flight_number}
              patchImg={latestLaunch.links.patch.small}
              success={latestLaunch.success}
              failures={latestLaunch.failures}
              launchId={latestLaunch.id}
            />
          </>
        ) : null}
      </div>
      <div className={styles.Content}>
        <div className={styles.ButtonsWrapper}>
          <Button
            selected={showUpcomingLaunches}
            clicked={showUpcomingLaunchesHandler}
            name="UPCOMING LAUNCHES"
          />
          <Button
            selected={showPastLaunches}
            clicked={showPastLaunchesHandler}
            name="PAST LAUNCHES"
          />
        </div>

        {upcomingLaunches !== undefined && showUpcomingLaunches
          ? upcomingLaunches.docs.map((launch, index) => (
              <LaunchShortInfo
                key={index}
                launchName={launch.name}
                launchDateUtc={launch.date_utc}
                rocketName={launch.rocket.name}
                launchSiteName={launch.launchpad.full_name}
                customer={launch.payloads[0].customers[0]}
                flightNumber={launch.flight_number}
              />
            ))
          : null}

        {pastLaunches !== undefined && showPastLaunches ? (
          <InfiniteScroll
            pageStart={0}
            loadMore={FetchPastLaunches}
            hasMore={pastLaunches.hasNextPage}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }>
            {pastLaunchesArr}
          </InfiniteScroll>
        ) : null}

        {/* {pastLaunches !== undefined && showPastLaunches
          ? 
          pastLaunches.docs.map((launch, index) => (
              <LaunchShortInfo
                key={index}
                launchName={launch.name}
                launchDateUtc={launch.date_utc}
                rocketName={launch.rocket.name}
                launchSiteName={launch.launchpad.full_name}
                customer={launch.payloads[0].customers[0]}
                flightNumber={launch.flight_number}
              />
            ))
          : null} */}
      </div>
    </div>
  );
};

export default Launches;
