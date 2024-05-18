
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../styles/logo3.png";

const NavbarContainer = styled.div`
  width: 100%; /* Ocupa 100% da largura da tela */
  background-color: #f2f2f2;
  
  border-radius: 5px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin: 0px 80px 0px 40px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start; 
    padding: 10px; 
  }
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
`;

const LogoImage = styled.img`
  width: 150px;
`;

const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 35px;
  list-style: none;

  @media (max-width: 768px) {
    /* Estilos para telas menores (responsivo) */
    grid-template-columns: 1fr; /* Uma coluna */
    gap: 15px; /* Espaçamento menor */
  }
`;

const NavLinkItem = styled.li`
  a {
    text-decoration: none;
    color: #555;
    font-size: 20px;
    &:hover {
      color: #00746C;
      font-size: 21px;
      transition: 500ms;
    }
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Nav>
        <Logo to="/">
          <LogoImage src={logo} alt="Meu Logo" />
        </Logo>
        <NavLinks>
        <NavLinkItem>
            <Link to="/">Sobre a PetCare+</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/consulta">Marcar consulta</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/login">Login</Link>
          </NavLinkItem>
        </NavLinks>
      </Nav>
    </NavbarContainer>
  );
}

export default Navbar;
