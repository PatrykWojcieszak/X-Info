import React from "react";
import styled from "styled-components/macro";

//COMPONENTS
import { Missions } from "./Missions/Missions";
import { Details } from "./Details/Details";

//MIXINS
import { flexColumn } from "../../../resources/styles/helpers/mixins";
import { device } from "../../../resources/styles/helpers/breakpoints";

//TYPES
import { Launch } from "../../../Types";

export const BoosterLaunchesInfo = ({
  serial,
  block,
  status,
  reuse_count,
  launches,
}: boostersType) => {
  return (
    <StyledBoosterLaunchesInfo as="div">
      <Details
        block={block}
        serial={serial}
        status={status}
        reuse_count={reuse_count}
        launches={launches}
      />
      <Missions missions={launches} />
    </StyledBoosterLaunchesInfo>
  );
};

type boostersType = {
  block: number;
  serial: string;
  status: string;
  reuse_count: number;
  launches: Launch[];
};

const StyledBoosterLaunchesInfo = styled(flexColumn)`
  display: flex;
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 1rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
