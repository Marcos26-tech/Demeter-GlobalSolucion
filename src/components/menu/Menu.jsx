import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.nav`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  background-color: #ca3636;
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 0 1rem;
    line-height: 2rem;
  }

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover,
  a:active,
  a.active {
    color: #1a0f0e;
    padding-bottom: 0.25rem;
    font-weight: bold;
  }
`;

const Menu = () => {
  let isLogado = window.localStorage.getItem("isLogado");

  return (
    <>
      <StyledMenu>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
             {isLogado ? ( 
            <Link to="/receita">Produtos para doação</Link>
             ) : (
              <Link to="/"></Link>
            )} 
          </li>

          <li>
             {isLogado ? ( 
            <Link to="/receita">Cadastrar Novos produtos</Link>
             ) : (
              <Link to="/login">Login</Link>
            )} 
          </li>

          <li>
             {isLogado ? ( 
            <Link to="/editar">Editar Produtos</Link>
            ) : (
              <Link to="/cadastro"></Link>
            )} 
          </li>
        </ul>
      </StyledMenu>
    </>
  );
};

export default Menu;
