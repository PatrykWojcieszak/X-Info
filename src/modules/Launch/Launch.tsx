import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LaunchExtendedInfo from "../shared/LaunchExtendedInfo/LaunchExtendedInfo";

import InfoLine from "../shared/InfoLine/InfoLine";
import Gallery from "../shared/Gallery/Gallery";
import CrewPerson from "./CrewPerson/CrewPerson";
import Ship from "./Ship/Ship";

import fhheavy from "../../resources/images/falconHeavy.png";
import styles from "./Launch.module.scss";

const images = [
  "https://cdni0.trtworld.com/w960/h540/q75/76923_USASpaceX_1587156063102.jpeg",
  "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2020/01/49399916862_cd676f67f6_o-copy.jpg",
  "https://e3.365dm.com/20/11/768x432/skynews-spacex-falcon-9-rocket_5173738.jpg?20201116003945",
  "https://highxtar.com/wp-content/uploads/2020/05/highxtar-spacex-elon-musk-occupy-mars2.jpg",
  "https://www.nasa.gov/sites/default/files/thumbnails/image/crew-1_certification_feature_main.jpg",
];

const Launch = () => {
  return (
    <div className={styles.Launch}>
      <LaunchExtendedInfo showMoreDetailsButton={false} />
      <div className={styles.Row}>
        <div className={styles.Rocket}>
          <h3>FALCON HEAVY</h3>
          <img src={fhheavy} alt="rocket" />
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
      <div className={styles.YoutubeContainer}>
        <iframe
          title="spacex video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/J442-ti-Dhg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
      <div className={styles.AdditionalInfo}>
        <h2>CREW</h2>
        <div className={styles.AdditionalInfo__Content}>
          <CrewPerson />
          <CrewPerson />
          <CrewPerson />
          <CrewPerson />
        </div>
      </div>
      <div className={styles.AdditionalInfo}>
        <h2>USED SHIPS</h2>
        <div className={styles.AdditionalInfo__Content}>
          <Ship />
          <Ship />
          <Ship />
        </div>
      </div>
      <Gallery images={images} />
      <div className={styles.SocialsContainer}>
        <div className={styles.Icon}>
          <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
          <h4>CAMPAIGN</h4>
        </div>
        <div className={styles.Icon}>
          <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
          <h4>LAUNCH</h4>
        </div>
        <div className={styles.Icon}>
          <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
          <h4>MEDIA</h4>
        </div>
        <div className={styles.Icon}>
          <FontAwesomeIcon icon={["fab", "wikipedia-w"]} />
          <h4>WIKIPEDIA</h4>
        </div>
        <div className={styles.Icon}>
          <FontAwesomeIcon icon="file-alt" />
          <h4>ARTICLE</h4>
        </div>
        <div className={styles.Icon}>
          <FontAwesomeIcon icon="newspaper" />
          <h4>PRESS KIT</h4>
        </div>
      </div>
    </div>
  );
};

export default Launch;
