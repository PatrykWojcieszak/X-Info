import React from "react";
import { Links } from "../../../Types";
import { MediaLink } from "./MediaLink/MediaLink";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./MediaSection.module.scss";

export const MediaSection = ({ links }: mediaSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.MediaSection}>
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
    </div>
  );
};

type mediaSectionProps = {
  links: Links;
};
