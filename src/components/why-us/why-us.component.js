import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import {
  WhyUsContainer,
  WhyUsTextContainer,
  WhyUsTitle,
  Text,
} from "./why-us.styles";

const WhyUs = () => {
  return (
    <WhyUsContainer>
      <StaticImage
        alt="mostrando tecnica de trabajo"
        src="https://i.ibb.co/d7c806n/ale.jpg"
        height={700}
      />
      <WhyUsTextContainer>
        <WhyUsTitle>Por Que Nosotros?</WhyUsTitle>
        <Text>
          {
            "Nosotros nos comprometemos a dar el mejor servicio. Ya que nuestra prioridad es que nuestros clientes se recupere lo mas pronto posible para que pueda seguir con sus actividades fisicas sin dolor o malestar."
          }
        </Text>
        <Text>{"Crea una cita con nosotros."}</Text>
        <Text>
          {
            "- 📍 Sierra de Tepoztlan #128 A Bosques del Prado Sur, Aguascalientes, Ags."
          }
        </Text>
        <Text>{"- ☎️ (449)-555-4345"}</Text>
      </WhyUsTextContainer>
    </WhyUsContainer>
  );
};

export default WhyUs;