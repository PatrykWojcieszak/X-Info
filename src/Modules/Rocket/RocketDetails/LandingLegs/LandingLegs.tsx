import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../../Shared";

//STYLES
import { rightToLeftAnim } from "../../../../Animations/Animations_motion";

//TYPES
import { LandingLegs as LandingLegsType } from "../../../../Types";
import styled from "styled-components/macro";
import { flexColumnCenter } from "../../../../resources/styles/helpers/mixins";

export const LandingLegs = ({ landingLegs }: landingLegsProps) => {
  const { t } = useTranslation();

  return (
    <StyledLandingLegs
      variants={rightToLeftAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      as={motion.div}>
      {landingLegs.number && (
        <InfoLine title={t("number")} value={`${landingLegs.number}`} />
      )}

      {landingLegs.material && (
        <InfoLine title={t("material")} value={`${landingLegs.material} `} />
      )}
    </StyledLandingLegs>
  );
};

type landingLegsProps = {
  landingLegs: LandingLegsType;
};

const StyledLandingLegs = styled(flexColumnCenter)`
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
