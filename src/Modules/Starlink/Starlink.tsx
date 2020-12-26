import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getLatLngObj } from "tle.js";
import IStarlink from "../../Models/IStarlink";
import Globe from "react-globe.gl";
import * as THREE from "three";
import IQueryResult from "../../Models/IQueryResult";
import StarlinkQuery from "../../Queries/StarlinkQuery";

import styles from "./Starlink.module.scss";
interface ITest {
  lat: number;
  lng: number;
  alt: number;
  radius: number;
  color: string;
}

const Starlink = () => {
  const [starlink, setStarlink] = useState<IQueryResult<IStarlink> | undefined>(
    undefined
  );

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .post<IQueryResult<IStarlink>>(
          "https://api.spacexdata.com/v4/starlink/query",
          StarlinkQuery
        )
        .then((res) => {
          setStarlink(res.data);
        })
        .catch((err) => {});
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const gData: ITest[] = [];
  if (starlink) {
    starlink.docs.map((starlink) => {
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

  if (gData.length > 0) {
    globe = (
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={gData}
        pointAltitude={0.001}
        pointColor="color"
      />
    );
  }

  return <div className={styles.Starlink}>{globe}</div>;
};

export default Starlink;
