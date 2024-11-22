// src/assets/PedirAqui.jsx
import React from 'react';
import styled from 'styled-components';
import { useCart } from './CartContext';
import Carrito from './Carritos';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ProductoCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
`;

const ProductoImagen = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const BotonAgregar = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #c0392b;
  }
`;

const productos = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    precio: "35Bs",
    imagen: "ruta-imagen-1.jpg"
  },
  {
    id: 2,
    nombre: "Pizza Margherita",
    precio: "65Bs",
    imagen: "ruta-imagen-2.jpg"
  },
  // Agrega más productos según necesites
];

const PedirAqui = () => {
  const { agregarAlCarrito } = useCart();

  return (
    <Container>
      <h1>Realiza tu pedido</h1>
      <Carrito />
      <GridContainer>
        {productos.map(producto => (
          <ProductoCard key={producto.id}>
            <ProductoImagen src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <BotonAgregar onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </BotonAgregar>
          </ProductoCard>
        ))}
      </GridContainer>
    </Container>
  );
};

export default PedirAqui;