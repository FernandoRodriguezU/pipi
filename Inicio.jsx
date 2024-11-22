import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from './Footer'; // Importa el componente Footer

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la ventana */
`;

const Header = styled.header`
  background-color: #c0392b;
  color: white;
  text-align: center;
  padding: 10px; /* Reducido el padding */
  display: flex;
  flex-direction: column; /* Organiza los elementos verticalmente */
  align-items: center; /* Centra los elementos horizontalmente */
`;

const Logo = styled.img`
  position: absolute; /* Permite que el logo esté a la izquierda */
  left: 10px; /* Espaciado desde la izquierda */
  top: 10px; /* Espaciado desde la parte superior */
  width: 100px; /* Ajustado el tamaño del logo para dispositivos móviles */
  height: auto; /* Mantiene la proporción de la imagen */

  @media (min-width: 768px) {
    width: 120px; /* Logo más grande en pantallas grandes */
  }
`;

const Title = styled.h1`
  margin: 20px 0; /* Espacio superior */
  font-size: 1.2rem; /* Tamaño de fuente más pequeño para móviles */

  @media (min-width: 768px) {
    font-size: 1.5rem; /* Tamaño de fuente más grande en pantallas grandes */
  }
`;

const ButtonContainer = styled.div`
  display: flex; /* Organiza los botones en una fila */
  justify-content: center; /* Centra los botones horizontalmente */
  margin-top: 10px; /* Espacio superior */
  gap: 10px; /* Espacio entre los botones */
  background-color: #c0392b;
  flex-wrap: wrap; /* Permite que los botones se ajusten en filas en pantallas pequeñas */
`;

const Content = styled.div`
  flex: 1; /* Permite que el contenido ocupe el espacio restante */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Cambiado para que el contenido se alinee en la parte superior */
`;

const Button = styled(NavLink)`
  background-color: #c0392b;
  color: white;
  padding: 8px 12px; /* Ajustado el padding */
  margin: 0 5px; /* Margen horizontal para separación */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 0.9rem; /* Tamaño de fuente más pequeño para móviles */

  &:hover {
    background-color: darkred;
  }

  @media (min-width: 768px) {
    padding: 8px 16px; /* Ajuste del padding en pantallas grandes */
    font-size: 1rem; /* Tamaño de fuente mayor en pantallas grandes */
  }
`;

const Inicio = () => {
  return (
    <Container>
      <Header>
        <Logo src="https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/384997084_700008262150540_431852375973985678_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NiioasfkP5IQ7kNvgEWCYmg&_nc_zt=23&_nc_ht=scontent.flpb2-2.fna&_nc_gid=AGameSs2DSFgY0kYmd4-j0R&oh=00_AYCooYvQK9V2npw6caSMG92DTE7_39banASWV7ZTcpArQA&oe=67447A05" alt="logo" />
        <Title>Te Ofrecemos sabores que desearás probar una y otra vez</Title>
        <ButtonContainer>
          <Button to="/menu">Menú</Button>
          <Button to="/pedir">Pedir Aquí</Button> {/* Cambiado de "/pedir-aqui" a "/pedir" */}
          <Button as="a" href="https://wa.me/59162392444">Atención y Reclamos</Button> {/* Enlace a WhatsApp */}
        </ButtonContainer>
      </Header>
      <Content>
        <Carousel /> {/* Aquí se inserta el carrusel */}
      </Content>
      <Footer /> {/* Aquí se inserta el footer */}
    </Container>
  );
};

export default Inicio;
