import React from "react";
import { Links } from "../../../Types";
import { MediaLink } from "./MediaLink/MediaLink";
import { useTranslation } from "react-i18next";

//STYLES
import { flexCenter } from "../../../resources/styles/helpers/mixins";
import styled from "styled-components/macro";

export const MediaSection = ({ links }: mediaSectionProps) => {
  const { t } = useTranslation();

  return (
    <StyledMediaSection>
      {links.reddit.campaign && (
        <MediaLink
          name={t("campaign")}
          icon="reddit-alien"
          brand
          link={links.reddit.campaign}
        />
      )}

      {links.reddit.launch && (
        <MediaLink
          name={t("launch")}
          icon="reddit-alien"
          brand
          link={links.reddit.launch}
        />
      )}

      {links.reddit.media && (
        <MediaLink
          name={t("media")}
          icon="reddit-alien"
          brand
          link={links.reddit.media}
        />
      )}

      {links.wikipedia && (
        <MediaLink
          name={t("wikipedia")}
          icon="wikipedia-w"
          brand
          link={links.wikipedia}
        />
      )}

      {links.article && (
        <MediaLink
          name={t("article")}
          icon="file-alt"
          brand={false}
          link={links.article}
        />
      )}

      {links.presskit && (
        <MediaLink
          name={t("pressKit")}
          icon="newspaper"
          brand={false}
          link={links.presskit}
        />
      )}
    </StyledMediaSection>
  );
};

type mediaSectionProps = {
  links: Links;
};

const StyledMediaSection = styled(flexCenter)`
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 4rem 0;
`;
