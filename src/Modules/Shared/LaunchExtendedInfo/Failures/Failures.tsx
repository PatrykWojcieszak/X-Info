import React from "react";
import { useTranslation } from "react-i18next";

//TYPES
import { Failure } from "../../../../Types";
import styled from "styled-components/macro";
import { device } from "../../../../resources/styles/helpers/breakpoints";

export const Failures = ({ failures }: failuresProps) => {
  const { t } = useTranslation();

  return (
    <StyledFailures>
      <h4>{t("failures")}:</h4>
      <ul>
        {failures.map((failure, index) => (
          <li key={index}>{failure.reason}</li>
        ))}
      </ul>
    </StyledFailures>
  );
};

type failuresProps = {
  failures: Failure[];
};

const StyledFailures = styled.div`
  background-color: ${({ theme }) => theme.colors?.foreground};
  margin-top: 1.5rem;
  border-radius: 0.8rem;
  padding: 1rem;

  p,
  h4 {
    font-size: 0.8rem;
    width: 80%;
    color: ${({ theme }) => theme.colors?.fontPrimary};
    font-weight: 100;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    width: 90%;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    list-style: none;
    color: ${({ theme }) => theme.colors?.fontSecondary};
    font-weight: 100;
  }

  ul li::before {
    content: "\2022";
    color: ${({ theme }) => theme.colors?.blue};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    font-size: 1rem;
    margin-left: -1em;
  }

  @media ${device.tablet} {
    p,
    h4 {
      font-size: 1rem;
    }

    ul {
      width: 80%;
      font-size: 1rem;
    }
  }
`;
