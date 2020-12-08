import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import Axios from "axios";

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
import LinkBtn from "./LinkBtn/LinkBtn";

//IMAGES
const images = [
  "https://cdni0.trtworld.com/w960/h540/q75/76923_USASpaceX_1587156063102.jpeg",
  "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2020/01/49399916862_cd676f67f6_o-copy.jpg",
  "https://e3.365dm.com/20/11/768x432/skynews-spacex-falcon-9-rocket_5173738.jpg?20201116003945",
  "https://highxtar.com/wp-content/uploads/2020/05/highxtar-spacex-elon-musk-occupy-mars2.jpg",
  "https://www.nasa.gov/sites/default/files/thumbnails/image/crew-1_certification_feature_main.jpg",
];

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
    <div className={styles.Launch}>
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
            <h2>PAYLOAD #1</h2>
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
          </div>
          <div className={styles.InfoWrapper}>
            <h2>CORE</h2>
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
            <InfoLine title="MASS" value="70 kg | 229.6 lb" />
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
      <Gallery images={images} />
      <div className={styles.SocialsContainer}>
        {launch?.links.reddit.campaign !== null ? (
          <LinkBtn
            name="CAMPAIGN"
            icon="reddit-alien"
            brand
            link={launch?.links.reddit.campaign}
          />
        ) : null}

        {launch?.links.reddit.launch !== null ? (
          <LinkBtn
            name="LAUNCH"
            icon="reddit-alien"
            brand
            link={launch?.links.reddit.launch}
          />
        ) : null}

        {launch?.links.reddit.media !== null ? (
          <LinkBtn
            name="MEDIA"
            icon="reddit-alien"
            brand
            link={launch?.links.reddit.media}
          />
        ) : null}

        {launch?.links.wikipedia !== null ? (
          <LinkBtn
            name="WIKIPEDIA"
            icon="wikipedia-w"
            brand
            link={launch?.links.wikipedia}
          />
        ) : null}

        {launch?.links.article !== null ? (
          <LinkBtn
            name="ARTICLE"
            icon="file-alt"
            brand={false}
            link={launch?.links.article}
          />
        ) : null}

        {launch?.links.presskit !== null ? (
          <LinkBtn
            name="PRESS KIT"
            icon="newspaper"
            brand={false}
            link={launch?.links.presskit}
          />
        ) : null}

        {/* <div className={styles.Icon}>
          <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
          <h4>CAMPAIGN</h4>
        </div>
        <div className={styles.Icon}>
          <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
          <h4>LAUNCH</h4>
        </div> */}
        {/* <div className={styles.Icon}>
          <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
          <h4>MEDIA</h4>
        </div> */}
        {/* <div className={styles.Icon}>
          <FontAwesomeIcon icon={["fab", "wikipedia-w"]} />
          <h4>WIKIPEDIA</h4>
        </div> */}
        {/* <div className={styles.Icon}>
          <FontAwesomeIcon icon="file-alt" />
          <h4>ARTICLE</h4>
        </div>
        <div className={styles.Icon}>
          <FontAwesomeIcon icon="newspaper" />
          <h4>PRESS KIT</h4>
        </div> */}
      </div>
    </div>
  );
};

export default Launch;
