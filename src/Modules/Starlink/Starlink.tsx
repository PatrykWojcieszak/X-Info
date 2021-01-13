import React, { useEffect, useState, useCallback } from "react";
import { getLatLngObj } from "tle.js";
import Globe from "react-globe.gl";
import { connect } from "react-redux";
import { motion } from "framer-motion";

//QUERieS
import { fetchStarlink } from "../../Store/Starlink/actions";

//STYLES
import styles from "./Starlink.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";
import StarlinkInfo from "./StarlinkInfo/StarlinkInfo";
import ILaunch from "../../Models/ILaunch";
import IGlobePoint from "../../Models/IGlobePoint";

const Starlink = (props) => {
  const { onFetchStarlink, starlinks } = props;
  const [showStarlinkInfo, setShowStarlinkInfo] = useState(false);
  const [starlinkInfoData, setStarlinkInfoData] = useState<any>({});

  useEffect(() => {
    onFetchStarlink();
    // const interval = setInterval(() => {
    //   onFetchStarlink();
    // }, 3000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, [onFetchStarlink]);

  const gData: IGlobePoint[] = [];

  starlinks.docs.forEach((starlink) => {
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
    console.log(point);
    setStarlinkInfoData(point);
    setShowStarlinkInfo(true);
  };

  if (gData) {
    globe = (
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsAnim}
      className={styles.Starlink}>
      <div className={styles.StarlinkInfo}>
        <h2>STARLINK</h2>
        <h3>
          <b>Starlink</b> is a satellite internet constellation being
          constructed by{" "}
          <a target="_blank" rel="noopener noreferrer" href="www.spacex.com">
            SpaceX
          </a>{" "}
          providing satellite Internet access.
        </h3>
        <h4>Starlinks on the orbit: {props.starlinks.docs.length}</h4>
      </div>
      {globe}
      {showStarlinkInfo && <StarlinkInfo starlink={starlinkInfoData} />}
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    starlinks: state.starlink.starlinks,
    loadingStarlinks: state.starlink.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchStarlink: () => dispatch(fetchStarlink()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Starlink);
