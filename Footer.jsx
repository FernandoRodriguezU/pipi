// src/assets/Footer.jsx

// src/assets/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Estilos para el Footer
const FooterContainer = styled.footer`
  background-color: #c0392b; /* Color de fondo rojo */
  color: white; /* Color del texto */
  display: flex;
  justify-content: space-around; /* Espacio uniforme entre los elementos */
  padding: 20px; /* Aumentado el espaciado interno */
  position: relative; /* Para el posicionamiento de los logos */
  bottom: 0; /* Fija el footer en la parte inferior */
  width: 100%; /* Asegura que ocupe todo el ancho */
  flex-wrap: wrap; /* Permite que los elementos se ajusten en varias líneas si es necesario */
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Cambiado a centrar los elementos */
  margin: 0 20px; /* Aumentado el espaciado entre secciones */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px; /* Reducido el espacio superior para los logos */
`;

const Logo = styled.img`
  width: 25px; /* Ajustado el tamaño del logo */
  height: auto;
  margin-right: 5px; /* Espacio entre los logos */
`;

const Title = styled.h4`
  margin-bottom: 5px; /* Reducido el espacio entre el título y los párrafos */
  font-size: 1rem; /* Ajustado el tamaño de la fuente */
`;

const Paragraph = styled.p`
  margin: 3px 0; /* Reducido el espaciado entre los párrafos */
  font-size: 0.9rem; /* Ajustado el tamaño de la fuente */
`;

// Estilos para los enlaces
const Button = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 5px 0; /* Espaciado vertical entre botones */
  transition: color 0.3s;
  font-size: 0.9rem; /* Ajustado el tamaño de la fuente */

  &:hover {
    color: #f0f0f0; /* Color al pasar el cursor */
  }
`;

// Media queries para responsividad
const FooterResponsive = styled(FooterContainer)`
  @media (max-width: 768px) {
    flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    align-items: center; /* Centra los elementos */
    padding: 10px; /* Reduce el padding */
  }
`;

const Footer = () => {
  return (
    <FooterResponsive>
      <Section>
        <Title>Enlaces Rápidos</Title>
        <Button to="/">Inicio</Button>
        <Button to="/pedir-aqui">Pedir Aquí</Button>
        <Button to="/menu">Menú</Button>
      </Section>
      <Section>
        <Title>Horario de Atención</Title>
        <Paragraph>Atención de Lunes: 18:00pm - 23:00pm</Paragraph>
        <Paragraph>Miercoles - Domingo: 18:00pm - 23:00pm</Paragraph>
      </Section>
      <Section>
        <Title>Contáctanos</Title>
        <Paragraph>
          <Logo src="path/to/location-icon.png" alt="Ubicación" /> Calle Bolívar y O’Conor
        </Paragraph>
        <Paragraph>
          <Logo src="path/to/phone-icon.png" alt="Teléfono" /> 62392444
        </Paragraph>
        <Paragraph>
          <Logo src="path/to/email-icon.png" alt="Email" /> leonardo.inti.arenas@gmail.com
        </Paragraph>
      </Section>
      <LogoContainer>
        <Logo src="path/to/logo1.png" alt="Logo 1" />
        <Logo src="path/to/logo2.png" alt="Logo 2" />
      </LogoContainer>
    </FooterResponsive>
  );
};

export default Footer;