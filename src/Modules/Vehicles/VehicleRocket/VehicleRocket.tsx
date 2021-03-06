import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { device } from "../../../resources/styles/helpers/breakpoints";
import { flexColumn } from "../../../resources/styles/helpers/mixins";

export const VehicleRocket = ({ name, img, link }: vehicleRocketProps) => {
  return (
    <Link to={`/vehicles/${link}`}>
      <StyledRocket>
        <StyledRocketName>{name}</StyledRocketName>
        <StyledRocketImage src={img} alt={name} />
      </StyledRocket>
    </Link>
  );
};

type vehicleRocketProps = {
  name: string;
  img: string;
  link: string;
};

const StyledRocket = styled(flexColumn)`
  margin: 2rem 0;
  cursor: pointer;

  @media ${device.tablet} {
    margin: 0 2rem;
  }
`;

const StyledRocketName = styled.h4`
  font-weight: 100;
  color: ${({ theme }) => theme.colors?.fontPrimary};
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
`;

const StyledRocketImage = styled.img`
  border: 1px solid transparent;
  border-left: 1px solid ${({ theme }) => theme.colors?.fontSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors?.fontSecondary};
  transition: all 0.4s ease-in-out;
  border-top-left-radius: 0.5rem;

  &:hover {
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors?.fontSecondary};
  }
`;
