import React from "react";

import { OurWorkContainer, OurWorkTitle } from "./our-work.styles";

import Gallery from "../gallery/gallery.component";

const OurWork = () => {
  return (
    <OurWorkContainer>
      <OurWorkTitle>{"Galeria de nuestro trabajo"}</OurWorkTitle>
      <Gallery />
    </OurWorkContainer>
  );
};

export default OurWork;
