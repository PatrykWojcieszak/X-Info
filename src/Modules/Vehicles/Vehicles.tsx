import React from "react";
import { motion } from "framer-motion";

//COMPONENTS
import { VehicleRocket } from "./VehicleRocket/VehicleRocket";
import { Description } from "./Description/Description";
import { SEO } from "../Shared";

import { pageVariantsAnim } from "../../Animations/Animations_motion";

//IMAGES
import falcon1 from "../../resources/images/f1.png";
import falcon9 from "../../resources/images/f9.png";
import falconHeavy from "../../resources/images/fh2.png";
import starship from "../../resources/images/st.png";
import { vehiclesPageTitle, vehiclesPageDescription } from "../Shared/SEO/Tags";
import { RocketType } from "../../Types";
import styled from "styled-components/macro";
import { device } from "../../resources/styles/helpers/breakpoints";

const Vehicles = () => {
  return (
    <>
      <SEO title={vehiclesPageTitle} description={vehiclesPageDescription} />
      <StyledVehicles
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}>
        <Description />
        <VehicleRocket name="Falcon 1" img={falcon1} link={RocketType.f1} />
        <VehicleRocket name="Falcon 9" img={falcon9} link={RocketType.f9} />
        <VehicleRocket
          name="Falcon Heavy"
          img={falconHeavy}
          link={RocketType.fh}
        />
        <VehicleRocket
          name="Starship"
          img={starship}
          link={RocketType.starship}
        />
      </StyledVehicles>
    </>
  );
};

export default Vehicles;

const StyledVehicles = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6rem 0 4rem 0;
  flex-direction: column;

  @media ${device.tablet} {
    justify-content: space-evenly;
    align-items: flex-end;
    flex-direction: row;
  }
`;
