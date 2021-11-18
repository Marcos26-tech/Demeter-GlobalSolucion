import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.nav`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  background-color: #d10038;
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
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
  }
  a:hover,
  a:active,
  a.active {
    color: #2c0501;
    padding-bottom: 0.25rem;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    height: 3rem;
    li {
      margin: 0 0.5rem;
    }
  }
`;

const Menu = () => {
  const userCtx = useContext(UserContext);

  return (
    <>
      <StyledMenu>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            {userCtx.tipoUsuario === "entidade" ? (
              <Link to="/selecionamercado">Alimentos para doação</Link>
            ) : (
              ""
            )}
          </li>

          <li>
            {!userCtx.isLoggedIn ? <Link to="/cadastro">Cadastre-se</Link> : ""}
          </li>

          <li>
            {userCtx.tipoUsuario === "supermercado" ? (
              <Link to="/cadastroalimento">Cadastrar alimentos</Link>
            ) : (
              ""
            )}
          </li>

          <li>
            {userCtx.tipoUsuario === "supermercado" ? (
              <Link to="/editar">Estoque de alimentos</Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {userCtx.isLoggedIn ? (
              <Link to="/home" onClick={userCtx.logout}>
                Sair
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </StyledMenu>
    </>
  );
};

export default Menu;
