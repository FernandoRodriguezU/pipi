// src/Rutas.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './assets/CartContext';
import Inicio from './assets/Inicio';
import Menu from './assets/Menu';
import PedirAqui from './assets/PedirAqui';
import Pagar from './assets/Pagar'; // Importa el componente Pagar
import PagarVisa from './assets/PagarVisa';

const RoutesComponent = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pedir" element={<PedirAqui />} />
          <Route path="/pagar" element={<Pagar />} /> // Agrega la ruta para Pagar
          <Route path="/pagar-visa" element={<PagarVisa />} />

        </Routes>
      </Router>
    </CartProvider>
  );
};

export default RoutesComponent;