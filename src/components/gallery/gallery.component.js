import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { GalleryContainer } from "./gallery.styles";

const Gallery = () => {
  return (
    <GalleryContainer>
      <StaticImage
        src="../../images/gallery-images/1.jpg"
        height={600}
        width={650}
        layout="fixed"
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/2.jpg"
        height={600}
        width={650}
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/3.jpg"
        height={600}
        width={650}
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/4.jpg"
        height={600}
        width={650}
        layout="fixed"
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/5.jpg"
        height={600}
        width={650}
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/6.jpg"
        height={600}
        width={650}
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/7.jpg"
        height={600}
        width={650}
        layout="fixed"
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/8.jpg"
        height={600}
        width={650}
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/9.jpg"
        height={600}
        width={650}
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/10.jpg"
        height={600}
        width={650}
        layout="fixed"
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/11.jpg"
        height={600}
        width={650}
        alt="teraphy demonstration"
      />
      <StaticImage
        src="../../images/gallery-images/12.jpg"
        height={600}
        width={650}
        alt="teraphy demonstration"
      />
    </GalleryContainer>
  );
};

export default Gallery;
