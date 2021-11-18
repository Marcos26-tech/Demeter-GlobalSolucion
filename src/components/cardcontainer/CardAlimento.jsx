import React from "react";
import styled from "styled-components";

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
`;

const CardAlimento = (props) => {
  return (
    <Produto>
      <div>
        <img src={props.foto} alt={props.nome} />
        <h3>{props.nome}</h3>
        <p>
          <em> Quantidade disponivel: {props.quantidade} Cxs</em>
        </p>
        <p>{props.validade}</p>
      </div>
    </Produto>
  );
};

export default CardAlimento;
