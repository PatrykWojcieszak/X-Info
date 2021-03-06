import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { InfoLine } from "../../../Shared";

//STYLES
import { rightToLeftAnim } from "../../../../Animations/Animations_motion";

//TYPES
import { Length, Mass, PayloadWeights } from "../../../../Types";
import styled from "styled-components/macro";
import { flexColumnCenter } from "../../../../resources/styles/helpers/mixins";

export const Overview = ({
  height,
  diameter,
  mass,
  payloads,
}: overviewProps) => {
  const { t } = useTranslation();

  return (
    <StyledOverview
      variants={rightToLeftAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      as={motion.div}>
      {height.meters || height.feet ? (
        <InfoLine
          title={t("height")}
          value={`${height.meters} m | ${height.feet} ft`}
        />
      ) : null}

      {diameter.meters || diameter.feet ? (
        <InfoLine
          title={t("diameter")}
          value={`${diameter.meters} m | ${diameter.feet} ft`}
        />
      ) : null}

      {mass.kg || mass.lb ? (
        <InfoLine title={t("mass")} value={`${mass.kg} kg | ${mass.lb} lb`} />
      ) : null}

      {payloads.map((payload, index) => (
        <InfoLine
          key={index}
          title={payload.id}
          value={`${payload.kg} kg | ${payload.lb} lb`}
        />
      ))}
    </StyledOverview>
  );
};

type overviewProps = {
  height: Length;
  diameter: Length;
  mass: Mass;
  payloads: PayloadWeights[];
};

const StyledOverview = styled(flexColumnCenter)`
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
