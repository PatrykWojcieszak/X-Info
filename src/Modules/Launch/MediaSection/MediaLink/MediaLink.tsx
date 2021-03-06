import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

//STYLES
import { flexColumnCenter } from "../../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";

export const MediaLink = React.memo(
  ({ name, icon, brand, link }: mediaLinkProps) => {
    let faIcon = ["fas", icon] as IconProp;

    if (brand) faIcon = ["fab", icon] as IconProp;
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <StyledLinkBtn>
          <FontAwesomeIcon icon={faIcon} />
          <h4>{name}</h4>
        </StyledLinkBtn>
      </a>
    );
  }
);

type mediaLinkProps = {
  name: string;
  icon: IconName;
  brand: boolean;
  link?: string;
};

const StyledLinkBtn = styled(flexColumnCenter)`
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  padding: 0.6rem;
  box-sizing: border-box;
  border-radius: 0.7rem;
  min-width: 150px;

  svg {
    color: ${({ theme }) => theme.colors?.blue};
    font-size: 3rem;
  }

  h4 {
    margin-top: 1.2rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors?.fontSecondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors?.blue};

    svg,
    h4 {
      color: ${({ theme }) => theme.colors?.fontPrimary};
    }
  }
`;
