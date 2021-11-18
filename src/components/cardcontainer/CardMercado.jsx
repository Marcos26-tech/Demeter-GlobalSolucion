import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Produto = styled.div`
  background-color: #807d7dcf;
  border-radius: 10px;
  width: 30%;
  padding: 1.4rem;
  margin: 1rem;
  img {
    width: 100%;
  }
  p {
    text-align: center;
    text-align: justify;
  }
  h3 {
    text-align: center;
    margin-top: 10px;
  }
  @media (max-width: 783px) {
    width: 100%;
    padding: 1.4rem;
    margin: 1rem;
    h3 {
      text-align: center;
      font-size: 15px;
    }
  }

`;
export const Button = styled.button`
  margin:  20px 0 20px 15%;
  display: inline-block;
  width: 70%;
  padding: 5px 0;
  text-align: center;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(8, 8, 8);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
    font-size: 12px;
  }
`;

const CardMercado = (props) => {
  const history = useHistory();

  const selecionamercado = (id) => {
    history.push("/alimento/" + id);
  };
  return (
    <Produto>
      <div>
        <img src={props.foto} alt={props.nome} />
        <h3>{props.nome}</h3>
        <Button onClick={() => selecionamercado(props.id)}>
          Selecione o supermercado
        </Button>
      </div>
    </Produto>
  );
};

export default CardMercado;
