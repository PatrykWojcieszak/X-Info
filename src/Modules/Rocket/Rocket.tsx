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
import { RocketType } from "../../Types";

const Rocket = () => {
  const { id } = useParams();
  const rocket = useSelector((root: RootState) => root.rocket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket(id));
  }, [dispatch, id]);

  let rocketImg = "";

  if (id === RocketType.f1) {
    rocketImg = falcon1_img;
  } else if (id === RocketType.f9) {
    rocketImg = falcon9_img;
  } else if (id === RocketType.fh) {
    rocketImg = falconheavy_img;
  }
  if (id === RocketType.starship) {
    rocketImg = starship_img;
  }

  let rocketContainer = (
    <div style={{ width: "100%" }}>
      <RocketSkeleton />
    </div>
  );

  if (!rocket.loading)
    rocketContainer = (
      <>
        <div className={styles.Rocket}>
          <img src={rocketImg} alt="rocket" />
        </div>
        <RocketDetails rocket={rocket.rocket.docs[0]} />
      </>
    );

  return (
    <>
      <SEO
        title={`${rocketPageTitle} - ${rocket.rocket.docs[0]?.name}`}
        description={rocketPageDescription}
      />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}
        className={styles.Rocket}>
        <HeroImage vehicle={id} />
        <div className={styles.Content}>{rocketContainer}</div>
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
