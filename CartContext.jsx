// src/assets/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarAlCarrito = (producto) => {
    setItemsCarrito(prevItems => {
      const itemExistente = prevItems.find(item => item.id === producto.id);
      if (itemExistente) {
        return prevItems.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prevItems, { ...producto, cantidad: 1 }];
    });
  };
  

  const eliminarDelCarrito = (productoId) => {
    setItemsCarrito(prevItems => prevItems.filter(item => item.id !== productoId));
  };

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarDelCarrito(productoId);
      return;
    }
    setItemsCarrito(prevItems =>
      prevItems.map(item =>
        item.id === productoId
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <CartContext.Provider value={{ 
      itemsCarrito, 
      agregarAlCarrito, 
      eliminarDelCarrito, 
      actualizarCantidad,
      mostrarCarrito,
      toggleCarrito
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);