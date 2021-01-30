import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="17" rx="0" ry="0" width="287" height="227" />
  </ContentLoader>
);

export default CardLoader;
