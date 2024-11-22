import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './path/to/your/logo.png'; // Asegúrate de que la ruta al logo sea correcta

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
`;

const Logo = styled.img`
    height: 50px; // Ajusta el tamaño según sea necesario
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo src={logo} alt="Logo" />
            <NavLinks>
                <li><NavLink to="/">Menú</NavLink></li>
                <li><NavLink to="/pedi-aqui">Pedi Aquí</NavLink></li>
                <li><NavLink to="/atencion-reclamos">Atención y Reclamos</NavLink></li> {/* Enlace combinado */}
            </NavLinks>
        </Nav>
    );
};

export default Navbar;