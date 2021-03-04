import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";
import { flexColumn } from "../../../../resources/styles/helpers/mixins";

export const SecondaryDetails = ({
  launchSiteName,
  customers,
}: secondaryDetailsProps) => {
  const { t } = useTranslation();

  return (
    <StyledSecondaryDetails>
      <StyledElement as="div">
        {launchSiteName && <StyledTitle>{t("launchSite")}: </StyledTitle>}
        {customers?.length > 0 && <StyledTitle>{t("customer")}: </StyledTitle>}
      </StyledElement>
      <StyledElement as="div">
        {launchSiteName && <StyledValue>{launchSiteName}</StyledValue>}
        {customers?.length > 0 && (
          <StyledValue>
            {customers.map((customer, index) => (
              <span key={index}>{customer}, </span>
            ))}
          </StyledValue>
        )}
      </StyledElement>
    </StyledSecondaryDetails>
  );
};

type secondaryDetailsProps = {
  launchSiteName: string;
  customers: string[];
};

const StyledSecondaryDetails = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const StyledElement = styled(flexColumn)`
  margin-right: 1rem;
`;

const StyledFont = styled.h4`
  margin-top: 0.5rem;
  font-weight: 100;
  font-size: 0.7rem;

  @media ${device.large} {
    font-size: 1rem;
  }
`;

const StyledTitle = styled(StyledFont)`
  color: ${({ theme }) => theme.colors?.fontSecondary};
`;

const StyledValue = styled(StyledFont)`
  color: ${({ theme }) => theme.colors?.fontPrimary};
`;
