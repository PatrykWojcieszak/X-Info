import React, { useEffect, useState, useCallback } from "react";
import { getLatLngObj } from "tle.js";
import Globe from "react-globe.gl";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { SEO } from "../Shared";
import { StarlinkInfo } from "./StarlinkInfo/StarlinkInfo";

//QUERieS
import { fetchStarlinks } from "../../Store/Starlink/starlinkSlice";
import { useSelector, useDispatch } from "react-redux";

//STYLES
import styles from "./Starlink.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";
import { RootState } from "../../Store/rootReducer";

//TYPES
import { GlobePoint } from "../../Types";
import { starlinkPageTitle, starlinkPageDescription } from "../Shared/SEO/Tags";

const Starlink = () => {
  const [showStarlinkInfo, setShowStarlinkInfo] = useState(false);
  const [starlinkInfoData, setStarlinkInfoData] = useState<any>({});
  const starlink = useSelector((root: RootState) => root.starlink);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchStarlinks());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const closeStarlinkInfoHandler = useCallback(() => {
    setShowStarlinkInfo(false);
  }, []);

  const gData: GlobePoint[] = [];

  starlink.starlinks.docs.forEach((starlink) => {
    const TLE0 = starlink?.spaceTrack.TLE_LINE0.substring(
      2,
      starlink?.spaceTrack.TLE_LINE0.length
    );

    const tle =
      TLE0 +
      " \n" +
      starlink?.spaceTrack.TLE_LINE1 +
      "\n" +
      starlink?.spaceTrack.TLE_LINE2;

    const latLonObj = getLatLngObj(tle);

    gData.push({
      lat: latLonObj.lat,
      lng: latLonObj.lng,
      alt: 0.9,
      radius: 0.01,
      color: "white",
      label: starlink.spaceTrack.OBJECT_NAME,
      launch: starlink.launch,
      version: starlink.version,
      velocity_kms: starlink.velocity_kms,
      height_km: starlink.height_km,
    });
  });

  let globe = <></>;

  const showStarlinkInfoHandler = (point: any) => {
    setStarlinkInfoData(point);
    setShowStarlinkInfo(true);
  };

  if (gData) {
    globe = (
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={gData}
        pointAltitude={0.001}
        pointColor="color"
        pointLabel="label"
        showGraticules
        pointRadius={0.35}
        onPointClick={(point, event) => showStarlinkInfoHandler(point)}
      />
    );
  }

  return (
    <>
      <SEO title={starlinkPageTitle} description={starlinkPageDescription} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Starlink}>
        <div className={styles.StarlinkInfo}>
          <h2>STARLINK</h2>
          <h3>
            <b>Starlink</b> {t("starlinkDescriptionPart1")}{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.spacex.com/">
              SpaceX
            </a>{" "}
            {t("starlinkDescriptionPart2")}
          </h3>
          <h4>
            {t("starlinkOnTheOrbit")}: {starlink.starlinks.docs.length}
          </h4>
        </div>
        {globe}
        <AnimatePresence>
          {showStarlinkInfo && (
            <StarlinkInfo
              starlink={starlinkInfoData}
              close={closeStarlinkInfoHandler}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Starlink;
