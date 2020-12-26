import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getLatLngObj } from "tle.js";
import IStarlink from "../../Models/IStarlink";
import Globe from "react-globe.gl";
import IQueryResult from "../../Models/IQueryResult";
import StarlinkQuery from "../../Queries/StarlinkQuery";
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
  }, []);

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
      {globe}
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    starlinks: state.starlink.starlinks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchStarlink: () => dispatch(fetchStarlink()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Starlink);
