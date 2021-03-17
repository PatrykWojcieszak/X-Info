import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const LaunchName = React.memo(
  ({ launchName, dateLocal }: launchNameProps) => {
    const { t } = useTranslation();

    const isAfterLaunch = (): boolean => {
      if (new Date() > new Date(dateLocal)) return true;
      else return false;
    };

    return (
      <StyledLaunchNameWrapper>
        <StyledTitle>
          {isAfterLaunch() ? t("currentLaunch") : t("nextLaunchTitle")}:{" "}
        </StyledTitle>
        <StyledLaunchName>{launchName}</StyledLaunchName>
      </StyledLaunchNameWrapper>
    );
  }
);

type launchNameProps = {
  launchName: string;
  dateLocal: string;
};

const StyledFont = styled.h2`
  font-size: 2.25rem;

  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

const StyledLaunchName = styled(StyledFont)`
  color: ${({ theme }) => theme.colors?.blue};
  font-weight: normal;
`;

const StyledTitle = styled(StyledFont)`
  font-weight: 100;
  color: ${({ theme }) => theme.colors?.fontSecondary};
  margin-bottom: 1.2rem;

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const StyledLaunchNameWrapper = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
