import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getLatLngObj } from "tle.js";
import IStarlink from "../../Models/IStarlink";
import Globe from "react-globe.gl";

var ReactTHREE = require("react-three");
var THREE = require("three");

interface ITest {
  lat: number;
  lng: number;
  alt: number;
  radius: number;
  color: string;
}

const Starlink = () => {
  const [starlink, setStarlink] = useState<IStarlink | undefined>(undefined);

  useEffect(() => {
    axios
      .get<IStarlink>(
        "https://api.spacexdata.com/v4/starlink/5eed770f096e59000698560d"
      )
      .then((res) => {
        setStarlink(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);

  if (starlink) {
    const tle = `STARLINK-76
    1 44287U 19029BE  20359.39063386  .00003809  00000-0  86446-4 0  9995
    2 44287  52.9981  21.7980 0002221  70.6436 289.4810 15.45669892 89555`;
    const TLE0 = starlink?.spaceTrack.TLE_LINE0.substring(
      2,
      starlink?.spaceTrack.TLE_LINE0.length
    );
    console.log(TLE0);
    // const tle =
    //   TLE0 +
    //   " \n" +
    //   starlink?.spaceTrack.TLE_LINE1 +
    //   "\n" +
    //   starlink?.spaceTrack.TLE_LINE2;

    console.log(tle);
    const latLonObj = getLatLngObj(tle);
    console.log(latLonObj);
  }

  const globeEl = useRef();
  const [data, setData] = useState<ITest[]>([
    {
      lat: 52.39078,
      lng: 53.4922,
      alt: 550,
      radius: 10,
      color: "red",
    },
  ]);

  useEffect(() => {
    (function moveSpheres() {
      data.forEach((d) => (d.lat += 0.2));
      setData(data.slice());
      requestAnimationFrame(moveSpheres);
    })();
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      customLayerData={data}
      customThreeObject={(d: any) =>
        new THREE.Mesh(
          new THREE.SphereBufferGeometry(d.radius),
          new THREE.MeshLambertMaterial({ color: d.color })
        )
      }
    />
  );
};

export default Starlink;
