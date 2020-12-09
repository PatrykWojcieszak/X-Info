import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { motion } from "framer-motion";

//COMPONENTS
import LaunchExtendedInfo from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";
import InfoLine from "../shared/InfoLine/InfoLine";
import Gallery from "../shared/Gallery/Gallery";
import CrewPerson from "./CrewPerson/CrewPerson";
import Ship from "./Ship/Ship";

//STYLE
import fhheavy from "../../resources/images/falconHeavy.png";
import falcon1 from "../../resources/images/f1.png";
import starship from "../../resources/images/st.png";
import falcon9 from "../../resources/images/falcon9.png";
import styles from "./Launch.module.scss";

//MODELS
import ILaunch from "../../Models/ILaunch";

//QUERIES
import LaunchQuery from "../../Queries/LaunchQuery";
import IQueryResult from "../../Models/IQueryResult";
import MediaLink from "./MediaLink/MediaLink";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

const Launch = () => {
  const { flight_number } = useParams();

  const [launch, setLaunch] = useState<ILaunch | undefined>(undefined);

  useEffect(() => {
    const query = LaunchQuery;
    query.query.flight_number = flight_number;

    Axios.post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      query
    )
      .then((res) => {
        console.log(res.data);
        setLaunch(res.data.docs[0]);
      })
      .catch((err) => {});
  }, [flight_number]);

  //ROCKET IMAGE
  let rocketImg = <img src={falcon9} alt="Falcon 9" />;

  if (launch?.rocket.name === "Falcon 1")
    rocketImg = <img src={falcon1} alt="Falcon 1" />;
  else if (launch?.rocket.name === "Falcon 9")
    rocketImg = <img src={falcon9} alt="Falcon 9" />;
  else if (launch?.rocket.name === "Falcon Heavy")
    rocketImg = <img src={fhheavy} alt="Falcon Heavy" />;
  else if (launch?.rocket.name === "Starship")
    rocketImg = <img src={starship} alt="Starship" />;

  //CREW COMPONENTS
  let crew = <></>;
  if (launch !== undefined && launch.crew.length > 0) {
    crew = (
      <div className={styles.AdditionalInfo}>
        <h2>CREW</h2>
        <div className={styles.AdditionalInfo__Content}>
          {launch.crew.map((crew, index) => (
            <CrewPerson
              key={index}
              name={crew.name}
              img={crew.image}
              agency={crew.agency}
            />
          ))}
        </div>
      </div>
    );
  }

  //SHIP COMPONENTS
  let ship = <></>;
  if (launch !== undefined && launch.ships.length > 0) {
    ship = (
      <div className={styles.AdditionalInfo}>
        <h2>USED SHIPS</h2>
        <div className={styles.AdditionalInfo__Content}>
          {launch.ships.map((ship, index) => (
            <Ship key={index} name={ship.name} img={ship.image} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.Launch}>
      {launch !== undefined ? (
        <LaunchExtendedInfo
          showMoreDetailsButton={false}
          details={launch.details}
          launchName={launch.name}
          date_local={launch.date_local}
          date_utc={launch.date_utc}
          rocketName={launch.rocket.name}
          launchSiteName={launch.launchpad.full_name}
          flightNumber={launch.flight_number}
          patchImg={launch.links.patch.small}
          success={launch.success}
          failures={launch.failures}
          launchId={launch.id}
        />
      ) : null}
      <div className={styles.Row}>
        <div className={styles.Rocket}>
          <h3>{launch?.rocket.name}</h3>
          {rocketImg}
        </div>
        <div className={styles.InfoContainer}>
          <div className={styles.InfoWrapper}>
            {launch?.payloads.map((payload, index) => (
              <div key={index}>
                <h2>PAYLOAD #{index + 1}</h2>
                <InfoLine title="NAME" value={`${payload.name}`} />
                <InfoLine title="CUSTOMER" value={`${payload.customers}`} />
                <InfoLine
                  title="MANUFACTURER"
                  value={`${payload.manufacturers}`}
                />
                <InfoLine title="TYPE" value={`${payload.type}`} />
                <InfoLine
                  title="MASS"
                  value={`${payload.mass_kg} kg | ${payload.mass_lbs} lb`}
                />
                <InfoLine title="ORBIT" value={`${payload.orbit}`} />
              </div>
            ))}
          </div>
          <div className={styles.InfoWrapper}>
            {launch?.cores.map((core, index) => (
              <div key={index}>
                <h2>CORE #{index + 1}</h2>
                <InfoLine
                  title="LANDING"
                  value={core.landing_success ? "SUCCESSFUL" : "FAILED"}
                />
                <InfoLine title="LANDING TYPE" value={core.landing_type} />
                <InfoLine title="LANDING PAD" value={core.landpad.name} />
                <InfoLine title="REUSED" value={core.reused ? "YES" : "NO"} />
                <InfoLine title="FLIGHTS" value={`${core.flight}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {crew}
      {ship}
      <div className={styles.YoutubeContainer}>
        <iframe
          title="spacex video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${launch?.links.youtube_id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
      {launch !== undefined ? (
        <Gallery images={launch.links.flickr.original} />
      ) : null}
      <div className={styles.MediaContainer}>
        {launch?.links.reddit.campaign !== null ? (
          <MediaLink
            name="CAMPAIGN"
            icon="reddit-alien"
            brand
            link={launch?.links.reddit.campaign}
          />
        ) : null}

        {launch?.links.reddit.launch !== null ? (
          <MediaLink
            name="LAUNCH"
            icon="reddit-alien"
            brand
            link={launch?.links.reddit.launch}
          />
        ) : null}

        {launch?.links.reddit.media !== null ? (
          <MediaLink
            name="MEDIA"
            icon="reddit-alien"
            brand
            link={launch?.links.reddit.media}
          />
        ) : null}

        {launch?.links.wikipedia !== null ? (
          <MediaLink
            name="WIKIPEDIA"
            icon="wikipedia-w"
            brand
            link={launch?.links.wikipedia}
          />
        ) : null}

        {launch?.links.article !== null ? (
          <MediaLink
            name="ARTICLE"
            icon="file-alt"
            brand={false}
            link={launch?.links.article}
          />
        ) : null}

        {launch?.links.presskit !== null ? (
          <MediaLink
            name="PRESS KIT"
            icon="newspaper"
            brand={false}
            link={launch?.links.presskit}
          />
        ) : null}
      </div>
    </motion.div>
  );
};

export default Launch;
