import React from "react";
import styled from "styled-components/macro";

export const Backdrop = ({ clicked, show }: backdropProps) =>
  show ? <StyledBackdrop onClick={clicked}></StyledBackdrop> : null;

type backdropProps = {
  clicked: () => void;
  show: boolean;
};

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
