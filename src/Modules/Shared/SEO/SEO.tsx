import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ description, title }: seoProps) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="x-info, SpaceX, info, launches, Starlink, Falcon, Starship, stats"
      />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.x-info.eu" />
      <meta name="author" content="Patryk Wojcieszak" />
    </Helmet>
  );
};

type seoProps = {
  title: string;
  description: string;
};

export default SEO;
