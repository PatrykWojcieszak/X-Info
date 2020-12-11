import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetch } from "../../Hooks/useFetch";
import { Link } from "react-router-dom";

//COMPONENTS
import LaunchExtendedInfo from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";
import InfoLine from "../shared/InfoLine/InfoLine";
import Gallery from "../shared/Gallery/Gallery";
import CrewPerson from "./CrewPerson/CrewPerson";
import Ship from "./Ship/Ship";
import MediaLink from "./MediaLink/MediaLink";

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

//OTHER
import { pageVariantsAnim } from "../../Animations/Animations_motion";

const endpointURL = "https://api.spacexdata.com/v4/launches/query";

const Launch = () => {
  const { flight_number } = useParams();
  const query = LaunchQuery;
  query.query.flight_number = flight_number;

  const [launch, loadingLaunch, invokeLaunch] = useFetch<ILaunch>(
    endpointURL,
    query
  );

  useEffect(() => {
    invokeLaunch();
  }, [invokeLaunch]);

  //ROCKET IMAGE
  let rocketImg = <img src={falcon9} alt="Falcon 9" />;

  if (launch.docs[0]?.rocket.name === "Falcon 1")
    rocketImg = <img src={falcon1} alt="Falcon 1" />;
  else if (launch.docs[0]?.rocket.name === "Falcon 9")
    rocketImg = <img src={falcon9} alt="Falcon 9" />;
  else if (launch.docs[0]?.rocket.name === "Falcon Heavy")
    rocketImg = <img src={fhheavy} alt="Falcon Heavy" />;
  else if (launch.docs[0]?.rocket.name === "Starship")
    rocketImg = <img src={starship} alt="Starship" />;

  //CREW COMPONENTS
  let crew = <></>;
  if (launch.docs[0] !== undefined && launch.docs[0].crew.length > 0) {
    crew = (
      <div className={styles.AdditionalInfo}>
        <h2>CREW</h2>
        <div className={styles.AdditionalInfo__Content}>
          {launch.docs[0].crew.map((crew, index) => (
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
  if (launch.docs[0] !== undefined && launch.docs[0].ships.length > 0) {
    ship = (
      <div className={styles.AdditionalInfo}>
        <h2>USED SHIPS</h2>
        <div className={styles.AdditionalInfo__Content}>
          {launch.docs[0].ships.map((ship, index) => (
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
      {launch.docs[0] !== undefined ? (
        <LaunchExtendedInfo
          showMoreDetailsButton={false}
          details={launch.docs[0].details}
          launchName={launch.docs[0].name}
          date_local={launch.docs[0].date_local}
          date_utc={launch.docs[0].date_utc}
          rocketName={launch.docs[0].rocket.name}
          launchSiteName={launch.docs[0].launchpad.full_name}
          flightNumber={launch.docs[0].flight_number}
          patchImg={launch.docs[0].links.patch.small}
          success={launch.docs[0].success}
          failures={launch.docs[0].failures}
          launchId={launch.docs[0].id}
        />
      ) : null}
      <div className={styles.Row}>
        <Link to={`/vehicles/${launch.docs[0]?.rocket.name}`}>
          <div className={styles.Rocket}>
            <h3>{launch.docs[0]?.rocket.name}</h3>
            {rocketImg}
          </div>
        </Link>
        <div className={styles.InfoContainer}>
          <div className={styles.InfoWrapper}>
            {launch.docs[0]?.payloads.map((payload, index) => (
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
            {launch.docs[0]?.cores.map((core, index) => (
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
          src={`https://www.youtube.com/embed/${launch.docs[0]?.links.youtube_id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
      {launch.docs[0]?.links.flickr.original.length > 0 ? (
        <Gallery images={launch.docs[0].links.flickr.original} />
      ) : null}
      <div className={styles.MediaContainer}>
        {launch.docs[0]?.links.reddit.campaign !== null ? (
          <MediaLink
            name="CAMPAIGN"
            icon="reddit-alien"
            brand
            link={launch.docs[0]?.links.reddit.campaign}
          />
        ) : null}

        {launch.docs[0]?.links.reddit.launch !== null ? (
          <MediaLink
            name="LAUNCH"
            icon="reddit-alien"
            brand
            link={launch.docs[0]?.links.reddit.launch}
          />
        ) : null}

        {launch.docs[0]?.links.reddit.media !== null ? (
          <MediaLink
            name="MEDIA"
            icon="reddit-alien"
            brand
            link={launch.docs[0]?.links.reddit.media}
          />
        ) : null}

        {launch.docs[0]?.links.wikipedia !== null ? (
          <MediaLink
            name="WIKIPEDIA"
            icon="wikipedia-w"
            brand
            link={launch.docs[0]?.links.wikipedia}
          />
        ) : null}

        {launch.docs[0]?.links.article !== null ? (
          <MediaLink
            name="ARTICLE"
            icon="file-alt"
            brand={false}
            link={launch.docs[0]?.links.article}
          />
        ) : null}

        {launch.docs[0]?.links.presskit !== null ? (
          <MediaLink
            name="PRESS KIT"
            icon="newspaper"
            brand={false}
            link={launch.docs[0]?.links.presskit}
          />
        ) : null}
      </div>
    </motion.div>
  );
};

export default Launch;
