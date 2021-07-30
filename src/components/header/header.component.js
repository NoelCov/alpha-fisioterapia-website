import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import {
  HeaderContainer,
  HeaderTextContainer,
  HeaderTitle,
  HeaderSubtitle,
  TextContainer,
  Text,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <HeaderTitle>{"Alpha Fisioterapia"}</HeaderTitle>
        <HeaderSubtitle>
          {"Somos una clinica de Fisioterapia enfocada en el movimiento"}
        </HeaderSubtitle>
        <TextContainer>
        <Text>
          {"Contamos con experiencia desde niños hasta adulto mayor!"}
        </Text>
          <Text>
            {
              "Atendemos padecimientos desde un esguince, hasta patologias mas completas como hernias discales."
            }
          </Text>
          <Text>
            {
              "Nuestro principal objetivo es el trabajo con deportistas para prevenir y en caso de lesiones, que teromen cuanto antes su actividad fisica. Ademas tratamos principalmente lesiones de trauma y ortopedia."
            }
          </Text>
          <Text>
            {
              "Sea cual sea tu padecimiento, dolor, limitacion, queremos ayudarte y ensenarte el mejor camino para una adecuada recuperacion a traves del movimiento."
            }
          </Text>
        </TextContainer>
      </HeaderTextContainer>
      <StaticImage
        alt="header"
        src="https://i.ibb.co/JCF5X33/PHOTO-2021-07-28-10-31-10.jpg"
        height={750}
      />
    </HeaderContainer>
  );
};

export default Header;
