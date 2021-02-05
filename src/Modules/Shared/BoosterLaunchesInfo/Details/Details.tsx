import React from "react";
import { useTranslation } from "react-i18next";

//STYLES
import styles from "./Details.module.scss";

//TYPES
import { Launch } from "../../../../Types";
import { InfoElement } from "./InfoElement/InfoElement";

export const Details = ({
  block,
  serial,
  status,
  reuse_count,
  launches,
}: detailsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.Details}>
      <div className={[styles.InfoElement, styles.One].join(" ")}>
        <InfoElement title={t("block")} value={block.toString()} />
      </div>
      <div className={[styles.InfoElement, styles.Two].join(" ")}>
        <InfoElement title={t("serialNumber")} value={serial} />
      </div>
      <div className={[styles.InfoElement, styles.Three].join(" ")}>
        <InfoElement
          title={t("launches")}
          value={
            reuse_count ? `${reuse_count + 1}` : launches.length > 0 ? "1" : "0"
          }
        />
      </div>
      <div className={[styles.InfoElement, styles.Four].join(" ")}>
        <InfoElement title={t("status")} value={status} />
      </div>
    </div>
  );
};

type detailsProps = {
  block: number;
  serial: string;
  status: string;
  reuse_count: number;
  launches: Launch[];
};
