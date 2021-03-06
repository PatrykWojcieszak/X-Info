import React from "react";
import { useTranslation } from "react-i18next";

//IMAGES
import sadRocket from "../../../resources/images/sadRocket.png";
import styled from "styled-components/macro";
import { flexColumnCenter } from "../../../resources/styles/helpers/mixins";

export const NotFoundLaunches = React.memo(() => {
  const { t } = useTranslation();

  return (
    <StyledNotFound>
      <img src={sadRocket} alt="sad rocket" />
      <h2>{t("launchesNotFound")}!</h2>
    </StyledNotFound>
  );
});

const StyledNotFound = styled(flexColumnCenter)`
  h2 {
    font-weight: 100;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    margin-top: 2rem;
  }

  img {
    width: 200px;
    transform: rotate(30deg);
  }
`;
