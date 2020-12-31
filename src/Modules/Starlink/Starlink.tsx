import React, { useEffect } from "react";
import { getLatLngObj } from "tle.js";
import Globe from "react-globe.gl";
import { connect } from "react-redux";

import styles from "./Starlink.module.scss";
import { motion } from "framer-motion";
import { pageVariantsAnim } from "../../Animations/Animations_motion";
import { fetchStarlink } from "../../Store/Starlink/actions";
interface IMapData {
  lat: number;
  lng: number;
  alt: number;
  radius: number;
  color: string;
  label: string;
}

const Starlink = (props) => {
  const { onFetchStarlink, starlinks } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      onFetchStarlink();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [onFetchStarlink]);

  const gData: IMapData[] = [];
  if (starlinks) {
    starlinks.docs.map((starlink) => {
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
      });
    });
  }

  let globe = <></>;

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
