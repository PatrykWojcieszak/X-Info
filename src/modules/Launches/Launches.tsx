import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";

//COMPONENTS
import Button from "../shared/Button/Button";
import LaunchShortInfo from "../shared/LaunchShortInfo/LaunchShortInfo";
import LatestLaunch from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";

//STYLES
import styles from "./Launches.module.scss";

//MODELS
import ILaunch from "../../Models/ILaunch";

//QUERIES
import LatestLaunchQuery from "../../Queries/LatestLaunchQuery";
import PastLaunchesQuery from "../../Queries/PastLaunchesQuery";
import UpcomingLaunchesQuery from "../../Queries/UpcomingLaunchesQuery";

//OTHER
import {
  pageVariantsAnim,
  showLaunchesList,
} from "../../Animations/Animations_motion";

const endpointURL = "https://api.spacexdata.com/v4/launches/query";

const Launches = () => {
  const [showPastLaunches, setShowPastLaunches] = useState(false);
  const [showUpcomingLaunches, setShowUpcomingLaunches] = useState(true);
  const { launchType } = useParams();

  const [
    latestLaunch,
    loadingLatestLaunch,
    invokeFetchLatest,
  ] = useFetch<ILaunch>(endpointURL, LatestLaunchQuery);

  const [
    upcomingLaunches,
    loadingUpcomingLaunches,
    invokeFetchUpcoming,
  ] = useFetch<ILaunch>(endpointURL, UpcomingLaunchesQuery);

  const [
    pastLaunches,
    loadingPastLaunches,
    invokeFetchPast,
  ] = useFetch<ILaunch>(endpointURL, PastLaunchesQuery);

  const showPastLaunchesHandler = () => {
    setShowPastLaunches(true);
    setShowUpcomingLaunches(false);
  };

  const showUpcomingLaunchesHandler = () => {
    setShowPastLaunches(false);
    setShowUpcomingLaunches(true);
  };

  useEffect(() => {
    invokeFetchLatest();
    invokeFetchUpcoming();
    invokeFetchPast();

    if (launchType === "past") {
      showPastLaunchesHandler();
    }
  }, [invokeFetchLatest, invokeFetchUpcoming, invokeFetchPast, launchType]);

  const FetchPastLaunches = () => {
    let query = PastLaunchesQuery;

    if (pastLaunches.docs.length > 0) {
      query.options.limit += 10;
      // query.options.page = pastLaunches.nextPage;
    }

    invokeFetchPast();
  };

  let upcomingLaunchesArr = <></>;
  if (loadingUpcomingLaunches === false) {
    upcomingLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        style={{ width: "100%" }}>
        {upcomingLaunches.docs.map((launch, index) => (
          <LaunchShortInfo
            key={index}
            launchName={launch?.name}
            launchDateUtc={launch?.date_utc}
            rocketName={launch?.rocket.name}
            launchSiteName={launch?.launchpad.full_name}
            customer={launch.payloads[0].customers[0]}
            flightNumber={launch?.flight_number}
            nationality={launch.payloads[0].nationalities[0]}
          />
        ))}
      </motion.div>
    );
  }

  let pastLaunchesArr = <></>;
  if (loadingPastLaunches === false) {
    pastLaunchesArr = (
      <motion.div
        variants={showLaunchesList}
        initial="initial"
        animate="in"
        exit="out"
        style={{ width: "100%" }}>
        {pastLaunches.docs.map((launch, index) => (
          <Link key={index} to={`/launch/${launch.flight_number}`}>
            <LaunchShortInfo
              launchName={launch.name}
              launchDateUtc={launch.date_utc}
              rocketName={launch.rocket.name}
              launchSiteName={launch.launchpad.full_name}
              customer={launch.payloads[0].customers[0]}
              flightNumber={launch.flight_number}
              success={launch.success}
              nationality={launch.payloads[0].nationalities[0]}
            />
          </Link>
        ))}
        {pastLaunches.nextPage !== null ? (
          <div style={{ marginTop: "2rem" }}>
            <Button name="LOAD MORE" clicked={FetchPastLaunches} />
          </div>
        ) : null}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.Launches}>
      <div className={styles.Latest}>
        {latestLaunch.docs[0] !== undefined ? (
          <>
            <h2>LATEST LAUNCH</h2>
            <LatestLaunch
              showMoreDetailsButton
              details={latestLaunch.docs[0].details}
              launchName={latestLaunch.docs[0].name}
              date_local={latestLaunch.docs[0].date_local}
              date_utc={latestLaunch.docs[0].date_utc}
              rocketName={latestLaunch.docs[0].rocket.name}
              launchSiteName={latestLaunch.docs[0].launchpad.full_name}
              flightNumber={latestLaunch.docs[0].flight_number}
              patchImg={latestLaunch.docs[0].links.patch.small}
              success={latestLaunch.docs[0].success}
              failures={latestLaunch.docs[0].failures}
              launchId={latestLaunch.docs[0].id}
            />
          </>
        ) : null}
      </div>
      <div className={styles.Content}>
        {loadingUpcomingLaunches === false || loadingPastLaunches === false ? (
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
        ) : null}

        <AnimatePresence>
          {showUpcomingLaunches ? upcomingLaunchesArr : null}
        </AnimatePresence>

        <AnimatePresence>
          {showPastLaunches ? pastLaunchesArr : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Launches;
