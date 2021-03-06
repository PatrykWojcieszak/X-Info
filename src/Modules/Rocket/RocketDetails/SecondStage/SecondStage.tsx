import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../../Shared";

//STYLES
import { rightToLeftAnim } from "../../../../Animations/Animations_motion";

//TYPES
import { SecondStage as SecondStageType } from "../../../../Types";
import { flexColumnCenter } from "../../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";

export const SecondStage = ({ secondStage }: secondStageProps) => {
  const { t } = useTranslation();

  return (
    <StyledSecondStage
      as={motion.div}
      variants={rightToLeftAnim}
      initial="hidden"
      animate="show"
      exit="exit">
      {secondStage.engines && (
        <InfoLine title={t("engines")} value={`${secondStage.engines}`} />
      )}

      {(secondStage.thrust.kN || secondStage.thrust.lbf) && (
        <InfoLine
          title={t("thrust")}
          value={`${secondStage.thrust.kN} kn | ${secondStage.thrust.lbf} lbf`}
        />
      )}

      {secondStage.fuel_amount_tons && (
        <InfoLine
          title={t("fuelAmount")}
          value={`${secondStage.fuel_amount_tons} tons`}
        />
      )}

      {secondStage.burn_time_sec && (
        <InfoLine
          title={t("burnTime")}
          value={`${secondStage.burn_time_sec} sec`}
        />
      )}
    </StyledSecondStage>
  );
};

type secondStageProps = {
  secondStage: SecondStageType;
};

const StyledSecondStage = styled(flexColumnCenter)`
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
