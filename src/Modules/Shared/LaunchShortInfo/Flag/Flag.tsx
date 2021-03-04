import React from "react";

//OTHER
import { getCountryCode } from "../../../../Other/GetCountryCode";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Flag = ({ nationality }: flagProps) => {
  const countryCode = getCountryCode(nationality);

  return (
    <StyledFlag
      src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
      alt="flag"
      loading="lazy"
    />
  );
};

type flagProps = {
  nationality: string;
};

const StyledFlag = styled.img`
  position: absolute;
  right: 0;
  width: 40px;
  right: 0;
  bottom: -7px;
  border-bottom-right-radius: 1rem;

  @media ${device.tablet} {
    width: 80px;
    bottom: -15px;
    border-bottom-right-radius: 2rem;
  }
`;
