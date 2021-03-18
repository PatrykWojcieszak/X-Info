import React, { useState } from "react";
import styled from "styled-components/macro";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({ content, children, delay }: TooltipProps) => {
  let timeout;
  const [showTooltip, setShowTooltip] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setShowTooltip(true);
    }, delay || 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setShowTooltip(false);
  };

  return (
    <StyledTooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {showTooltip && <StyledTooltip>{content}</StyledTooltip>}
    </StyledTooltipWrapper>
  );
};

const StyledTooltipWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledTooltip = styled.div`
  position: absolute;
  z-index: 900;
  top: -70px;
  background-color: ${({ theme }) => theme.colors?.foreground};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors?.fontPrimary};
  text-align: center;
  padding: 0.5rem;
  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.5);
`;
