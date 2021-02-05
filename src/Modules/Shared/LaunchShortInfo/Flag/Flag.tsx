import React from "react";

//STYLES
import styles from "./Flag.module.scss";

//OTHER
import { getCountryCode } from "../../../../Other/GetCountryCode";

export const Flag = ({ nationality }: flagProps) => {
  const countryCode = getCountryCode(nationality);

  return (
    <img
      className={styles.Flag}
      src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
      alt="flag"
      loading="lazy"
    />
  );
};

type flagProps = {
  nationality: string;
};
