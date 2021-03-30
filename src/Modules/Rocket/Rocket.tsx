import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";

//STYLES
import { pageVariantsAnim } from "../../Animations/Animations_motion";

//REDUX
import { fetchRocket } from "../../Store/Rocket/rocketSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/rootReducer";

//OTHER
import { RocketSkeleton } from "../Shared/Skeletons/RocketSkeleton";
import { rocketPageTitle, rocketPageDescription } from "../Shared/SEO/Tags";
import { HeroImage } from "./HeroImage/HeroImage";
import { RocketDetails } from "./RocketDetails/RocketDetails";
import styled from "styled-components/macro";
import { device } from "../../resources/styles/helpers/breakpoints";
import "react-image-gallery/styles/css/image-gallery.css";
import { SEO } from "../Shared";

const Rocket = () => {
  const { id } = useParams();
  const rocket = useSelector((root: RootState) => root.rocket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket(id));
  }, [dispatch, id]);

  let rocketContainer = (
    <div style={{ width: "100%" }}>
      <RocketSkeleton />
    </div>
  );

  if (!rocket.loading)
    rocketContainer = <RocketDetails rocket={rocket.rocket.docs[0]} />;

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
        variants={pageVariantsAnim}>
        <HeroImage vehicle={id} />
        <StyledContainer>
          {rocketContainer}
          {rocket.rocket.docs[0]?.flickr_images.length > 0 ? (
            <ImageGallery
              infinite
              showPlayButton={false}
              showThumbnails={false}
              showBullets
              items={rocket.rocket.docs[0]?.flickr_images.map((img) => ({
                original: img,
              }))}
            />
          ) : null}
        </StyledContainer>
      </motion.div>
    </>
  );
};

export default Rocket;

const StyledContainer = styled.div`
  margin: 2rem 0 4rem 0;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 2rem;
  }

  @media ${device.large} {
    padding: 0 4rem;
  }

  @media ${device.desktop} {
    padding: 0 20%;
  }
`;
