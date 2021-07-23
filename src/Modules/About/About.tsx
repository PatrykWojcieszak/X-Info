import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//BACKGROUND
import bgImage from "../../resources/images/about_bg.jpg";

//OTHER
import { pageVariantsAnim } from "../../Animations/Animations_motion";
import { SEO } from "../Shared";
import { aboutPageTitle, aboutPageDescription } from "../Shared/SEO/Tags";
import { device } from "../../resources/styles/helpers/breakpoints";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={aboutPageTitle} description={aboutPageDescription} />
      <AboutContainer
        as={motion.div}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariantsAnim}>
        <AboutDetailsWrapper>
          <h2>{t("aboutTitle")}</h2>
          <p>
            {t("aboutDescription1")}{" "}
            <a
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX
            </a>{" "}
            {t("aboutDescription2")}{" "}
            <a
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX
            </a>{" "}
            {t("aboutDescription3")}
          </p>
          <p>
            {t("aboutDescription4")}{" "}
            <a
              href="https://github.com/PatrykWojcieszak"
              target="_blank"
              rel="noopener noreferrer">
              Patryk Wojcieszak
            </a>
            {t("aboutDescription5")}{" "}
            <a
              href="https://github.com/r-spacex/SpaceX-API"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX-API
            </a>
            {t("aboutDescription6")}
          </p>
          <p>
            {t("aboutDescription7")}{" "}
            <a
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX
            </a>
            {t("aboutDescription8")}{" "}
            <a
              href="https://www.flickr.com/photos/spacex/"
              target="_blank"
              rel="noopener noreferrer">
              SpaceX Flickr
            </a>
            .
          </p>
        </AboutDetailsWrapper>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5) url(${bgImage});
  background-blend-mode: darken;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const AboutDetailsWrapper = styled.div`
  border-radius: 0.8rem;
  padding: 1.2rem;
  background-color: rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colors?.fontPrimary};
  width: 90%;

  h2,
  p {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 100;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
  }

  p > a {
    color: ${({ theme }) => theme.colors?.blue};
    cursor: pointer;

    :visited {
      color: ${({ theme }) => theme.colors?.blue};
    }
  }

  @media ${device.tablet} {
    width: 350px;
  }

  @media ${device.large} {
    width: 500px;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media ${device.desktop} {
    width: 800px;

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;
