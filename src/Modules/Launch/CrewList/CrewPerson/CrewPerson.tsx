import React from "react";
import styled from "styled-components/macro";
import { flexColumnCenter } from "../../../../resources/styles/helpers/mixins";

export const CrewPerson = React.memo(
  ({ name, img, agency }: crewPersonProps) => {
    return (
      <StyledCrewPerson>
        <img src={img} alt="astronaut" loading="lazy" />
        <StyledName as="h3">{name}</StyledName>
        <StyledAgency as="h3">{agency}</StyledAgency>
      </StyledCrewPerson>
    );
  }
);

type crewPersonProps = {
  name: string;
  img: string;
  agency: string;
};

const StyledCrewPerson = styled(flexColumnCenter)`
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 1rem;
  padding: 0.5rem 0.8rem;
  min-width: 220px;
  max-width: 220px;

  img {
    border-radius: 50%;
    height: 210px;
    width: 210px;
    object-fit: cover;
  }
`;

const StyledFont = styled.h3`
  margin: 0.5rem 0;
`;

const StyledAgency = styled(StyledFont)`
  color: ${({ theme }) => theme.colors?.blue};
  font-size: 0.9rem;
`;

const StyledName = styled(StyledFont)`
  color: ${({ theme }) => theme.colors?.fontPrimary};
  font-weight: 100;
`;
