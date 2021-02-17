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
import { RocketType } from "../../Types";

const Launch = () => {
  const { id } = useParams();

  const launch = useSelector((state: RootState) => state.launch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunch(id));
  }, [dispatch, id]);

  //ROCKET IMAGE
  let rocketImg = <></>;

  if (launch.launch.docs[0]?.rocket.id === RocketType.f1)
    rocketImg = <img src={falcon1} alt="Falcon 1" />;
  else if (launch.launch.docs[0]?.rocket.id === RocketType.f9)
    rocketImg = <img src={falcon9} alt="Falcon 9" />;
  else if (launch.launch.docs[0]?.rocket.id === RocketType.fh)
    rocketImg = <img src={fhheavy} alt="Falcon Heavy" />;
  else if (launch.launch.docs[0]?.rocket.id === RocketType.starship)
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
            launch={launch.launch.docs[0]}
          />
          <div className={styles.Row}>
            <Link to={`/vehicles/${launch.launch.docs[0]?.rocket.id}`}>
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
