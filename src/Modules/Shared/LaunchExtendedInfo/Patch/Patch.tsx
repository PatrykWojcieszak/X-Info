import React from "react";
import { useTranslation } from "react-i18next";

//COMPONENTS
import { Button } from "../..";

import noImage from "../../../../resources/images/noImage.png";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Patch = ({ patchImg, showMoreDetailsButton }: patchProps) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledPatch src={patchImg ? patchImg : noImage} alt="mission patch" />
      {showMoreDetailsButton && (
        <Button styleType="primary" name={t("moreDetails")} />
      )}
    </>
  );
};

type patchProps = {
  patchImg: string;
  showMoreDetailsButton: boolean;
};

const StyledPatch = styled.img`
  margin-bottom: 1.5rem;
  width: 140px;

  @media ${device.tablet} {
    width: 200px;
  }
`;
