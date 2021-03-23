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
    <StyledPatchContainer>
      <StyledPatch src={patchImg ? patchImg : noImage} alt="mission patch" />
      {showMoreDetailsButton && (
        <StyledBtn styleType="primary" name={t("moreDetails")} />
      )}
    </StyledPatchContainer>
  );
};

type patchProps = {
  patchImg: string;
  showMoreDetailsButton: boolean;
};

const StyledPatchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  max-height: 305px;

  @media ${device.mobile} {
    justify-content: space-evenly;
  }

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 2rem;
    margin-bottom: 0;
    width: 350px;
  }
`;

const StyledPatch = styled.img`
  width: 200px;

  @media ${device.tablet} {
    width: 210px;
    margin-bottom: 2rem;
  }
`;

const StyledBtn = styled(Button)`
  @media ${device.tablet} {
    width: 100%;
  }
`;
