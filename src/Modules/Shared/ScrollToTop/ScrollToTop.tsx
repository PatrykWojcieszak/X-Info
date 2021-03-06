import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//HOOKS
import { useScrollPosition } from "../../../Hooks/useScrollPosition";

//MIXINS
import { flexCenter } from "../../../resources/styles/helpers/mixins";

export const ScrollToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollPosition = useScrollPosition();

  return (
    <StyledScrollToTop
      as="div"
      hideScroll={scrollPosition === 0 ? true : false}
      onClick={scrollTop}>
      <FontAwesomeIcon icon="arrow-down" />
    </StyledScrollToTop>
  );
};

const StyledScrollToTop = styled(flexCenter)<{ hideScroll: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors?.blue};
  border-radius: 50%;
  font-size: 2rem;
  width: 50px;
  height: 50px;

  visibility: ${({ hideScroll }) => (hideScroll ? "hidden" : "visible")};

  svg {
    transform: rotate(180deg);
  }
`;
