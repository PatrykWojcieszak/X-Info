import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

//COMPONENTS
import { Gallery, SEO } from "../Shared";

//STYLES
import styles from "./Rocket.module.scss";
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//IMAGES
import falconheavy_img from "../../resources/images/falconHeavy.png";
import falcon1_img from "../../resources/images/falcon1.png";
import starship_img from "../../resources/images/st.png";
import falcon9_img from "../../resources/images/falcon9.png";

//REDUX
import { fetchRocket } from "../../Store/Rocket/rocketSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/rootReducer";

//OTHER
import { RocketSkeleton } from "../Shared/Skeletons/RocketSkeleton";
import { rocketPageTitle, rocketPageDescription } from "../Shared/SEO/Tags";
import { HeroImage } from "./HeroImage/HeroImage";
import { RocketDetails } from "./RocketDetails/RocketDetails";

const Rocket = () => {
  const { vehicle } = useParams();
  const rocket = useSelector((root: RootState) => root.rocket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket(vehicle));
  }, [dispatch, vehicle]);

  let rocketImg = "";

  if (vehicle === "Falcon 1") {
    rocketImg = falcon1_img;
  } else if (vehicle === "Falcon 9") {
    rocketImg = falcon9_img;
  } else if (vehicle === "Falcon Heavy") {
    rocketImg = falconheavy_img;
  }
  if (vehicle === "Starship") {
    rocketImg = starship_img;
  }

  return (
    <>
      <SEO
        title={`${rocketPageTitle} - ${vehicle}`}
        description={rocketPageDescription}
      />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Rocket}>
        <HeroImage vehicle={vehicle} />
        <div className={styles.Content}>
          {rocket.loading ? (
            <div style={{ width: "100%" }}>
              <RocketSkeleton />
            </div>
          ) : (
            <>
              <div className={styles.Rocket}>
                <img src={rocketImg} alt="rocket" />
              </div>
              <RocketDetails
                loading={rocket.loading}
                rocket={rocket.rocket.docs[0]}
              />
            </>
          )}
        </div>
        <div className={styles.GalleryWrapper}>
          {rocket.rocket.docs[0]?.flickr_images.length > 0 ? (
            <Gallery images={rocket.rocket.docs[0].flickr_images} />
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Rocket;
