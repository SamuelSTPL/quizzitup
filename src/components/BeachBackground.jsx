import React from "react";
import beach from "../images/beach.mp4";
import trees from "../images/palmtrees.mp4";
import sunset from "../images/sunset.mp4";
import coastline from "../images/island.mp4";

import styled from "styled-components";

export default function BackgroundVideo({ background }) {
  const backgroundToUse = (string) => {
    if (string === "beach") return beach;
    if (string === "trees") return trees;
    if (string === "sunset") return sunset;
    if (string === "coastline") return coastline;
  };

  return (
    <>
      <Video src={backgroundToUse(background)} muted loop autoPlay></Video>
    </>
  );
}

const Video = styled.video`
  right: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;
