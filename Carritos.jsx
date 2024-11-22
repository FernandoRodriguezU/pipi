import React from 'react';
import styled from 'styled-components';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CarritoContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.2);
  padding: 20px;
  overflow-y: auto;
`;

const ItemCarrito = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  gap: 10px;
`;

const ImagenProducto = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

const DetallesProducto = styled.div`
  flex: 1;
`;

const ControlCantidad = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const BotonCantidad = styled.button`
  padding: 2px 8px;
  border: 1px solid #c0392b;
  background: white;
  color: #c0392b;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #c0392b;
    color: white;
  }
`;

const BotonEliminar = styled.button`
  padding: 5px 10px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }
`;

const Total = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-top: 2px solid #eee;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BotonPagar = styled.button`
  padding: 8px 16px;
  background-color: #c0392b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #a93226;
  }
`;

const Carrito = () => {
  const { itemsCarrito, eliminarDelCarrito, actualizarCantidad } = useCart();
  const navigate = useNavigate();

  const calcularTotal = () => {
    return itemsCarrito.reduce((total, item) => {
      const precio = parseFloat(item.precio.replace('Bs', '').trim());
      return total + (precio * item.cantidad);
    }, 0).toFixed(2);
  };

  const manejarPago = () => {
    const total = calcularTotal(); // Calcula el total
    navigate('/pagar', { state: { total } }); // Pasa el total como parte del estado
  };

  return (
    <CarritoContainer>
      <h2>Tu Carrito</h2>
      {itemsCarrito.map(item => (
        <ItemCarrito key={item.id}>
          <ImagenProducto src={item.imagen} alt={item.nombre} />
          <DetallesProducto>
            <h4>{item.nombre}</h4>
            <p>{item.precio}</p>
            <ControlCantidad>
              <BotonCantidad 
                onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                disabled={item.cantidad <= 1}
              >
                -
              </BotonCantidad>
              <span>{item.cantidad}</span>
              <BotonCantidad 
                onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
              >
                +
              </BotonCantidad>
            </ControlCantidad>
          </DetallesProducto>
          <BotonEliminar onClick={() => eliminarDelCarrito(item.id)}>
            X
          </BotonEliminar>
        </ItemCarrito>
      ))}
      <Total>
        <span>Total: {calcularTotal()} Bs</span>
        <BotonPagar onClick={manejarPago}>Ir a Pagar</BotonPagar>
      </Total>
    </CarritoContainer>
  );
};

export default Carrito;