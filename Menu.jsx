// src/assets/Menu.jsx

import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <Title>Menú</Title>
      <MenuItem>Pizza Margherita</MenuItem>
      <MenuItem>Pasta Carbonara</MenuItem>
      <MenuItem>Ensalada César</MenuItem>
      {/* Agrega más elementos del menú aquí */}
    </MenuContainer>
  );
};

export default Menu;