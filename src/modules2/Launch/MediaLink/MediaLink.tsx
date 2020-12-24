import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

//STYLES
import styles from "./MediaLink.module.scss";

const MediaLink = ({ name, icon, brand, link }: mediaLinkProps) => {
  let faIcon = ["fas", icon] as IconProp;

  if (brand) faIcon = ["fab", icon] as IconProp;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={styles.LinkBtn}>
        <FontAwesomeIcon icon={faIcon} />
        <h4>{name}</h4>
      </div>
    </a>
  );
};

type mediaLinkProps = {
  name: string;
  icon: IconName;
  brand: boolean;
  link?: string;
};

export default React.memo(MediaLink);
