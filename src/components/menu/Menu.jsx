import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.nav`
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  background-color: black;
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
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover,
  a:active,
  a.active {
    color: #64a546;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid #64a546;
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
              <Link to="/cadastro">Cadastro novo Usuario</Link>
            )} 
          </li>
        </ul>
      </StyledMenu>
    </>
  );
};

export default Menu;
