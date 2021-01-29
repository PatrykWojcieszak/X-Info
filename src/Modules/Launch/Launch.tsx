import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Gallery, SEO, InfoLine, LaunchExtendedInfo } from "../Shared";
import { CrewPerson } from "./CrewPerson/CrewPerson";
import { Ship } from "./Ship/Ship";
import { MediaLink } from "./MediaLink/MediaLink";
import { LaunchSkeleton } from "../Shared/Skeletons/LaunchSkeleton";

//STYLE
import fhheavy from "../../resources/images/falconHeavy.png";
import falcon1 from "../../resources/images/f1.png";
import starship from "../../resources/images/st.png";
import falcon9 from "../../resources/images/falcon9.png";
import styles from "./Launch.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//REDUX
import { fetchLaunch } from "../../Store/Launch/actions";
import { useDispatch, useSelector } from "react-redux";

//OTHER
import { launchPageTitle, launchPageDescription } from "../Shared/SEO/Tags";
import { RootState } from "../../Store";

const Launch = (props) => {
  const { flight_number } = useParams();
  const { t } = useTranslation();

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

  //CREW COMPONENTS
  let crew = <></>;
  if (launch.launch.docs[0] && launch.launch.docs[0].crew.length > 0) {
    crew = (
      <div className={styles.AdditionalInfo}>
        <h2>CREW</h2>
        <div className={styles.AdditionalInfo__Content}>
          {launch.launch.docs[0].crew.map((crew, index) => (
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
  if (launch.launch.docs[0] && launch.launch.docs[0].ships.length > 0) {
    ship = (
      <div className={styles.AdditionalInfo}>
        <h2>{t("usedShips")}</h2>
        <div className={styles.AdditionalInfo__Content}>
          {launch.launch.docs[0].ships.map((ship, index) => (
            <Ship key={index} name={ship.name} img={ship.image} />
          ))}
        </div>
      </div>
    );
  }

  let cores = (
    <>
      <div className={styles.InfoWrapper}>
        {launch.launch.docs[0]?.cores.map(
          (core, index) =>
            core.landpad && (
              <div key={index}>
                <h2>
                  {t("core")} #{index + 1}
                </h2>
                <InfoLine
                  title={t("landing")}
                  value={
                    core.landing_success
                      ? t("launchSuccessful")
                      : t("launchFailure")
                  }
                />
                {core.landing_type && (
                  <InfoLine
                    title={t("landingType")}
                    value={core.landing_type}
                  />
                )}
                {core.landpad.name && (
                  <InfoLine title={t("landingPad")} value={core.landpad.name} />
                )}
                <InfoLine
                  title={t("reused")}
                  value={core.reused ? t("yes") : t("no")}
                />
                {core.flight && (
                  <InfoLine title={t("flights")} value={`${core.flight}`} />
                )}
              </div>
            )
        )}
      </div>
    </>
  );

  let youtube = <></>;
  if (launch.launch.docs[0]?.links.youtube_id) {
    youtube = (
      <div className={styles.YoutubeContainer}>
        <iframe
          title="spacex video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${launch.launch.docs[0]?.links.youtube_id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    );
  }

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
              <div className={styles.InfoWrapper}>
                {launch.launch.docs[0]?.payloads.map((payload, index) => (
                  <div key={index}>
                    <h2>
                      {t("payload")} #{index + 1}
                    </h2>
                    {payload.name && (
                      <InfoLine title={t("name")} value={`${payload.name}`} />
                    )}
                    {payload.customers[0] && (
                      <InfoLine
                        title={t("customer")}
                        value={`${payload.customers}`}
                      />
                    )}
                    {payload.manufacturers.length !== 0 ? (
                      <InfoLine
                        title={t("manufacturer")}
                        value={`${payload.manufacturers}`}
                      />
                    ) : null}
                    {payload.type && (
                      <InfoLine title={t("type")} value={`${payload.type}`} />
                    )}
                    {(payload.mass_kg || payload.mass_lbs) && (
                      <InfoLine
                        title={t("mass")}
                        value={`${payload.mass_kg} kg | ${payload.mass_lbs} lb`}
                      />
                    )}
                    {payload.orbit && (
                      <InfoLine title={t("orbit")} value={`${payload.orbit}`} />
                    )}
                  </div>
                ))}
              </div>
              {cores}
            </div>
          </div>
          {crew}
          {ship}
          {youtube}
        </div>
        <div style={{ padding: "0 1rem" }}>
          {launch.launch.docs[0]?.links.flickr.original.length > 0 ? (
            <Gallery images={launch.launch.docs[0].links.flickr.original} />
          ) : null}
          <div className={styles.MediaContainer}>
            {launch.launch.docs[0]?.links.reddit.campaign && (
              <MediaLink
                name={t("campaign")}
                icon="reddit-alien"
                brand
                link={launch.launch.docs[0]?.links.reddit.campaign}
              />
            )}

            {launch.launch.docs[0]?.links.reddit.launch && (
              <MediaLink
                name={t("launch")}
                icon="reddit-alien"
                brand
                link={launch.launch.docs[0]?.links.reddit.launch}
              />
            )}

            {launch.launch.docs[0]?.links.reddit.media && (
              <MediaLink
                name={t("media")}
                icon="reddit-alien"
                brand
                link={launch.launch.docs[0]?.links.reddit.media}
              />
            )}

            {launch.launch.docs[0]?.links.wikipedia && (
              <MediaLink
                name={t("wikipedia")}
                icon="wikipedia-w"
                brand
                link={launch.launch.docs[0]?.links.wikipedia}
              />
            )}

            {launch.launch.docs[0]?.links.article && (
              <MediaLink
                name={t("article")}
                icon="file-alt"
                brand={false}
                link={launch.launch.docs[0]?.links.article}
              />
            )}

            {launch.launch.docs[0]?.links.presskit && (
              <MediaLink
                name={t("pressKit")}
                icon="newspaper"
                brand={false}
                link={launch.launch.docs[0]?.links.presskit}
              />
            )}
          </div>
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
