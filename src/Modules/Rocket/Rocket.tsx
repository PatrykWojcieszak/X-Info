import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";

//STYLES
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
import styled from "styled-components/macro";
import { flexCenter } from "../../resources/styles/helpers/mixins";
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
      <StyledRocketWrapper>
        <StyledRocketImg>
          <img src={rocketImg} alt="rocket" />
        </StyledRocketImg>
        <RocketDetails rocket={rocket.rocket.docs[0]} />
      </StyledRocketWrapper>
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
  padding: 0 10%;

  @media ${device.tablet} {
    padding: 0 1rem;
  }

  @media ${device.large} {
    padding: 0 20%;
  }
`;

const StyledRocketWrapper = styled(flexCenter)`
  align-items: flex-start;
  position: relative;
  margin-bottom: 4rem;
`;

const StyledRocketImg = styled.div`
  height: 40%;

  img {
    height: 450px;
  }

  @media ${device.tablet} {
    height: 60%;

    img {
      height: 700px;
    }
  }

  @media ${device.large} {
    img {
      height: 900px;
    }
  }
`;
