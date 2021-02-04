import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//COMPONENTS
import { Gallery, SEO, LaunchExtendedInfo } from "../Shared";
import { LaunchSkeleton } from "../Shared/Skeletons/LaunchSkeleton";
import { MediaSection } from "./MediaSection/MediaSection";
import { CrewList } from "./CrewList/CrewList";
import { ShipList } from "./ShipList/ShipList";
import { CoreList } from "./CoreList/CoreList";
import { PayloadList } from "./PayloadList/PayloadList";
import { YouTube } from "./YouTube/YouTube";

//STYLE
import fhheavy from "../../resources/images/falconHeavy.png";
import falcon1 from "../../resources/images/f1.png";
import starship from "../../resources/images/st.png";
import falcon9 from "../../resources/images/falcon9.png";
import styles from "./Launch.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//REDUX
import { fetchLaunch } from "../../Store/Launch/launchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/rootReducer";

//OTHER
import { launchPageTitle, launchPageDescription } from "../Shared/SEO/Tags";

const Launch = () => {
  const { flight_number } = useParams();

  const launch = useSelector((state: RootState) => state.launch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunch(flight_number));
  }, [dispatch, flight_number]);

  //ROCKET IMAGE
  let rocketImg = <img src={falcon9} alt="Falcon 9" />;

  if (launch.launch.docs[0]?.rocket.name === "Falcon 1")
    rocketImg = <img src={falcon1} alt="Falcon 1" />;
  else if (launch.launch.docs[0]?.rocket.name === "Falcon 9")
    rocketImg = <img src={falcon9} alt="Falcon 9" />;
  else if (launch.launch.docs[0]?.rocket.name === "Falcon Heavy")
    rocketImg = <img src={fhheavy} alt="Falcon Heavy" />;
  else if (launch.launch.docs[0]?.rocket.name === "Starship")
    rocketImg = <img src={starship} alt="Starship" />;

  let launchInformation = (
    <div className={styles.Launch}>
      <LaunchSkeleton />
    </div>
  );

  if (!launch.loading) {
    launchInformation = (
      <>
        <div className={styles.Launch}>
          <LaunchExtendedInfo
            showMoreDetailsButton={false}
            details={launch.launch.docs[0].details}
            launchName={launch.launch.docs[0].name}
            date_local={launch.launch.docs[0].date_local}
            date_utc={launch.launch.docs[0].date_utc}
            rocketName={launch.launch.docs[0].rocket.name}
            launchSiteName={launch.launch.docs[0].launchpad.full_name}
            flightNumber={launch.launch.docs[0].flight_number}
            patchImg={launch.launch.docs[0].links.patch.small}
            success={launch.launch.docs[0].success}
            failures={launch.launch.docs[0].failures}
            launchId={launch.launch.docs[0].id}
            date_precision={launch.launch.docs[0].date_precision}
          />

          <div className={styles.Row}>
            <Link to={`/vehicles/${launch.launch.docs[0]?.rocket.name}`}>
              <div className={styles.Rocket}>
                <h3>{launch.launch.docs[0]?.rocket.name}</h3>
                {rocketImg}
              </div>
            </Link>
            <div className={styles.InfoContainer}>
              <PayloadList payloadList={launch.launch.docs[0].payloads} />
              <CoreList coreList={launch.launch.docs[0].cores} />
            </div>
          </div>
          <CrewList crewList={launch.launch.docs[0].crew} />
          <ShipList shipList={launch.launch.docs[0].ships} />
          <YouTube youtubeId={launch.launch.docs[0].links.youtube_id} />
        </div>
        <div style={{ padding: "0 1rem" }}>
          {launch.launch.docs[0]?.links.flickr.original.length > 0 ? (
            <Gallery images={launch.launch.docs[0].links.flickr.original} />
          ) : null}
          <MediaSection links={launch.launch.docs[0]?.links} />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${launchPageTitle} - ${launch.launch.docs[0]?.flight_number}`}
        description={launchPageDescription}
      />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}>
        {launchInformation}
      </motion.div>
    </>
  );
};

export default Launch;
